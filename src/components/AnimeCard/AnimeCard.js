import React from 'react'
import { AiFillStar } from 'react-icons/ai'
import { Link } from 'react-router-dom';

import styles from './AnimeCard.module.css'

export default function AnimeCard({ episodes, images, score, title, aired, type, mal_id }) {
    return (
        <Link to={`/animeDetail/${mal_id}`} className={styles.link}>
            <div className={styles.card}>
                <div className={styles.imgWrapper}>
                    <img src={images.jpg.image_url} alt={title} className={styles.img} />
                </div>
                <div className={styles.info}>
                    <h2>{title}</h2>
                    <h4>Episodes: {episodes}</h4>
                    <h4>Aired: {aired.string}</h4>
                    <h4>{type}</h4>
                    <h4 className={styles.score}><AiFillStar className={styles.starIcon} />{score}</h4>
                </div>
            </div>
        </Link>
    )
}
