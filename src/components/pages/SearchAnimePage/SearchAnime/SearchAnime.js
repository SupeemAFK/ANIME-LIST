import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getSearchedAnime } from '../../../../api/api';

import styles from './SearchAnime.module.css';

//components
import AnimeCard from '../../../AnimeCard/AnimeCard';

export default function SearchAnime() {
    const [searchedAnimeArray, setSearchedAnimeArray] = useState([])
    const [loading, setLoading] = useState(true)
    const { animeName } = useParams();

    useEffect(() => {
        async function fetchAPI() {
            setLoading(true)
            const response = await getSearchedAnime(animeName);
            setSearchedAnimeArray(response)
            setLoading(false)
        }
        
        fetchAPI();
    }, [animeName])

    function formatTime(date) {
        if (date !== null) {
            return date.slice(0, 10)
        }
        return "No Date Here Sorry..." 
    }

    if (loading) {
        return <div className={styles.loading}><h1>Loading...</h1></div>
    }

    return (
        <div className={styles.searchedAnimeContainer}>
            <div className={styles.results}><h1>Results of "{animeName}"</h1></div>
            <div className={styles.animeGrid}>
                {searchedAnimeArray.map((searchedAnime, index) => <AnimeCard key={index} {...searchedAnime} start_date={formatTime(searchedAnime.start_date)} />)}
            </div>
        </div>
    )
}
