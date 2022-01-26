import {View, Text, Image} from 'react-native';
import React from 'react';

export default function HomeMap() {
  return (
    <View
      style={{
        height: 300,
        backgroundColor: 'pink',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Image
        source={{
          uri: 'https://www.lifewire.com/thmb/phcmvK4ZGtg_BfdztEWJ5uvtPpk=/768x768/smart/filters:no_upscale()/schedule-uber-in-advance.01-5bfc595146e0fb002614ed1b.jpg',
        }}
        style={{width: '100%', height: '100%'}}
      />
    </View>
  );
}
