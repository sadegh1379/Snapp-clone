import React from 'react'
import { StyleSheet, Text, View, SafeAreaView, Image } from 'react-native'
import tw from 'twrnc';
import NavOptions from '../components/NavOptions';
import { GOOGLE_MAPS_APIKEY } from "@env";
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { TextInput } from 'react-native-web';

const HomeScreen = () => {
  return (
    <SafeAreaView style={[tw`h-full`]}>
      <View style={tw`p-3`}>
        <Image
          style={{ width: 100, height: 100, resizeMode: 'contain', }}
          source={require('../assets/snapp-logo.png')}
        />
        <GooglePlacesAutocomplete
          placeholder='Search'
          styles={{
            container: {
              flex: 0,
            },
            TextInput: {
              backgroundColor: 'transparent',
            }
          }}
          query={{
            key: 'YOUR API KEY',
            language: 'en',
          }}
        />
        <NavOptions />
      </View>
    </SafeAreaView>
  )
}

export default HomeScreen

const styles = StyleSheet.create({})