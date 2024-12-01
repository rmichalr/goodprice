import { useEffect } from 'react';

import { RedisService } from 'shared/src/lib/redis.service';


const Home = () => {
	const redisService = new RedisService();

	useEffect(() => {
		async function connectAndFetch() {
			await redisService.connect();
			const value = await redisService.get('key'); // Replace 'key' with your actual key
			console.log('Fetched value from Redis:', value);
			await redisService.disconnect();
		}

		connectAndFetch();

		return () => {
			redisService.disconnect();
		};
	}, []);

	return <h1>Welcome to GoodPrice!</h1>;
};

export default Home;
