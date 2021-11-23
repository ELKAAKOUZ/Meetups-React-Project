import { createContext, useState } from 'react';

const FavoritesContext = createContext({
  favorites: [],
  totalFavorites: 0,
  addFavorite: (favoriteMeetup) => {},
  removeFavorite: (meetupId) => {},
  itemIsFavorite: (meetupId) => {}
});

export function FavoritesContextProvider(props) {
  const [userFavorites, setUserFavorites] = useState([]);

  function addFavoriteHandler(favoriteMeetup) {
    setUserFavorites((prevUserFavorites) => {
      return prevUserFavorites.concat(favoriteMeetup);
    });
  }

  function removeFavoriteHandler(meetupId) {
    setUserFavorites(prevUserFavorites => {
      return prevUserFavorites.filter(meetup => meetup.id !== meetupId);
    });
  }

  function itemIsFavoriteHandler(meetupId) {
    return userFavorites.some(meetup => meetup.id === meetupId);
  }

  const context = {
    favorites: userFavorites,
    totalFavorites: userFavorites.length,
    addFavorite: addFavoriteHandler,
    removeFavorite: removeFavoriteHandler,
    itemIsFavorite: itemIsFavoriteHandler
  };

  return (
    <FavoritesContext.Provider value={context}>
      {props.children}
    </FavoritesContext.Provider>
  );
}

export default FavoritesContext;
// import { React,createContext,useState } from "react";


// const FavoriteContext=createContext({
//     favorites:[],
//     favLenght:0,
//     addToFavorites:(meetup)=>{},
//     removeFromFavorites:(meetupId)=>{},
//     isInFavorites:(meetupId)=>{}
// });

// export const FavoriteContextProvider=(props)=>{
//     const [userFavorites,setUserFavorites]=useState();
//     const addingHandler =(meetup)=>{
//         setUserFavorites((prevState)=>{ 
//             return prevState.concat(meetup)
//         })
//     };
//     const removingHandler =(meetupId)=>{
//         setUserFavorites((prevState)=>{
//             return prevState.filter((meetup)=>meetup.id !== meetupId)
//         })
//     };
//     const isFavorites=(meetupId)=>{
//         return userFavorites.some(meetup => meetup.id === meetupId);
//     };
//     const context={
//         favorites:userFavorites,
//         favLenght:userFavorites.length,
//         addToFavorites:addingHandler,
//         removeFromFavorites:removingHandler,
//         isInFavorites:isFavorites

//     }

//     return(
//         <FavoriteContext.Provider value={context}>{props.children}</FavoriteContext.Provider>
//     )
// };




// export default FavoriteContext;