
import React from 'react';
import {StyleSheet, View, Image, Text, Alert, TouchableOpacity} from 'react-native';
import {Icon} from 'react-native-vector-icons/Feather'

import foto from './src/assets/fotoPatricia.jpeg';
import Card from './src/assets/components/Card';

const App = () => {

  function handleRedeSocial(rede_social) {
    switch(rede_social){

      case 'linkedin':
        Alert.alert('LinkedIn', 'https://www.linkedin.com/in/patricia-murotani-1a27581a3/')
      break
      case 'github':
        Alert.alert('GitHub', 'https://github.com/PatriciaMurotani')
      break
    }
  }

  return (
    <View style={style.page}>
      <View style={style.container_cabecalho}>
        <Image source={foto} style={style.foto} />
        <Text style={style.nome}>PATRICIA MUROTANI</Text>
        <Text style={style.funcao}>Estudante de Análise e Desenvolvimento de Sistemas</Text>
        <View style={style.redes_sociais}>
          <TouchableOpacity onPress={()=> handleRedeSocial('github')}>
            <Icon name="github" size={30} />
          </TouchableOpacity>
          <TouchableOpacity onPress={()=> handleRedeSocial('linkedin')}>
            <Icon name="linkedin" size={30} />
          </TouchableOpacity>
        </View>
      </View>

      <Card titulo="Objetivo">
          <Text style={style.card_content_text}>Em busca de uma oportunidade para ingressar na área de desenvolvimento e programação.</Text>
      </Card>

      <Card titulo="Conhecimento nas linguagens">
          <Text style={style.card_content_text}>HTML e CSS</Text>
          <Text style={style.card_content_text}>JavaScript</Text>
          <Text style={style.card_content_text}>C#</Text>
      </Card>
          
    </View>
  );
};

const style = StyleSheet.create({

  page:{
    backgroundColor: '#e7e7e7',
    flex: 1,
  },
  container_cabecalho: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 55,
  },
  foto: {
    width: 250,
    height: 250,
    borderRadius: 125,
  },
  nome: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 10,
  },
  funcao: {
    color: '#939393',
    marginBottom: 10,
  },
  redes_sociais: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '60%',
    marginTop: 20,
  },
  card_content_text: {
    color: '#939393',
    marginBottom: 10,
  },
})

export default App;
