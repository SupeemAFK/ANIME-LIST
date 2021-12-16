import React from 'react'
import { AiFillStar } from 'react-icons/ai';
import { GiLaurelsTrophy } from 'react-icons/gi';
import { MdCardMembership } from 'react-icons/md';
import { BsPeopleFill } from 'react-icons/bs';

import styles from './AnimeDetailContent.module.css';

export default function AnimeDetailContent({ image_url, score, title, synopsis, rank, popularity, members, genres, studios }) {
    
    function numberWithCommas(x) {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }

    return (
        <section className={styles.animeDetail}>
            <div className={styles.imgWrapper}>
                <img src={image_url} alt={title} className={styles.img} /> 
            </div>
            <div className={styles.info}>
                <h1>{title}</h1>
                <p>{synopsis}</p>
                <div className={styles.score}>
                    <AiFillStar />
                    <h3>Score {score}</h3>
                </div>
                <div className={styles.rankContainer}>
                    <div className={styles.rank}>
                        <GiLaurelsTrophy />
                        <h3>Ranked #{rank}</h3>
                    </div>
                    <div className={styles.rank}>
                        <BsPeopleFill />
                        <h3>Popularity #{popularity}</h3>
                    </div>
                    <div className={styles.rank}>
                        <MdCardMembership />
                        <h3>Members {numberWithCommas(members)}</h3>
                    </div>
                </div>
                <div className={styles.genresContainer}>
                    {genres.map((genre, index) => <div key={index} className={styles.genre}>{genre.name}</div>)}
                </div>
            </div>
        </section>
    )
}
