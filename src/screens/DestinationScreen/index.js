import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  Image,
  TextInput,
} from 'react-native';
import {GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete';
import AntDesignIcon from 'react-native-vector-icons/AntDesign';
import EntypoIcon from 'react-native-vector-icons/Entypo';
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';
import LinearGradient from 'react-native-linear-gradient';

import React, {useState} from 'react';
import styles from './style';

// Images
const AVATAR = require('../../assets/images/avatar.png');
const INDICATOR = require('../../assets/images/uberLeftIndicators.jpg');
const SAVEDLOCATION = require('../../assets/images/saved.jpg');
const LOCATION = require('../../assets/images/location.jpg');
const PINLOCATION = require('../../assets/images/pin.jpg');

const GOOGLE_PLACE_API_KEY = 'AIzaSyCxHI_QFEYAa8ldWjRAGu4NfMdODBpT3N8';

export default function index() {
  const [fromLocation, setFromLocation] = useState('');
  const [toLocation, setToLocation] = useState('');

  return (
    <SafeAreaView>
      {/* Header Sectiom */}

      <View style={styles.headerTopContainer}>
        <AntDesignIcon
          style={styles.backIcon}
          name="arrowleft"
          size={20}></AntDesignIcon>
        <View style={styles.loggedInUser}>
          <Image style={styles.avatar} source={AVATAR}></Image>
          <Text style={styles.loggedInUserText}>For Syed M </Text>
          <EntypoIcon name="chevron-down" size={20}></EntypoIcon>
        </View>
      </View>

      <View style={styles.headerBottomContainer}>
        {/* Bullets at left side */}

        <View style={styles.leftContainer}>
          <Image
            resizeMode={'contain'}
            style={styles.leftContainerImg}
            source={INDICATOR}></Image>
        </View>

        {/* Input from and to text field */}
        <View style={styles.inputContainer}>
          <GooglePlacesAutocomplete
            placeholder="Current location"
            fetchDetails={true}
            styles={{
              textInput: styles.textInputFrom,
              container: styles.autocompleteContainer,
              listView: styles.listView,
              separator: styles.separator,
            }}
            textInputProps={{
              placeholderTextColor: '#4682F3',
            }}
            onPress={(data, details = null) => {
              // 'details' is provided when fetchDetails = true
              console.log(data, details);
              setFromLocation({data, details});
            }}
            query={{
              key: GOOGLE_PLACE_API_KEY,
              language: 'en',
            }}
          />

          <GooglePlacesAutocomplete
            placeholder="Where to?"
            fetchDetails={true}
            styles={{
              textInput: styles.textInputTo,
              container: {
                ...styles.autocompleteContainer,
                top: 50,
              },
              separator: styles.separator,
            }}
            onPress={(data, details = null) => {
              // 'details' is provided when fetchDetails = true
              console.log(data, details);
              // setToLocation({data, details});
            }}
            query={{
              key: GOOGLE_PLACE_API_KEY,
              language: 'en',
            }}
          />
        </View>

        {/* plus icon at right */}
        <View style={styles.rightIconCont}>
          <EntypoIcon
            style={styles.rightIcon}
            name="circle-with-plus"
            size={40}></EntypoIcon>
        </View>
      </View>

      {/* Saved Place */}
      <LinearGradient
        colors={['#E5E5E5', '#F1F1F1', '#FCFCFC', '#FFF']}
        style={styles.linearGradient}>
        <View style={styles.savedPlace}>
          <Image
            style={styles.savedPlaceLeftIcon}
            source={SAVEDLOCATION}></Image>
          <Text style={styles.savedPlaceText}>Saved Places</Text>
          <EntypoIcon
            style={styles.savedPlaceRightIcon}
            name="chevron-small-right"
            size={20}></EntypoIcon>
        </View>
      </LinearGradient>

      <View style={{backgroundColor: '#EDEDED'}}>
        <ScrollView style={{backgroundColor: '#fff'}}>
          {[...Array(5).keys()].map(item => {
            return (
              <View key={item} style={styles.previousDestination}>
                <View style={styles.pdIconContainer}>
                  <Image
                    style={styles.savedPlaceLeftIcon}
                    source={LOCATION}></Image>

                  {/* <AntDesignIcon name="clockcircle" size={30} color="#545454" /> */}
                </View>
                <View style={styles.addressContainer}>
                  <Text style={styles.destinationTextTitle}>
                    Anum Estate Building
                  </Text>
                  <Text
                    numberOfLines={1}
                    ellipsizeMode="tail"
                    style={styles.destinationTextAddress}>
                    Shahrah-e-Faisal, Karachi Memon Co-operative Housing Society
                    Umar Colony, Karachi, Karachi City, Sindh 75530
                  </Text>
                </View>
              </View>
            );
          })}
          <View style={styles.previousDestination}>
            <View style={styles.pdIconContainer}>
              <Image
                style={styles.savedPlaceLeftIcon}
                source={PINLOCATION}></Image>
            </View>
            <View style={styles.addressContainer}>
              <Text style={styles.destinationTextTitle}>
                Set location on map
              </Text>
            </View>
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}
