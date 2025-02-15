import { dev } from '$app/environment';
import cors from 'cors';
import { siteConfig } from '$lib/metadata';

const allowedOrigins = dev ? 'http://localhost:5173' : siteConfig.url.toString();

const corsMiddleware = cors({
	origin: (origin, callback) => {
		if (!origin || origin === allowedOrigins) {
			callback(null, true);
		} else {
			callback(new Error('Not allowed by CORS'));
		}
	},
	methods: ['GET', 'POST', 'OPTIONS'],
	credentials: true,
	maxAge: 3600,
	optionsSuccessStatus: 200
});

export function applyCors(request: Request, response: Response): Promise<Response> {
	return new Promise((resolve, reject) => {
		const nodeReq = {
			method: request.method,
			headers: Object.fromEntries(request.headers.entries())
		};

		const nodeRes = {
			getHeader: (name: string) => null,
			setHeader: (name: string, value: string) => {
				response = new Response(response.body, {
					status: response.status,
					headers: new Headers({
						...Object.fromEntries(response.headers.entries()),
						[name]: value
					})
				});
			},
			statusCode: response.status
		};

		corsMiddleware(nodeReq as any, nodeRes as any, (err: Error) => {
			if (err) {
				resolve(
					new Response('Origin not allowed', {
						status: 403,
						statusText: 'Forbidden'
					})
				);
			} else {
				resolve(response);
			}
		});
	});
}
