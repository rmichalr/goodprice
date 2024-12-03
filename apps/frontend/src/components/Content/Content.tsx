import { useRef, useState } from 'react';

export const Content: React.FC = () => {
	const [focused, setFocused] = useState(false);
	const [filled, setFilled] = useState(false);
	const productSearchRef = useRef<HTMLInputElement>(null);

	const handleFocus = () => {
		setFocused(true);
	};

	const handleBlur = () => {
		setFocused(false);
		const searchInput = document.getElementById('product-search') as HTMLInputElement | null;
		setFilled(searchInput && searchInput.value ? searchInput.value.length > 0 : false);
	};

	return (
		<main className="flex-grow p-4">
			<h1 className="text-3xl font-bold mb-4 text-center">Welcome to Good price</h1>
			<div className="flex justify-center my-10">
				<p className="text-lg font-semibold w-1/2 text-center">
					Savings made simple. Discover if you're getting the best deal with our easy-to-use price comparison
					tool. We track prices across thousands of products daily, helping you find the smartest way to spend
					your hard-earned money - no tech expertise required.
				</p>
			</div>
			<div className="relative flex w-1/2 mx-auto">
				<input
					id="product-search"
					type="text"
					placeholder=""
					className={`flex-grow border-2 border-gray-300 p-2 rounded-lg`}
					ref={productSearchRef}
					onFocus={handleFocus}
					onBlur={handleBlur}
					onChange={(e) => setFilled(!!e.target.value)}
				/>
				<label
					htmlFor="search"
					className={`absolute text-lg font-semibold transition-all ${
						focused || filled
							? 'text-xs text-gray-500 -top-2 left-2 px-2 floating-label'
							: 'text-lg text-gray-700 left-0 leading-10 ml-3'
					}`}
					onClick={() => productSearchRef.current?.focus()}
				>
					What are you looking for?
				</label>
				<button className="bg-green-600 cta-color font-bold py-2 px-4 rounded-lg ml-2 hover:bg-green-700">
					Search
				</button>
			</div>
		</main>
	);
};
