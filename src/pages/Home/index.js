import React, {useEffect, useState} from 'react'
import { ScrollView } from 'react-native';

import {Feather} from '@expo/vector-icons';

import Header from '../../components/Header';
import SliderItem from '../../components/SliderItem';

import api, {key} from '../../services/api';
import {getListMovies} from '../../utils/movie';

import {Container, SearchContainer, Input, SearchButton, Title, Banner, BannerButton, SliderMovie} from './styles';


function Home() {
    const [nowMovies, setNowMovies] = useState([]);
    const [popularMovies, setPopularMovies] = useState([]);
    const [topMovies, setTopMovies] = useState([]);
    
    useEffect(() => {
        let isActive = true;

        async function getMovies(){
            /*const response = await api.get('/movie/now_playing', {
                params:{
                    api_key: key,
                    language: 'pt-BR',
                    page: 1
                }
            })
            setNowMovies()*/
            const [nowData, popularData, topData] = await Promise.all([
                api.get('/movie/now_playing', {
                    params:{
                        api_key: key,
                        language: 'pt-BR',
                        page: 1
                    }
                }),
                api.get('/movie/popular', {
                    params:{
                        api_key: key,
                        language: 'pt-BR',
                        page: 1
                    }
                }),
                api.get('/movie/top_rated', {
                    params:{
                        api_key: key,
                        language: 'pt-BR',
                        page: 1
                    }
                }),
            ])
            const nowList = getListMovies(10, nowData.data.results);
            const popularList = getListMovies(5, popularData.data.results);
            const topList = getListMovies(5, topData.data.results);

            setNowMovies(nowList);
            setPopularMovies(popularList);
            setTopMovies(topList);
        }
        getMovies()
    }, [])
    return(
        <Container>
            <Header title="React Prime"/>
            <SearchContainer>
                <Input 
                placeholder="Vingadores"
                placeholderTextColor="#ddd"
                />
                <SearchButton>
                    <Feather name="search" size={30} color="#FFF"/>
                </SearchButton>
            </SearchContainer>

            <ScrollView showsVerticalScrollIndicator={false}>
                <Title>Em Cartaz</Title>

                <BannerButton activeOpacity={0.9} onPress={{}}>
                    <Banner 
                    resizeMethod="resize"
                    source={{uri: "https://images.unsplash.com/photo-1512070679279-8988d32161be?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=438&q=80"}}
                    />
                </BannerButton>
                <SliderMovie 
                keyExtractor={(item) => String(item.id)}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                data={nowMovies}
                renderItem={({item}) => <SliderItem data={item}/>}
                />

                <Title>Populares</Title>
                <SliderMovie 
                keyExtractor={(item) => String(item.id)}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                data={popularMovies}
                renderItem={({item}) => <SliderItem data={item}/>}
                />
                <Title>Mais votados</Title>
                <SliderMovie 
                keyExtractor={(item) => String(item.id)}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                data={topMovies}
                renderItem={({item}) => <SliderItem data={item} />}
                />
            </ScrollView>
        </Container>
    )
}

export default Home;