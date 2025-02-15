import { dev } from '$app/environment';
import { siteConfig } from '$lib/metadata';

type CorsConfig = {
    origin: string[];
    methods: string[];
    credentials: boolean;
    maxAge?: number;
};

export const corsConfig: CorsConfig = {
    origin: dev ? ['http://localhost:5173', 'http://localhost:4173'] : [siteConfig.url.toString()],
    methods: ['GET', 'POST', 'OPTIONS'],
    credentials: true,
    maxAge: 3600
};

export function setCorsHeaders(response: Response): Response {
    const headers = new Headers(response.headers);
    
    const origin = headers.get('Origin');
    if (origin && corsConfig.origin.includes(origin)) {
        headers.set('Access-Control-Allow-Origin', origin);
    }

    headers.set('Access-Control-Allow-Methods', corsConfig.methods.join(', '));
    headers.set('Access-Control-Allow-Credentials', String(corsConfig.credentials));
    
    if (corsConfig.maxAge) {
        headers.set('Access-Control-Max-Age', String(corsConfig.maxAge));
    }

    return new Response(response.body, {
        status: response.status,
        statusText: response.statusText,
        headers
    });
}
