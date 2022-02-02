import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  Image,
  TextInput,
  Dimensions,
} from 'react-native';
import {GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete';
import AntDesignIcon from 'react-native-vector-icons/AntDesign';
import EntypoIcon from 'react-native-vector-icons/Entypo';
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';
import LinearGradient from 'react-native-linear-gradient';
import Config from 'react-native-config';
import {debounce} from 'lodash';
import React, {useState, useCallback} from 'react';
import styles from './style';

// Images
const AVATAR = require('../../assets/images/avatar.png');
const INDICATOR = require('../../assets/images/uberLeftIndicators.jpg');
const SAVEDLOCATION = require('../../assets/images/saved.jpg');
const LOCATION = require('../../assets/images/location.jpg');
const PINLOCATION = require('../../assets/images/pin.jpg');

const GOOGLE_PLACE_API_KEY = Config.GOOGLE_PLACE_API_KEY;
const GOOGLE_PACES_API_BASE_URL = 'https://maps.googleapis.com/maps/api/place';

export default function index() {
  const [fromLocation, setFromLocation] = useState('');
  const [toLocation, setToLocation] = useState('');

  const changeHandler = useCallback(
    debounce(text => findPlaces(text), 700),
    [],
  );

  const findPlaces = async text => {
    console.log(text);
    if (text.trim() === '') return;

    const apiUrl = `${GOOGLE_PACES_API_BASE_URL}/autocomplete/json?key=${GOOGLE_PLACE_API_KEY}&input=${text}`;
    console.log(apiUrl);

    try {
      const result = await axios.request({
        method: 'get',
        url: apiUrl,
      });
      if (result) {
        console.log(result);
      }
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <SafeAreaView>
      {/* Header Sectiom */}
      <Text>{GOOGLE_PLACE_API_KEY}</Text>
      <Text>AIzaSyBWU9HrMQUigxX7_ry_HpHNvEdn_Vve4DI</Text>
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
          <TextInput
            style={styles.textInputFrom}
            placeholder="Current Location"
            placeholderTextColor="#4682F3"
            value={fromLocation}
            // onChangeText={text => changeText}
            returnKeyType="search"
          />

          <TextInput
            style={styles.textInputTo}
            placeholder="Where to?"
            placeholderTextColor="#000"
            onChangeText={text => changeHandler(text)}
            returnKeyType="search"
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
