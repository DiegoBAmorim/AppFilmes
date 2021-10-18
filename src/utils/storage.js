import AsyncStorage from '@react-native-async-storage/async-storage';

//Buscar os filmes Salvos

export async function getMovieSave(key){
    const myMovies = await AsyncStorage.getItem(key);

    let moviesSave = JSON.parse(myMovies) || [];
    return moviesSave;
}

//Salvar um novo filmes
export async function saveMovie(key, newMovie){
    let moviesStored = await getMovieSave(key);
    
    //se tiver algum filme salvo com esse mesmo id / ou duplicado precisamos ignorar
    const hasMovie = moviesStored.some(item => item.id === newMovie.id);

    if(hasMovie){
        console.log('Esse filme já existe na sua lista')
        return;
    };
    moviesStored.push(newMovie);
    await AsyncStorage.setItem(key, JSON.stringify(moviesStored));
    console.log("Filme salvo com sucesso")
}

//Deletar algum filme especifico

//Filtrar algum filme se já esta salvo.
