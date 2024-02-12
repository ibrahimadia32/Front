import Navbar from './components/routes/NavBar';
import { BrowserRouter } from 'react-router-dom';
import Router from './router/Router';

function App() {
    return (
        <BrowserRouter>
            <Navbar />
            <Router />
        </BrowserRouter>
    );
}

export default App;