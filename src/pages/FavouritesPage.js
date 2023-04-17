import React, { useContext } from 'react';
import FavoritesContext from '../store/favoriteContext';
import MeetupList from "../components/meetups/MeettpList";

function FavoritesPage() {
    const favoritesCtx = useContext(FavoritesContext);
    let content;

    if (favoritesCtx.totalFavorites === 0) {
        content = <p>You got no favorites yet. Start adding some?</p>;
    } else {
        content = <MeetupList meetups={favoritesCtx?.favorites} />;
    }
    return (
        <section>
            <div>My Favorites</div>
            {content}
        </section>
    );
}

export default FavoritesPage;
