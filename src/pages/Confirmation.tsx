import React from 'react';
import {
  StyleSheet,
  SafeAreaView,
  Text,
  View
} from 'react-native';
import { Button } from '../components/Button';
import colors from '../styles/colors';
import fonts from '../styles/fonts';


export function Confirmation() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.emoji}>
          {':)'}
        </Text>

        <Text style={styles.title}>
          Tudo certo!
        </Text>

        <Text style={styles.subtitle}>
          A partir de agora suas {'\n'}
          plantas são nossa responsabilidade, {'\n'}
          não vamos te deixar esquecer de regá-las
        </Text>

        <View style={styles.footer}>
          <Button title="Começar"/>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    padding: 30
  },
  emoji: {
    fontSize: 78,
    textAlign: 'center',
    fontFamily: fonts.heading,
    color: colors.heading
  },
  title: {
    fontSize: 22,
    lineHeight: 38,
    fontFamily: fonts.heading,
    textAlign: 'center',
    color: colors.heading,
    marginTop: 15
  },
  subtitle: {
    fontSize: 17,
    lineHeight: 28,
    fontFamily: fonts.text,
    textAlign: 'center',
    color: colors.heading,
    paddingHorizontal: 20,
    marginTop: 10
  },
  footer: {
    width: '100%',
    paddingHorizontal: 50,
    marginTop: 20
  }
});