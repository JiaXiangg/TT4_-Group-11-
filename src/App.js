// import logo from './logo.svg';
import Navbar from './components/Navbar';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';

function App() {
	return (
		<Router>
			<Navbar />
			<h5>[This is the main page]</h5>
		</Router>
	);
}

export default App;
