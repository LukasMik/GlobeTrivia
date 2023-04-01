import {NavLink, useLocation} from 'react-router-dom';
import '../styles/navigation.scss'


const Navigation = () => {
    const location = useLocation();

    return (
        <nav className={location.pathname === '/' ? 'nav-home-page' : 'nav-default'}>
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
    );
}

export default Navigation;