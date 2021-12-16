import React, { useState } from 'react'

import styles from './AnimeCharactersAndStaff.module.css';

//components
import AnimeCharacters from './AnimeCharacters/AnimeCharacters';

export default function AnimeCharactersAndStaff({ animeCharactersArray }) {
    const allVoiceActors = animeCharactersArray.map(animeCharacters => animeCharacters.voice_actors)
    const allLanguages = allVoiceActors.map(voiceActors => voiceActors.map(voiceActor => voiceActor.language))
    const mostLanguages = Array.from(new Set(allLanguages.sort()[allLanguages.length - 1]))
    
    const [currentLanguage, setCurrentLanguage] = useState(mostLanguages[0])

    return (
        <section className={styles.animeCharactersAndStaff}>
            <div className={styles.title}>
                <h1>Characters And Staff</h1>
            </div>
            <div className={styles.btnContainer}>
                {mostLanguages.map((language, index) => (
                    <button key={index} onClick={() => setCurrentLanguage(language)} className={language === currentLanguage ? `${styles.btn} ${styles.active}` : styles.btn}>{language}</button>)
                )}
            </div>
            <div className={styles.charactersContainer}>
                {animeCharactersArray.map((animeCharacters, index) => <AnimeCharacters key={index} {...animeCharacters} currentLanguage={currentLanguage} />)}
            </div>
        </section>
    )
}
