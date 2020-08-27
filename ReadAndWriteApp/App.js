import React, {useEffect, useMemo, useReducer} from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import AsyncStorage from '@react-native-community/async-storage';
import {StackScreen, DrawerScreen} from './src/NavigationScreen';
import {SplashScreen} from './src/ScreemFolder';

export const AuthContext = React.createContext();

const RootStack = createStackNavigator();
function App({ navigation }) {
  const initialState = {
    isLoading: true,
    isSignout: false,
    userToken: null,
    userName: null
  }

  const reducer = (state, action) => {
    switch (action.type) {
      case 'RESTORE_TOKEN':
        return {
          ...state,
          userName: action.userName,
          userToken: action.userToken,
          isLoading: false,
        };
      case 'SIGN_IN':
        return {
          ...state,
          userName: action.userName,
          isSignout: false,
          userToken: action.userToken,
        };
      case 'SIGN_OUT':
        return {
          ...state,
          userName: null,
          isSignout: true,
          userToken: null,
        };
      default:
        return state;
     }
  }
 
  const [state, dispatch] = useReducer(reducer, initialState);
  const authContext = useMemo(() => ({
    signIn: async(res) => {
      // setUserToken('fgkj');
      // setIsLoading(false);
      const userToken = String(res.token);
      const userName = res.username;
      try {
        await AsyncStorage.setItem('userToken', userToken);
      } catch(e) {
        console.log(e);
      }
      dispatch({ type: 'SIGN_IN', userName: userName, userToken: userToken });
    },
    signOut: async() => {
      // setUserToken(null);
      // setIsLoading(false);
      try {
        await AsyncStorage.removeItem('userToken');
      } catch(e) {
        console.log(e);
      }
      dispatch({ type: 'SIGN_OUT', userName: null, userToken: null });
    },
    signUp: async(res) => {
      const userToken = String(res.token);
      const userName = res.username;
      try {
        await AsyncStorage.setItem('userToken', userToken);
      } catch(e) {
        console.log(e);
      }
      dispatch({ type: 'SIGN_IN', userName: userName, userToken: userToken });
    },
  }), []);

  useEffect(() => {
    setTimeout(async() => {
      // setIsLoading(false);
      let userToken;
      userToken = null;
      try {
        userToken = await AsyncStorage.getItem('userToken');
      } catch(e) {
        console.log(e);
      }
      // console.log('user token: ', userToken);
      dispatch({ type: 'RESTORE_TOKEN', userToken: userToken });
    }, 1000);
  }, []);

  if( state.isLoading ) {
    return(
      <SplashScreen/>
    );
  }
  
  return (
    <AuthContext.Provider value={authContext}>
      <NavigationContainer>
        <RootStack.Navigator>
          {state.userToken == null ? (
              // No token found, user isn't signed in
              <RootStack.Screen
                name="SignIn"
                component={StackScreen}
                options={{
                  title: 'Sign in',
                  headerShown: false,
              // When logging out, a pop animation feels intuitive
                  animationTypeForReplace: state.isSignout ? 'pop' : 'push',
                }}
              />
            ) : (
              
              // User is signed in
              <RootStack.Screen name="Home" component={DrawerScreen}  options={{
                title: 'Home',
                headerShown: false}} />
            )}
        </RootStack.Navigator>
      </NavigationContainer>
    </AuthContext.Provider>

  );
}
export default App;