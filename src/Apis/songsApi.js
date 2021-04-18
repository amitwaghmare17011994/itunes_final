import axios from 'axios'



export const getSongs = async (term = '') => {
    try {
        const res = await axios.get(`https://itunes.apple.com/search/?term=${term}`)
        return res.data.results
    } catch (err) {
        return []
    }
}