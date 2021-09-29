import React from 'react';
import { Ionicons } from '@expo/vector-icons'

import {Container, BannerItem, Title, RateContainer, Rate} from './styles';

export default function SliderItem() {
 return (
      <Container activeOpacity={0.7}>
          <BannerItem 
          source={{uri: "https://images.unsplash.com/photo-1512070679279-8988d32161be?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=438&q=80"}}
          />
          <Title numberOfLines={1}>Vingadores</Title>
          <RateContainer>
              <Ionicons name="md-star" size={12} color="#E7A74E"/>
              <Rate>9/10</Rate>
          </RateContainer>
       </Container>
  );
}