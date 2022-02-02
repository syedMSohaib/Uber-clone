import {View, Text, FlatList, TouchableOpacity} from 'react-native';
import React from 'react';
import AntDesignIcon from 'react-native-vector-icons/AntDesign';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import styles from './style';

const data = [
  {
    id: '1',
    location: 'Plot 361',
    address: 'Rafeh e society shah faisal colony, Karachi, Karachi city, Sindh',
  },
  {
    id: '2',
    location: 'Anum Estate building',
    address:
      'Shahrah-e-Faisal, Karachi memom coperative housing society umer colony, Karachi, Karachi city, Sindh',
  },
  {
    id: '3',
    location: 'LuckyOne Mall',
    address:
      'LA-2/B, Block 21, Main rashid mihas road, opp UBL Sports complex, FB Indus area block 21, Block 21 Gulberg town, Karachi, Karachi city, Sindh',
  },
];

console.log(data);

export default function index() {
  return (
    <View>
      {/* Input box */}
      <View style={styles.searchBox}>
        <TouchableOpacity>
          <Text style={styles.searchBoxText}>Where to?</Text>
        </TouchableOpacity>
        <View style={styles.divider} />
        <TouchableOpacity>
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
        </TouchableOpacity>
      </View>
      {/* Previous destinatiob */}
      <FlatList
        data={data}
        renderItem={({item}) => (
          <TouchableOpacity>
            <View key={item} style={styles.previousDestination}>
              <View style={styles.pdIconContainer}>
                <AntDesignIcon name="clockcircle" size={30} color="#545454" />
              </View>
              <View style={styles.addressContainer}>
                <Text style={styles.destinationTextTitle}>
                  Anum Estate Building
                </Text>
                <Text style={styles.destinationTextAddress}>
                  Shahrah-e-Faisal, Karachi Memon Co-operative Housing Society
                  Umar Colony, Karachi, Karachi City, Sindh 75530
                </Text>
              </View>
            </View>
          </TouchableOpacity>
        )}></FlatList>

      {/* Home Destination */}
    </View>
  );
}
