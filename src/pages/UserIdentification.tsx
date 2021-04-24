import { useNavigation } from '@react-navigation/core';
import React, { useState } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  TextInput,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Platform,
  Keyboard
} from 'react-native';
import { Button } from '../components/Button';
import colors from '../styles/colors';
import fonts from '../styles/fonts';

export function UserIdentification(){

  const [ isFocused, setIsFocused ] = useState(false);
  const [ isFilled, setIsFilled ] = useState(false);
  const [ name, setName ] = useState<string>();

  const navigation = useNavigation();

  function handleSubmit () {
    navigation.navigate('Confirmation');
  }
  
  function handleInputBlur() {
    setIsFocused(false);
    setIsFilled(!!name && name.length >= 3);
  }

  function handleInputFocus() {
    setIsFocused(true);
  }

  function handleInputChange(value: string) {
    setIsFilled(!!value && value.length >= 3);
    setName(value);
  }

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView 
        style={styles.container}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      >
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={styles.content}>
            <View style={styles.form}>
                <View style={styles.header}>
                  <Text style={styles.emoji}>
                    {isFilled ? ':)' : ':\\'}
                  </Text>
                  
                  <Text style={styles.title}>
                    Olá! {'\n'}
                    Qual o seu nome?
                  </Text>
                </View>

                <TextInput 
                  placeholder='Digite seu nome'
                  style={[
                    styles.input,
                    (isFocused || isFilled ) && { borderColor: colors.green, color: colors.green }
                  ]}
                  onBlur={handleInputBlur}
                  onFocus={handleInputFocus}
                  onChangeText={handleInputChange}
                />

                <View style={styles.footer}>
                  <Button 
                    title='Confirmar'
                    onPress={handleSubmit}
                    isActivated={isFilled}
                  />
                </View>
            </View>
          </View>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
    width: '100%',
  },
  content: {
    flex: 1,
    width: '100%',
  },
  header: {
    alignItems: 'center'
  },
  form: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 54,
  },
  emoji: {
    fontSize: 44,
  },
  title: {
    fontSize: 24,
    lineHeight: 32,
    fontFamily: fonts.heading,
    textAlign: 'center',
    color: colors.heading,
    marginTop: 30
  },
  input: {
    borderBottomWidth: 1,
    borderBottomColor: colors.gray,
    color: colors.heading,
    width: '100%',
    fontSize: 18,
    fontFamily: fonts.text,
    marginTop: 50,
    padding: 10,
    textAlign: 'center'
  },
  footer: {
    marginTop: 30,
    width: '100%',
    paddingHorizontal: 20
  }
});