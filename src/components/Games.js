import React, { useMemo } from "react";
import CONFIG from "../config";
import Loading from "./Loading"

const Games = ( { gamesJson, loading } ) => {
    

    const renderedGames = useMemo(() => {
        
        
       if(gamesJson != 0) {
            return gamesJson.map(game => {
                const poster = `${CONFIG.STATIC_HOST}/gameRes/sq/200/${game.item_title}.jpg`;
                    
                    return (    
                        <div className="games_item" key={game.internal_game_id}>
                            <a href="">
                                <img src={poster} />
                            </a>
                        </div>   
                    )
        
            }) 
       } else {
           return (
               <div className="empty">
                   <span>Nothing found</span>
               </div>
           )
       }
        
       
    }, [gamesJson])

    
     
    return (
        <div className="games">
            {
            loading ? <Loading /> : renderedGames
            }
        
           
        </div>
    )
}

export default Games