import {View, Text, Image} from 'react-native';
import React, {useEffect, useRef} from 'react';
import {StyleSheet} from 'react-native';
import {Navigation} from 'react-native-navigation';

const Logo = require('../../assets/images/Uber-White-Logo.wine.png');

const styles = StyleSheet.create({
  logo: {
    width: 200,
    height: 80,
  },
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  logoContainer: {
    width: 40,
    height: 40,
  },
});

export default function index(props) {
  const timerRef = useRef(null);

  useEffect(() => {
    const listener = {
      componentDidAppear: () => {
        console.log('RNN', `componentDidAppear`);
        timerRef.current = setTimeout(() => {
          _navigateTo();
        }, 2000);
      },
      componentDidDisappear: () => {
        console.log('RNN', `componentDidDisappear`);
        clearInterval(timerRef.current);
      },
    };
    // Register the listener to all events related to our component
    const unsubscribe = Navigation.events().registerComponentListener(
      listener,
      props.componentId,
    );
    return () => {
      // Make sure to unregister the listener during cleanup
      unsubscribe.remove();
    };
  }, []);

  const _navigateTo = () => {
    Navigation.push(props.componentId, {
      component: {
        name: 'home',
        options: {
          topBar: {
            visible: false,
          },
          statusBar: {
            style: 'light',
          },
        },
      },
    });
  };

  return (
    <View style={styles.container}>
      <Image style={styles.logo} source={Logo}></Image>
    </View>
  );
}
