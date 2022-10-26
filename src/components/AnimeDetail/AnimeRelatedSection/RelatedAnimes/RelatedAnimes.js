import React from 'react'
import { Link } from 'react-router-dom';

import styles from './RelatedAnimes.module.css'

export default function RelatedAnimes({ detail }) {
    const { mal_id, images, title } = detail;
    return (
            <Link to={`/animeDetail/${mal_id}`} className={styles.relatedAnimesContainer}>
                <div className={styles.relatedAnimes}>
                    <div className={styles.imgWrapper}>
                        <img src={images.jpg.image_url} alt={title} className={styles.img} />
                    </div>
                    <div className={styles.title}>
                        <h3>{title}</h3>
                    </div>
                </div>
            </Link>
    )
}
