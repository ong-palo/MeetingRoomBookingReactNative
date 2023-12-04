import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import LoginScreen from './screens/LoginScreen/LoginScreen';
import Welcome from './screens/WelcomeScreen/WelcomeScreen';
import {Provider} from 'react-redux';
import {store} from './store/store';
import MyBooking from './screens/MyBookingScreen/MyBooking';
import Header from './components/Header/Header';
import NewBooking from './screens/NewBookingScreen/NewBooking';
import SelectRoom from './screens/SelectRoomScreen/SelectRoom';

const Stack = createStackNavigator();

function App(): JSX.Element {
  // const isDarkMode = useColorScheme() === 'dark';
  //
  // const backgroundStyle = {
  //   backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  // };

  return (
    <>
      <Provider store={store}>
        <NavigationContainer>
          <Stack.Navigator
            screenOptions={{
              gestureEnabled: true,
            }}>
            <Stack.Screen
              name="Welcome"
              component={Welcome}
              options={{
                headerShown: false,
              }}
            />
            <Stack.Screen
              name="Login"
              component={LoginScreen}
              options={{
                headerShown: false,
              }}
            />
            <Stack.Screen
              name="MyBookings"
              component={MyBooking}
              options={{
                // eslint-disable-next-line react/no-unstable-nested-components
                header: () => <Header text="My Booking History" />,
              }}
            />
            <Stack.Screen
              name="NewBooking"
              component={NewBooking}
              options={{
                // eslint-disable-next-line react/no-unstable-nested-components
                header: () => <Header text="Make New Booking" />,
              }}
            />
            <Stack.Screen
              name="SelectRoom"
              component={SelectRoom}
              options={{
                // eslint-disable-next-line react/no-unstable-nested-components
                header: () => <Header text="Select Meeting Room" />,
              }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </Provider>
    </>
  );
}

export default App;
