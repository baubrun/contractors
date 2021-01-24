import "react-native-gesture-handler";
import React, {useRef} from "react";
import { Provider } from "react-redux";
import store from "./redux/store";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { useReduxDevToolsExtension } from '@react-navigation/devtools';

import JobForm from "./components/JobForm";

const Stack = createStackNavigator();

const App = () => {
  const navigationRef = useRef();
  useReduxDevToolsExtension(navigationRef);

  
  return (
    <Provider store={store}>
      <NavigationContainer
       ref={navigationRef}
       >
        <Stack.Navigator>
          <Stack.Screen name="Jobs" component={JobForm} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
