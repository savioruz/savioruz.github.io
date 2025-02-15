import { siteConfig } from '$lib/metadata';

type CorsConfig = {
    origin: string[];
    methods: string[];
    credentials: boolean;
    maxAge?: number;
};

export const corsConfig: CorsConfig = {
    origin: [siteConfig.url.toString()],
    methods: ['GET', 'POST', 'OPTIONS'],
    credentials: true,
    maxAge: 3600
};

export function setCorsHeaders(response: Response): Response {
    const headers = new Headers(response.headers);
    
    const origin = headers.get('Origin');
    if (origin) {
        if (corsConfig.origin.includes(origin)) {
            headers.set('Access-Control-Allow-Origin', origin);
        } else {
            return new Response('Origin not allowed', { 
                status: 403,
                statusText: 'Forbidden'
            });
        }
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
