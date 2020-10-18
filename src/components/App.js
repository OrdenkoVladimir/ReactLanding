import React, {useState, useEffect, useCallback} from "react";
import '../styles/App.css';
import Header from './Header'
import Categories from './Categories'
import Games from './Games'
import CONFIG from "../config";
import Providers from "./Providers";


const App = () => {
    const [loading, setLoading] = useState(true)
    const [gamesJson, setGamesJson] = useState([]);
    const [categoryNow, setCategoryNow] = useState('');


    useEffect(() => {
       fetch(`${CONFIG.API_HOST}&categories=Live%20Casino&limit=25&`)
        .then(response => response.json())
        .then(response => {
            setGamesJson(response);
            setLoading(false);
        })
    }, [])

   const selectCategory = (category) => {
       setGamesJson([]);
       setLoading(true)
       fetch(`${CONFIG.API_HOST}&categories=${category}&limit=25`)
        .then(response => response.json())
        .then(games => {
            setLoading(false);
            setGamesJson(games);
         })
        .catch(error => {
            setLoading(false);
            alert('Error');
        })
    }

    
   
    const onSelectCategory = useCallback((categoryName) => {
        if(categoryName === 'Top') {
            setCategoryNow(categoryName);
            const filteredTop = gamesJson.filter(game => game.is_most_popular)
            setGamesJson(filteredTop)
            return
        }
            setCategoryNow(categoryName);
            selectCategory(categoryName);
            
        
    }, [ selectCategory ])


    const onSelectProvider = (providerName) => {
        
        if(providerName === 'all') return selectCategory(categoryNow);
        const filteredProvider = gamesJson.filter(game => game.game_provider === providerName);
        setGamesJson(filteredProvider);
    }

    return (
        <div>
            <Header />
            <Categories onSelectCategory={onSelectCategory} />
            <Providers onSelectProvider={onSelectProvider} />
            <Games  gamesJson={gamesJson} loading={loading}/>
        </div>
        );
    
}

export default App;