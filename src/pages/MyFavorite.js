import { useContext } from "react";
import MeetUpList from "../components/MeetUp/MeetUpList";
import Card from "../components/UI/Card";
import FavoritesContext from "../store/fav-context";

const MyFavorite=()=>{
    const favCtx=useContext(FavoritesContext);
    return(
        <Card>
            <h1>My Favorites</h1>
            <MeetUpList list={favCtx.favorites}/>
            
        </Card>
    )
};
export default MyFavorite;