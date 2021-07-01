import React from 'react'

import styles from './AnimeCharacters.module.css';

export default function AnimeCharacters({ image_url, name, role, voice_actors, currentLanguage }) {

    const currentVoiceActors = voice_actors.filter(voice_actor => voice_actor.language === currentLanguage)

    return (
        <div className={styles.animeCharacters}>
            <div className={styles.characterDetails}>
                <div className={styles.imgWrapper}>
                    <img  src={image_url} alt={name} className={styles.img}/>
                </div>
                <div className={styles.characterInfo}>
                    <h3>{name}</h3>
                    <p>{role}</p>
                </div>
            </div>
            {currentVoiceActors.length > 0 ? (
                <div className={styles.voiceActorsContainer}>
                    {currentVoiceActors.map((voice_actor, index) => {
                        const { image_url, language, name } = voice_actor;
                        return (
                            <div key={index} className={styles.voiceActors}>
                                <div className={styles.voiceActorImgWrapper}>
                                    <img  src={image_url} alt={name} className={styles.voiceActorImg}/>
                                </div>
                                <div className={styles.voiceActorsInfo}>
                                    <h3>{name}</h3>
                                    <p>{language}</p>
                                </div>
                            </div>
                                )
                    })}
                </div>
            ) : (
                <div className={styles.voiceActorsContainer}>
                    <p className={styles.noVoiceActors}>There are no voice actors here</p>
                </div>
            )}
        </div>
    )
}
