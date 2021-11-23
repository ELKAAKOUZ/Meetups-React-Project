import { Link } from "react-router-dom";
import { useContext } from "react";
import classes from './MainNavigationBar.module.css';
import FavoritesContext from "../../store/fav-context";

const MainNavigationBar =()=>{
    const favCtx=useContext(FavoritesContext);

    return(
        <nav>
            <ul >
                <li><Link to='/'>All Meetups</Link></li>
                <li><Link to='/addnewmeetup'>Add New Meetup</Link></li>
                <li><Link to='/favorites'>My Favorites</Link></li>
                <span>{favCtx.totalFavorites}</span>
            </ul>
        </nav>
        
    );
};
export default MainNavigationBar;