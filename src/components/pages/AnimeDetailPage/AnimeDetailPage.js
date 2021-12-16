import React from 'react'

import styles from './AnimeDetailPage.module.css';

//components
import AnimeDetail from '../../AnimeDetail/AnimeDetail'

export default function AnimeDetailPage() {
    return (
        <div className={styles.animeDetailPage}>
            <AnimeDetail />
        </div>
    )
}
