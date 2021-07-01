import React from 'react'

//components
import AnimeRecommend from '../../AnimeRecommend/AnimeRecommend';

import styles from './Home.module.css';

export default function Home() {
    return (
        <div className={styles.home}>
            <AnimeRecommend />
        </div>
    )
}
