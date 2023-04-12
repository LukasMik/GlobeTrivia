import {NavLink, useLocation} from 'react-router-dom';
import '../styles/navigation.scss'


const Navigation = () => {

    const location = useLocation();

    const navTheme = () => {
        if (location.pathname.includes('/country-detail/') )
            return 'nav-default nav-default--light'
        else if (location.pathname === '/')
            return 'nav-home-page'
        else
            return 'nav-default'

    }

    return (
        <nav className={navTheme()}>
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