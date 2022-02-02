import {View, LogBox, Text, Image, StyleSheet} from 'react-native';
import React, {useState, useEffect, useCallback} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {getOrigin, setOrigin} from '../../slices/navSlice';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MapView, {Marker, PROVIDER_GOOGLE} from 'react-native-maps';
import RNLocation from 'react-native-location';
import Mapstyle from '../../helpers/Mapstyle';

const markerFrom = require('../../assets/images/marker_from.png');

console.log('Mapstyle', Mapstyle);

LogBox.ignoreLogs(['new NativeEventEmitter']); // Ignore log notification by message

RNLocation.configure({
  distanceFilter: null,
});

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    height: 400,
    width: 400,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
});

export default function HomeMap() {
  const [currentLongitude, setCurrentLongitude] = useState('...');
  const [currentLatitude, setCurrentLatitude] = useState('...');
  const [locationStatus, setLocationStatus] = useState('');

  const viewLocation = useSelector(getOrigin);
  const dispatch = useDispatch();

  console.log('viewLocation', viewLocation);

  const getLocation = useCallback(async () => {
    let permission = await RNLocation.checkPermission({
      ios: 'whenInUse', // or 'always'
      android: {
        detail: 'coarse', // or 'fine'
      },
    });

    console.log(permission);

    let location;
    if (!permission) {
      permission = await RNLocation.requestPermission({
        ios: 'whenInUse',
        android: {
          detail: 'coarse',
          rationale: {
            title:
              'Allow "Uber" to access your location even when you are not using your app',
            message:
              'For a reliable ride, Uber collects location data from the time you open an the app until the trip ends. This improves pickup, supports, and more.',
            buttonPositive: 'Allow',
            buttonNegative: "Don't Allow",
          },
        },
      });
      console.log(permission);
      location = await RNLocation.getLatestLocation({timeout: 100});
      console.log(location);
      dispatch(setOrigin(location));
    } else {
      location = await RNLocation.getLatestLocation({timeout: 100});
      dispatch(setOrigin(location));
    }
  }, [viewLocation]);

  useEffect(() => {
    console.log('viewLocation', viewLocation);
    if (viewLocation == null) getLocation();
  }, []);

  return (
    <View
      style={{
        height: 300,
        backgroundColor: 'pink',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <MapView
        customMapStyle={Mapstyle}
        style={styles.map}
        provider={PROVIDER_GOOGLE}
        mapType="standard"
        region={{
          latitude: viewLocation?.latitude,
          longitude: viewLocation?.longitude,
          latitudeDelta: 0.005,
          longitudeDelta: 0.005,
        }}>
        {viewLocation && (
          <Marker
            title="Origin"
            image={markerFrom}
            description={`${viewLocation?.latitude}, ${viewLocation?.longitude}`}
            identifier="origin"
            coordinate={{
              latitude: viewLocation?.latitude,
              longitude: viewLocation?.longitude,
            }}></Marker>
        )}
      </MapView>
      {/* <Image
        source={{
          uri: 'https://www.lifewire.com/thmb/phcmvK4ZGtg_BfdztEWJ5uvtPpk=/768x768/smart/filters:no_upscale()/schedule-uber-in-advance.01-5bfc595146e0fb002614ed1b.jpg',
        }}
        style={{width: '100%', height: '100%'}}
      /> */}
    </View>
  );
}
