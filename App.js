import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import { Button } from 'react-native-paper';
import ProductView from './app/ui/views/ProductsView/ProductsView';


const App = () => {

  return (
    <ProductView/>
  );
};

const styles = StyleSheet.create({

});

export default App;
