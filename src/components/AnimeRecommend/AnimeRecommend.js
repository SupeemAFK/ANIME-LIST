import React, { useState, useEffect } from 'react'
import { BsFillCalendarFill } from 'react-icons/bs';
import InfiniteScroll from 'react-infinite-scroll-component';
import { getTopAime } from '../../api/api';
import { getCurrentDate, getSeason } from '../pages/AnimeSeasonPage/AnimeSeason/function';
import { Link } from 'react-router-dom';

import styles from './AnimeRecommend.module.css'

//components
import AnimeCard from '../AnimeCard/AnimeCard'

export default function AnimeRecommend() {
    const [animeDetailArray, setAnimeDetailArray] = useState([])
    const [page, setPage] = useState(1)

    useEffect(() => {
        async function fetchAPI() {
            const response = await getTopAime(page);
            setAnimeDetailArray(animeDetailArray => [...animeDetailArray, ...response]);
        }

        fetchAPI()
    },[page])

    return (
        <InfiniteScroll dataLength={animeDetailArray.length} next={() => setPage(page + 1)} hasMore={true} loader={<center>Loading...</center>} endMessage={<p style={{ textAlign: 'center' }}><b>Yay! You have seen it all</b></p>}>
            <div className={styles.seasonContainer}>
                <Link to={`/season/${new Date().getFullYear()}/${getSeason(getCurrentDate())}`} className={styles.season}>
                    <button className={styles.seasonBtn}>
                        <h1>Season</h1>
                        <BsFillCalendarFill />
                    </button>
                </Link>
            </div>
            <div className={styles.title}><h1>TOP ANIME</h1></div>
            <div className={styles.cardContainer}>
                {animeDetailArray.map((animeDetail, index) => <AnimeCard key={index} {...animeDetail} />)}
            </div>
        </InfiniteScroll>
    )
}
