import axios from 'axios';

const URL = "https://api.jikan.moe/v3"

//get Top Anime
export async function getTopAime(page) {
    try {
        const { data: { top } } = await axios.get(URL+`/top/anime/${page}`);
        return top

    } catch (error) {
        console.log(error)
    }
}

//get season Anime
export async function getAnimeSeason(year, season) {
    try {
        const { data: { anime } } = await axios.get(URL+`/season/${year}/${season}`);
        return anime

    } catch (error) {
        console.log(error)
    }
}

//get detail of Anime
export async function getAnimeDetail(animeID) {
    try {
        const { data } = await axios.get(URL+`/anime/${animeID}`);
        return data

    } catch (error) {
        console.log(error)
    }
}

//get Character and staff of detail Anime
export async function getAnimeCharactersAndStaff(animeID) {
    try {
        const { data } = await axios.get(URL+`/anime/${animeID}/characters_staff	`)
        return data

    } catch (error) {
        console.log(error)
    }
}

//get smiliar anime of deail Anime
export async function getAnimeDetailRelated(animeID) {
    try {
        const { data: { recommendations } } = await axios.get(URL+`/anime/${animeID}/recommendations	`);
        return recommendations

    } catch (error) {
        console.log(error)
    }
}

//get anime by search
export async function getSearchedAnime(animeName) {
    try {
        const { data: { results } } = await axios.get(URL+`/search/anime?q=${animeName}&page=1`)
        return results

    } catch (error) {
        console.log(error)
    }
}
