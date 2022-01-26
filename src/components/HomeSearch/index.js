import {View, Text} from 'react-native';
import React from 'react';
import AntDesignIcon from 'react-native-vector-icons/AntDesign';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import styles from './style';

export default function index() {
  return (
    <View>
      {/* Input box */}
      <View style={styles.searchBox}>
        <Text style={styles.searchBoxText}>Where to?</Text>
        <View style={styles.divider} />
        <View style={styles.scheduleContainer}>
          <AntDesignIcon
            style={styles.scheduleIcon}
            name="clockcircle"
            size={20}
            color="#000"
          />
          <Text>Now</Text>
          <MaterialIcons name="keyboard-arrow-down" size={25} color="#000" />
        </View>
      </View>
      {/* Previous destinatiob */}
      <View style={styles.previousDestination}>
        <View style={styles.pdIconContainer}>
          <AntDesignIcon name="clockcircle" size={20} color="#545454" />
        </View>
        <Text style={styles.destinationTextTitle}>Anum Estate Building</Text>
        <Text style={styles.destinationTextAddress}>
          Shahrah-e-Faisal, Karachi Memon Co-operative Housing Society Umar
          Colony, Karachi, Karachi City, Sindh 75530
        </Text>
      </View>
      {/* Home Destination */}
    </View>
  );
}