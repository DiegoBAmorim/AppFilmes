import axios from 'axios'

//url filmes me cartaz:
//https://api.themoviedb.org/3/movie/now_playing?api_key=f16b09921a3dd0539af4a32941350154&language=pt-BR&page=1

export const key = 'f16b09921a3dd0539af4a32941350154';

const api = axios.create({
    baseURL: "https://api.themoviedb.org/3/"
});

export default api;