import React, {useState, useEffect} from "react";
import '../styles/App.css';
import Header from './Header'
import Categories from './Categories'
import Games from './Games'


const App = () => {
    
    const [gamesJson, setGamesJson] = useState([]);
    const [topGames, setTopGames] = useState(false);

    useEffect(() => {
       fetch(`https://57d10932-44d0-4d3a-98a9-6dda8c67bdd3.mock.pstmn.io/?liveCasinoOnly=true&categories=Live%20Casino&limit=25`)
        .then(response => response.json())
        .then(response => setGamesJson(response))
    }, [])

   const selectCategorie = (categorie) => {
       fetch(`https://57d10932-44d0-4d3a-98a9-6dda8c67bdd3.mock.pstmn.io/?liveCasinoOnly=true&categories=${categorie}&limit=25`)
        .then(response => response.json())
        .then(response => setGamesJson(response))
    }

    const handlerTopGames = (top) => {
        setTopGames(top)
    }
   
    

    return (
        <div>
            <Header />
            <Categories selectCategorie={selectCategorie}
                        handlerTopGames={handlerTopGames}
                        
                        />
            <Games  gamesJson={gamesJson} 
                    topGames={topGames}
                    />
        </div>
        );
    
}

export default App;