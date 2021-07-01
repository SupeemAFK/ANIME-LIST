import React, { useState } from 'react'
import { BiSearchAlt2 } from 'react-icons/bi'
import { Link, useHistory } from 'react-router-dom'

import styles from './Navbar.module.css'

export default function Navbar() {
    let history = useHistory();
    const [animeName, setAnimeName] = useState('')
    const [alert, setAlert] = useState(false)

    function handleSubmit(e) {
        e.preventDefault()

        if (animeName.length < 3) {
            setAlert(true)
            setTimeout(() => {
                setAlert(false)
            }, 3000)
        }

        else {
            setAlert(false)
            history.push(`/search/${animeName}`);
        }

        setAnimeName('')
    }

    return (
        <div className={styles.navbar}>
            <div className={styles.logoWrapper} onClick={() => setAnimeName('')}>
                <Link to="/">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/Nana_anime_logo.svg/1280px-Nana_anime_logo.svg.png" className={styles.logo} alt="" />
                </Link>
            </div>
            <div className={styles.searchAnimeContainer}>
                {alert && <span className={styles.alertText}>Please type at least 3 characters</span>}
                <form onSubmit={handleSubmit} className={styles.searchAnimeForm}>
                    <input onChange={(e) => setAnimeName(e.target.value)} value={animeName} className={alert ? `${styles.searchAnimeInput} ${styles.alert}` : styles.searchAnimeInput} />
                    <button type="submit" className={styles.searchBtn}><BiSearchAlt2 /></button>
                </form>
            </div>
        </div>
    )
}

