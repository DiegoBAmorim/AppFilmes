import React from 'react'
import { ScrollView } from 'react-native';

import {Feather} from '@expo/vector-icons';

import Header from '../../components/Header'
import SliderItem from '../../components/SliderItem'
import {Container, SearchContainer, Input, SearchButton, Title, Banner, BannerButton, SliderMovie} from './styles';


function Home() {
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
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                data={[1,2,3,4]}
                renderItem={({item}) => <SliderItem />}
                />
            </ScrollView>
        </Container>
    )
}

export default Home;