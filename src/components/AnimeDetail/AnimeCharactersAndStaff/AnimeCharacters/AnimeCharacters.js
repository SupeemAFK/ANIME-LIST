import React from 'react'

import styles from './AnimeCharacters.module.css';

export default function AnimeCharacters({ person, positions }) {
    return (
        <div className={styles.animeCharacters}>
            <div className={styles.characterDetails}>
                <div className={styles.imgWrapper}>
                    <img src={person.images.jpg.image_url} alt={person.name} className={styles.img}/>
                </div>
                <div className={styles.characterInfo}>
                    <h3>{person.name}</h3>
                    {positions.map((position, i) => <p key={i}>{position}</p>)}
                </div>
            </div>
        </div>
    )
}
