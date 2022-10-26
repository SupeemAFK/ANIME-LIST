import React, { useState } from 'react'

import styles from './AnimeCharactersAndStaff.module.css';

//components
import AnimeCharacters from './AnimeCharacters/AnimeCharacters';

export default function AnimeCharactersAndStaff({ animeCharactersArray }) {    
    return (
        <section className={styles.animeCharactersAndStaff}>
            <div className={styles.title}>
                <h1>Characters And Staff</h1>
            </div>
            <div className={styles.charactersContainer}>
                {animeCharactersArray.map((animeCharacters, index) => <AnimeCharacters key={index} {...animeCharacters} />)}
            </div>
        </section>
    )
}
