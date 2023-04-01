import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom';
import HomePage from './pages/Home.page';
import CountriesInfoPage from "./pages/CountriesInfo.page";
import CountriesQuizPage from "./pages/CountriesQuiz.page";
import CountriesListPage from "./pages/CountriesList.page";

function Navigation() {
    return (
        <Router>
            <div>
                <nav>
                    <ul>
                        <li>
                            <NavLink to="/">Home</NavLink>
                        </li>
                        <li>
                            <NavLink to="/countries-info">Explore Countries</NavLink>
                        </li>
                        <li>
                            <NavLink to="/countries-quiz">Flag Quizz</NavLink>
                        </li>
                        <li>
                            <NavLink to="/countries-list">Countries list</NavLink>
                        </li>
                    </ul>
                </nav>
                <Routes>
                    <Route path={'/'} element={<HomePage />} />
                    <Route path={'/countries-info'} element={<CountriesInfoPage />} />
                    <Route path={'/countries-quiz'} element={<CountriesQuizPage />} />
                    <Route path={'/countries-list'} element={<CountriesListPage />} />
                </Routes>
            </div>
        </Router>
    );
}

export default Navigation;