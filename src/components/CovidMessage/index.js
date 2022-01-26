import {View, Text} from 'react-native';
import React from 'react';
import styles from './style';

export default function index() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>In this together</Text>
      <Text style={styles.text}>
        To help keep each other safe, drivers and riders are now required to
        wear face covers
      </Text>
      <Text style={styles.learnMore}>Learn More</Text>
    </View>
  );
}
