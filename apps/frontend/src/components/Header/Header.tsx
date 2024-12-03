import { useRef, useState, useEffect } from 'react';

interface HeaderProps {
	title: string;
	icon?: string;
}

export const Header: React.FC<HeaderProps> = ({ title, icon }) => {
	const [menuOpen, setMenuOpen] = useState(false);
	const navRef = useRef<HTMLButtonElement>(null);

	const handleClickOutside = (event: MouseEvent) => {
		if (navRef.current && !navRef.current.contains(event.target as Node)) {
			setMenuOpen(false);
		}
	};

	useEffect(() => {
		document.addEventListener('click', handleClickOutside);
		return () => {
			document.removeEventListener('click', handleClickOutside);
		};
	}, []);

	return (
		<header className="flex justify-between p-4">
			<a className="flex items-center" href="/">
				{icon && <i className={`${icon} mr-2`} />}
				<span className="text-2xl font-bold">{title}</span>
			</a>
			<button
				className="flex items-center justify-center p-2 rounded-md focus:outline-none"
				onClick={() => setMenuOpen(!menuOpen)}
				ref={navRef}
			>
				{menuOpen ? 'Close' : 'Menu'}
			</button>
			<nav
				className={`absolute top-0 right-0 mt-16 bg-white shadow-md p-4 rounded-md ${menuOpen ? '' : 'hidden'}`}
			>
				<ul className="flex flex-col space-y-2">
					<li>
						<a className="block transition duration-300 ease-in-out" href="/about" title="About author">
							<span className="hover:text-red-500">About author</span>
						</a>
					</li>
					<li>
						<a
							className="block transition duration-300 ease-in-out"
							href="/how-does-it-work"
							title="How does it work?"
						>
							<span className="hover:text-red-500">How does it work?</span>
						</a>
					</li>
				</ul>
			</nav>
		</header>
	);
};
