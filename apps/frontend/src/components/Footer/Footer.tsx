import React from 'react';

export const Footer: React.FC = () => {
	return (
		<footer className="bg-gray-800 p-4 text-white mt-auto">
			<div className="container mx-auto flex justify-between items-center">
				<div className="flex space-x-4">
					<a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
						<i className="fab fa-facebook-f"></i>
					</a>
					<a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
						<i className="fab fa-twitter"></i>
					</a>
					<a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
						<i className="fab fa-instagram"></i>
					</a>
				</div>
				<div className="flex space-x-4">
					<a href="/privacy-policy" data-testid="privacy-policy" className="hover:underline">
						Privacy Policy
					</a>
					<a href="/terms-of-service" data-testid="terms-of-service" className="hover:underline">
						Terms of Service
					</a>
					<a href="/contact" data-testid="contact" className="hover:underline">
						Contact
					</a>
				</div>
			</div>
		</footer>
	);
};
