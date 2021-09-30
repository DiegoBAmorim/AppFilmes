import React, {useState, useEffect} from 'react';
import { Container, Title,  Header, HeaderButton, } from './styles';
import {Feather, Ionicons} from '@expo/vector-icons';

import {useNavigation, useRoute} from '@react-navigation/native';
import api, {key} from '../../services/api'


export default function Detail() {
    const navigation = useNavigation();
    const route = useRoute();

    const [movie, setMovie] = useState({});
    console.log(route.params?.id)
    useEffect(() => {
        let isActive = true;
        async function getMovie(){
            const response = await api.get(`/movie/${route.params?.id}`, {
                params:{
                        api_key: key,
                        language: 'pt-BR',
                        
                    }
            })
            .catch((err) => {
                console.log(err)
            })
            if(isActive){
                setMovie(response.data)
                console.log(response.data)
            }
        }
        if(isActive){
            getMovie()
        }

        return () => {
           isActive = false; 
        }
    }, [])
 return (
   <Container>
       <Header>
           <HeaderButton>
                <Feather 
                name="arrow-left" 
                size={28}
                color="#FFF"
                />
           </HeaderButton>
           <HeaderButton>
                <Ionicons 
                name="bookmark"
                size={28}
                color="#FFF"
                />
           </HeaderButton>
       </Header>
   </Container>
  );
}