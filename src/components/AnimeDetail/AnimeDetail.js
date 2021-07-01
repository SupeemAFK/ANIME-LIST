import React, { useState, useEffect } from 'react'

import { useParams } from 'react-router-dom';
import { getAnimeDetailRelated } from '../../api/api';
import { getAnimeCharactersAndStaff } from '../../api/api';
import { getAnimeDetail } from '../../api/api';

import styles from './AnimeDetail.module.css';

//componenets
import AnimeDetailContent from './AnimeDetailContent/AnimeDetailContent';
import AnimeVideo from './AnimeVideo/AnimeVideo';
import AnimeCharactersAndStaff from './AnimeCharactersAndStaff/AnimeCharactersAndStaff';
import AnimeRelatedSection from './AnimeRelatedSection/AnimeRelatedSection';

export default function AnimeDetail() {
    const [animeDetail, setAnimeDetail] = useState([])
    const [animeCharactersArray, setAnimeCharactersArray] = useState([])
    const [animeDetailRelatedArray, setAnimeDetailRelatedArray] = useState([])
    const [loading, setLoading] = useState(true)
    const { animeID } = useParams()

    useEffect(() => {
        async function fetchAPI() {
            setLoading(true)

            const animeDetail = await getAnimeDetail(animeID)
            setAnimeDetail(animeDetail)

            const { characters } = await getAnimeCharactersAndStaff(animeID)
            setAnimeCharactersArray(characters)

            const recommendations = await getAnimeDetailRelated(animeID) 
            setAnimeDetailRelatedArray(recommendations)

            setLoading(false)
        }

        fetchAPI()
    }, [animeID])


    if (loading) {
        return (
            <div className={styles.loading}>
                <h1>loading...</h1>
            </div>
        )
    }

    return (
        <div className={styles.animeDetailContainer}>
            {/*Anime Detail*/}
            <AnimeDetailContent {...animeDetail} />

            <div className={styles.underline}></div>

            {/*Anime Trailer*/}
            <AnimeVideo {...animeDetail} />

            <div className={styles.underline}></div>

            {/*Anime Characters & Staff*/}
            <AnimeCharactersAndStaff animeCharactersArray={animeCharactersArray} />

            <div className={styles.underline}></div>

            {/*Anime Realted*/}
            <AnimeRelatedSection animeDetailRelatedArray={animeDetailRelatedArray} />
        </div>
    )
}
