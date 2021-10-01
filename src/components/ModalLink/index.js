import React from 'react';
import { View } from 'react-native';

import { Feather} from '@expo/vector-icons';

import {WebView} from 'react-native-webview';

import {BackButton, Name} from './styles';

export default function ModalLink({link, title, closeModal}) {
 return (
    <>
     <BackButton onPress={closeModal}>
        <Feather name="x" size={35} color="#fff" />
        <Name numberOfLines={1}>{title}</Name>
     </BackButton>

     <WebView 
     source={{uri : link}}
     />
   </>
  );
}