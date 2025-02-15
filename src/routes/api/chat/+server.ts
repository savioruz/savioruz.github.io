import { GoogleGenerativeAI, HarmBlockThreshold, HarmCategory } from '@google/generative-ai';
import { GEMINI_API_KEY } from '$env/static/private';
import { json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';
import { resume as data } from '$lib/resume/resume';
import { RateLimit } from '$lib/server/rate-limit';
import { applyCors } from '$lib/server/cors';

const rateLimiter = new RateLimit({
	windowMs: 60000,
	maxRequests: 20
});

setInterval(() => rateLimiter.cleanup(), 60000);

const genAI = new GoogleGenerativeAI(GEMINI_API_KEY);

function validateMessage(message: unknown): string {
	if (typeof message !== 'string') {
		throw new Error('Message must be a string');
	}

	if (message.length > 500) {
		throw new Error('Message too long (max 500 characters)');
	}

	if (message.trim().length === 0) {
		throw new Error('Message cannot be empty');
	}

	return message.trim();
}

export const POST: RequestHandler = async ({ request, getClientAddress }) => {
	try {
		const clientIp = getClientAddress();
		if (rateLimiter.isLimited(clientIp)) {
			const response = json(
				{ error: 'Too many requests. Please try again later.' },
				{ status: 429 }
			);
			return await applyCors(request, response);
		}

		const body = await request.json().catch(() => ({}));
		if (!body || !body.message) {
			const response = json({ error: 'Invalid request body' }, { status: 400 });
			return await applyCors(request, response);
		}

		const message = validateMessage(body.message);

		const model = genAI.getGenerativeModel({
			model: 'gemini-1.5-flash',
			generationConfig: {
				maxOutputTokens: 300,
				temperature: 0.7,
				topP: 0.8,
				topK: 40
			},
			safetySettings: [
				{
					category: HarmCategory.HARM_CATEGORY_HATE_SPEECH,
					threshold: HarmBlockThreshold.BLOCK_ONLY_HIGH
				},
				{
					category: HarmCategory.HARM_CATEGORY_SEXUALLY_EXPLICIT,
					threshold: HarmBlockThreshold.BLOCK_ONLY_HIGH
				},
				{
					category: HarmCategory.HARM_CATEGORY_HARASSMENT,
					threshold: HarmBlockThreshold.BLOCK_ONLY_HIGH
				},
				{
					category: HarmCategory.HARM_CATEGORY_DANGEROUS_CONTENT,
					threshold: HarmBlockThreshold.BLOCK_ONLY_HIGH
				}
			]
		});

		const systemPrompt = `You are k-assistant, a helpful AI assistant for ${data.name}. Your role is to:

1. Answer questions about ${data.name}'s background, experience, skills, and projects
2. Be friendly and professional in your responses
3. Keep responses concise but informative
4. Only share information that is provided in the context below
5. If asked about something not in the context, politely say you don't have that information

Context:
Email: ${data.email}
LinkedIn: ${data.linkedin}
Github: ${data.github}
Twitter: ${data.twitter}
Website: ${data.website}
About: ${data.about}
Summary: ${data.summary}
Other: ${data.other}
Experience: ${data.experience.map((exp) => `${exp.company} - ${exp.position} - ${exp.location} - ${exp.startDate} - ${exp.endDate}`).join('\n')}
Education: ${data.education.map((edu) => `${edu.school} - ${edu.degree} - ${edu.location} - ${edu.startDate} - ${edu.endDate}`).join('\n')}
Skills: ${data.skills.join(', ')}
Featured Projects: ${data.featuredProjects.map((project) => `${project.name} - ${project.description} - ${project.tags.join(', ')} - ${project.startDate} - ${project.endDate}`).join('\n')}
Past Projects: ${data.pastProjects.map((project) => `${project.name} - ${project.description} - ${project.tags.join(', ')} - ${project.startDate} - ${project.endDate}`).join('\n')}`;

		const prompt = `${systemPrompt}\n\nUser: ${message}\nAssistant:`;

		const result = await model.generateContent(prompt);
		const response = await result.response;

		return await applyCors(request, json({ response: response.text() }));
	} catch (error) {
		console.error('Error:', error);

		if (error instanceof Error) {
			if (error.message.includes('Message')) {
				const response = json({ error: error.message }, { status: 400 });
				return await applyCors(request, response);
			}
		}

		const response = json({ error: 'An unexpected error occurred' }, { status: 500 });
		return await applyCors(request, response);
	}
};
