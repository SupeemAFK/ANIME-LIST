import React, { useState, useEffect } from 'react'
import { Link, useHistory, useParams } from 'react-router-dom';
import { getAnimeSeason } from '../../../../api/api';
import { getCurrentDate, formatTime, getSeason } from './function';

import styles from './AnimeSeason.module.css';

//components
import AnimeCard from '../../../AnimeCard/AnimeCard';

export default function AnimeSeason() {
    let history = useHistory();
    const [animeSeasonArray, setAnimeSeasonArray] = useState([])
    const [currentDate, setCurrentDate] = useState(getCurrentDate())
    const [loading, setLoading] = useState(false);
    const { year, season } = useParams();

    useEffect(() => {
        async function fetchAPI() {
            setLoading(true);

            const response = await getAnimeSeason(year, season);
            setAnimeSeasonArray(response);

            setLoading(false);
        }

        fetchAPI()
    }, [year, season])

    function handleSubmit(e) {
        e.preventDefault()

        const year = currentDate.slice(0, 4)
        const season = getSeason(currentDate)
        history.push(`/season/${year}/${season}`)
    }

    if (loading) {
        return <div className={styles.loading}><h1>Loading...</h1></div>
    }

    return (
        <div className={styles.animeSeason}>
            <h1 className={styles.title}>Season</h1>
            <div className={styles.selectSeason}>
                <div className={styles.btnContainer}>
                    <Link to="/season/2021/summer"><button className={styles.btn}>2021 summer</button></Link>
                    <Link to="/season/2021/spring"><button className={styles.btn}>2021 spring</button></Link>
                    <Link to="/season/2021/fall"><button className={styles.btn}>2021 fall</button></Link>
                    <Link to="/season/2021/winter"><button className={styles.btn}>2021 winter</button></Link>
                </div>
                <form className={styles.dateInputForm} onSubmit={handleSubmit}>
                    <input onChange={(e) => setCurrentDate(e.target.value)} type="date" id="start" name="trip-start" value={currentDate} min="2010-01-01" max={getCurrentDate()} className={styles.dateInput} />
                    <button type="submit" className={styles.dateInputBtn}>submit</button>
                </form>
            </div>
            <div className={styles.animeGrid}>
                {animeSeasonArray.map((animeSeason, index) => <AnimeCard key={index} {...animeSeason} start_date={formatTime(animeSeason.airing_start)} />)}
            </div>
        </div>
    )
}
