import { createClient, RedisClientType } from 'redis';

export class RedisService {
	private client: RedisClientType;

	constructor() {
		this.client = createClient();
		this.client.on('error', (err) => console.error('Redis Client Error', err));
	}

	async connect(): Promise<void> {
		await this.client.connect();
	}

	async set(key: string, value: string): Promise<void> {
		await this.client.set(key, value);
	}

	async get(key: string): Promise<string | null> {
		return await this.client.get(key);
	}

	async disconnect(): Promise<void> {
		await this.client.disconnect();
	}
}
