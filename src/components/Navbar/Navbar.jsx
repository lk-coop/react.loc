import classes from './navbar.module.css';
import { NavLink } from "react-router-dom";

const Navbar = () => {
    return (
        <nav className={classes.sidebar}>
            <ul>
                <li><NavLink to="/profile" activeClassName={classes.active}>Profile</NavLink></li>
                <li><NavLink to="/messages" activeClassName={classes.active}>Messages</NavLink></li>
                <li><NavLink to="/news" activeClassName={classes.active}>News</NavLink></li>
                <li><NavLink to="/music" activeClassName={classes.active}>Music</NavLink></li>
                <li><NavLink to="/settings" activeClassName={classes.active}>Settings</NavLink></li>
            </ul>
        </nav>
    );
}

export default Navbar;