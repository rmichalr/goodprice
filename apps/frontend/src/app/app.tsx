import { Header } from "../components/Header/Header";
import { Content } from "../components/Content/Content";
import { Footer } from "../components/Footer/Footer";

export function App() {
	return (
		<>
			<Header title={"Good price"} />
			<Content />
			<Footer />
		</>
	);
}

export default App;
