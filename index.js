import React from 'react';
import {Navigation} from 'react-native-navigation';
import {gestureHandlerRootHOC} from 'react-native-gesture-handler';
import Splash from './src/screens/Splash';
import HomeScreen from './src/screens/HomeScreen';
import DestinationScreen from './src/screens/DestinationScreen';
import {Provider} from 'react-redux';
import {store} from './src/store/store';

function WrappedComponent(Component) {
  return function inject(props) {
    const EnhancedComponent = () => (
      <Provider store={store}>
        <Component {...props} />
      </Provider>
    );
    return <EnhancedComponent />;
  };
}

Navigation.registerComponent(
  'splash',
  () => Splash,
  () => Splash,
);
Navigation.registerComponent(
  'home',
  () => WrappedComponent(HomeScreen),
  () => WrappedComponent(HomeScreen),
);

Navigation.registerComponent(
  'destination',
  () => WrappedComponent(DestinationScreen),
  () => WrappedComponent(DestinationScreen),
);

Navigation.events().registerAppLaunchedListener(() => {
  Navigation.setDefaultOptions({
    animations: {
      setRoot: {
        waitForRender: true,
      },
    },
    layout: {
      orientation: ['portrait'],
    },
  });
  Navigation.setRoot({
    root: {
      stack: {
        id: 'home',
        children: [
          {
            component: {
              name: 'home',
              options: {
                topBar: {
                  visible: false,
                },
              },
              waitForRender: true,
            },
          },
        ],
      },

      // stack: {
      //   id: 'splash',
      //   children: [
      //     {
      //       component: {
      //         name: 'splash',
      //         options: {
      //           topBar: {
      //             visible: false,
      //           },
      //           layout: {
      //             componentBackgroundColor: '#000',
      //             backgroundColor: '#000',
      //             orientation: ['portrait'],
      //           },
      //           statusBar: {
      //             backgroundColor: '#000',
      //             style: 'light',
      //           },
      //         },
      //         waitForRender: true,
      //       },
      //     },
      //   ],
      // },
    },
  });
});
