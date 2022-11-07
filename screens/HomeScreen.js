import React from 'react'
import { StyleSheet, Text, View, SafeAreaView, Image } from 'react-native'
import tw from 'twrnc';
import NavOptions from '../components/NavOptions';

const HomeScreen = () => {
  return (
    <SafeAreaView style={[tw`h-full`]}>
      <View style={tw`p-5`}>
          <Image
            style={{ width: 100, height: 100, resizeMode: 'contain', }}
            source={require('../assets/snapp-logo.png')}
          />
          <NavOptions />
      </View>
    </SafeAreaView>
  )
}

export default HomeScreen

const styles = StyleSheet.create({})