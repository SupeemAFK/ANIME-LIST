import React from 'react'

import styles from './AnimeSeasonPage.module.css';

//components
import AnimeSeason from './AnimeSeason/AnimeSeason';

export default function AnimeSeasonPage() {
    return (
        <div className={styles.animeSeasonPage}>
            <AnimeSeason />
        </div>
    )
}
