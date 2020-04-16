import React, {Component} from 'react';
import {StatusBar} from 'react-native';
import RootNavigator from './src/navigation/RootNavigator';
import {createAppContainer} from 'react-navigation';
import {SafeAreaView, SafeAreaProvider} from 'react-native-safe-area-context';
import colors from './src/themes/Colors';

const AppContainer = createAppContainer(RootNavigator);

const App: () => React$Node = () => {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={{flex: 1}}>
        <StatusBar backgroundColor={colors.primaryDark} barStyle="default" />
        <AppContainer />
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

export default App;