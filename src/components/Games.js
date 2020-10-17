import React from "react";

const Games = ( {topGames, gamesJson} ) => {
    


     
    return (
        <div className="games">
            {
                gamesJson.map(game => {
                    const poster = `https://aws-origin.image-tech-storage.com/gameRes/sq/200/${game.item_title}.jpg`
                    if(topGames) {
                        if(!game.is_most_popular) return;
                        
                        return (    
                            <div className="games_item" key={game.internal_game_id}>
                                <a href="">
                                    <img src={poster} />
                                </a>
                            </div>   
                        )
                    } else {
                        return (    
                            <div className="games_item" key={game.internal_game_id}>
                                <a href="">
                                    <img src={poster} />
                                </a>
                            </div>   
                        )
                    }
                    

                    
                })
            }
        </div>
    )
}

export default Games