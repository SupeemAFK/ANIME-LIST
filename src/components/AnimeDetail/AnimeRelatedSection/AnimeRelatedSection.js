import React from 'react'

import styles from './AnimeRelatedSection.module.css';

//components
import RelatedAnimes from './RelatedAnimes/RelatedAnimes';

export default function AnimeRelatedSection({ animeDetailRelatedArray }) {
    return (
        <section className={styles.recommendationsContainer}>
            <div className={styles.title}>
                <h1>Similar Animes</h1>
            </div>
            <div className={styles.recommendationsWrapper}>
                {animeDetailRelatedArray.length > 0 ? (
                    <div className={styles.recommendations}>
                        {animeDetailRelatedArray.map((animeDetailRelated, index) => <RelatedAnimes key={index} {...animeDetailRelated} />)}
                    </div>
                ) : (
                    <div className={styles.noRelated}>
                        <h1>There are no related Animes</h1>
                        <div className={styles.noRelatedImgWrapper}>
                            <img src="https://cdn131.picsart.com/324202540207211.png?type=webp&to=min&r=240" alt="" className={styles.noRelatedImg} />
                        </div>
                    </div>
                )}
            </div>
        </section>
    )
}
