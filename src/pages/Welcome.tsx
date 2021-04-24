import React from 'react';
import { 
  SafeAreaView, 
  Text, 
  StyleSheet, 
  Image,
  TouchableOpacity,
  Dimensions,
  View, 
} from 'react-native';
import { useNavigation } from '@react-navigation/core'

import { Feather } from '@expo/vector-icons';

import wateringImg from '../assets/watering.png';
import colors from '../styles/colors';
import fonts from '../styles/fonts';

export function Welcome() {

  const navigation = useNavigation();

  function handleStart () {
    navigation.navigate('UserIdentification');
  }
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.wrapper}>
        <Text style={styles.title}>
          Gerencie {'\n'}
          suas plantas de {'\n'}
          forma simples
        </Text>

        <Image 
          source={wateringImg} 
          style={styles.image}
          resizeMode="contain"
        />

        <Text style={styles.subtitle}>
          Nunca mais esqueça de regar suas plantas. 
          Nós cuidamos de lembrar você sempre que precisar.
        </Text>

        <TouchableOpacity 
          style={styles.button}
          activeOpacity={0.7}
          onPress={handleStart}
        >
          <Feather 
            name="chevron-right"
            style={styles.buttonIcon}
          />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  wrapper: {
    flex: 1,
    alignItems:'center',
    justifyContent: 'space-around',
    padding: 8,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    fontFamily: fonts.heading,
    lineHeight: 34,
    textAlign: 'center',
    color: colors.heading,
    marginTop: 38,
  },
  image: {
    height: Dimensions.get('window').width * 0.7 // 70% da largura da tela
  },
  subtitle: {
    fontSize: 18,
    fontFamily: fonts.text,
    textAlign: 'center',
    paddingHorizontal: 20,
    color: colors.heading,
  },
  button: {
    backgroundColor: colors.green,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 16,
    marginBottom: 10,
    height: 56,
    width: 56
  },
  buttonIcon: {
    color: colors.white,
    fontSize: 28,
  },
});