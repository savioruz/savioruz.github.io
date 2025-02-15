type RateLimitConfig = {
	windowMs: number;
	maxRequests: number;
};

type RateLimitStore = Map<
	string,
	{
		count: number;
		timestamp: number;
	}
>;

export class RateLimit {
	private store: RateLimitStore;
	private config: RateLimitConfig;

	constructor(config: RateLimitConfig) {
		this.store = new Map();
		this.config = config;
	}

	isLimited(ip: string): boolean {
		const now = Date.now();
		const userRequests = this.store.get(ip);

		if (!userRequests) {
			this.store.set(ip, { count: 1, timestamp: now });
			return false;
		}

		if (now - userRequests.timestamp > this.config.windowMs) {
			this.store.set(ip, { count: 1, timestamp: now });
			return false;
		}

		if (userRequests.count >= this.config.maxRequests) {
			return true;
		}

		userRequests.count++;
		return false;
	}

	cleanup() {
		const now = Date.now();
		for (const [ip, data] of this.store.entries()) {
			if (now - data.timestamp > this.config.windowMs) {
				this.store.delete(ip);
			}
		}
	}
}
