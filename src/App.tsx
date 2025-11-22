import EndCTA from './components/EndCTA';
import Footer from './components/Footer';
import Hero from './components/Hero';
import HowItWorks from './components/HowItWorks';
import Profits from './components/Profits';
import Reviews from './components/Reviews';

function App() {
	return (
		<div className="bg-background">
			<Hero />
			<Profits />
			<HowItWorks />
			<Reviews />
			<EndCTA />
			<Footer />
		</div>
	);
}

export default App;
