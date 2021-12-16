import React from 'react';

import styles from './SearchAnimePage.module.css';

//components
import SearchAnime from './SearchAnime/SearchAnime';

export default function SearchAnimePage() {
    return (
        <div className={styles.searchAnimePage}>
            <SearchAnime />
        </div>
    )
}
