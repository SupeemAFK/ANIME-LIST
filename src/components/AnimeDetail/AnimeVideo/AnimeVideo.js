import React from 'react'

import styles from './AnimeVideo.module.css'

export default function AnimeVideo({ trailer_url }) {


    return (
        <section className={styles.videoSection}>
            <div className={styles.title}>
                <h1>TRAILER</h1>
            </div>
            <div className={styles.videoContainer}>
                <div className={trailer_url ? `${styles.videoWrapper}` : `${styles.noTrailer}`}>
                    {trailer_url ? (
                        <iframe className={styles.video} src={trailer_url} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                    ) : <h1>There is no trailer for this Anime</h1>}
                </div>
            </div>
        </section>
    )
}
