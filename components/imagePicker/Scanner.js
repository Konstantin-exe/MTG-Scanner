import React from 'react';
import {
  Button,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import ImagePicker from 'react-native-image-crop-picker';

const Scanner = () => {
  const openPicker = () => {
    console.log('dere');
    ImagePicker.openPicker({
      width: 300,
      height: 400,
      cropping: true,
    }).then(image => {
      console.log(image);
    });
  };

  return (
    <View>
      <Text>Hello</Text>
      <Button onPress={openPicker} title="Select an Image" />
    </View>
  );
};

export default Scanner;
