import "react-native-gesture-handler";
import React, {useRef} from "react";

import { Provider } from "react-redux";
import store from "./redux/store";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { useReduxDevToolsExtension } from '@react-navigation/devtools';

import { StyleProvider } from 'native-base';
import getTheme from './native-base-theme/components';
import material from './native-base-theme/variables/material';

import JobContainer from "./components/JobContainer";
import AssembledItem from "./components/AssembledItem";
import ConfirmJob from "./components/ConfirmJob";
import JobInformation from "./components/JobInformation";

const Stack = createStackNavigator();

const App = () => {
  const navigationRef = useRef();
  useReduxDevToolsExtension(navigationRef);

  
  return (
    <Provider store={store}>
      <StyleProvider style={getTheme(material)}>
      <NavigationContainer
       ref={navigationRef}
       >
        <Stack.Navigator initialRouteName="JobInfo">
          <Stack.Screen 
          name="JobInfo" 
          component={JobInformation} />
          <Stack.Screen 
          name="Items" 
          component={AssembledItem}
          />
          <Stack.Screen 
          name="Confirm" 
          options={{ title: "Submit Job" }}
          component={ConfirmJob} />
        </Stack.Navigator>
      </NavigationContainer>
      </StyleProvider>
    </Provider>
  );
};

export default App;
