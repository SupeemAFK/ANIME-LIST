import axios from 'axios';

const URL = "https://api.jikan.moe/v4"

//get Top Anime
export async function getTopAime(page) {
    try {
        const { data: { data } } = await axios.get(URL+`/top/anime?=${page}`);
        return data

    } catch (error) {
        console.log(error)
    }
}

//get season Anime
export async function getAnimeSeason(year, season) {
    try {
        const { data: { data } } = await axios.get(URL+`/seasons/${year}/${season}`);
        return data

    } catch (error) {
        console.log(error)
    }
}

//get detail of Anime
export async function getAnimeDetail(animeID) {
    try {
        const { data: { data } } = await axios.get(URL+`/anime/${animeID}`);
        return data

    } catch (error) {
        console.log(error)
    }
}

//get Character and staff of detail Anime
export async function getAnimeCharactersAndStaff(animeID) {
    try {
        const { data: { data } } = await axios.get(URL+`/anime/${animeID}/staff	`)
        return data

    } catch (error) {
        console.log(error)
    }
}

//get smiliar anime of deail Anime
export async function getAnimeDetailRelated(animeID) {
    try {
        const { data: { data } } = await axios.get(URL+`/anime/${animeID}/recommendations	`);
        return data

    } catch (error) {
        console.log(error)
    }
}

//get anime by search
export async function getSearchedAnime(animeName) {
    try {
        const { data: { data } } = await axios.get(URL+`/anime?q=${animeName}&page=1`)
        return data

    } catch (error) {
        console.log(error)
    }
}
