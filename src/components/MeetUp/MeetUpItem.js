import { Fragment,useContext } from "react";
import FavoriteContext from "../../store/fav-context";
const MeetUpItem =(props)=>{
    const favCtx=useContext(FavoriteContext);
    const istheMeetupInFavorite=favCtx.itemIsFavorite(props.id);

    const toggleFavoriteStatusHandler=()=>{
        if(istheMeetupInFavorite){
            favCtx.removeFavorite(props.id)
        }else{
            favCtx.addFavorite({
                id:props.id,
                title:props.title,
                description:props.description,
                image:props.image
            })
        }
    };
   return(
    <Fragment>
                <div>
                    <h1>{props.title}</h1>
                </div>
                <div>
                    <p>{props.description}</p>
                </div>
                <div>
                    <img src={props.image} alt='imageurl'/>
                </div>
                <div>
                    
                    <button onClick={toggleFavoriteStatusHandler}>{istheMeetupInFavorite?'remove from favorite':'add to favorite'}</button>
                </div>
    </Fragment>   
   )
};
export default MeetUpItem;