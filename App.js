import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import FlatlistView from './FlatlistView';
export default class App extends React.Component {
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <FlatlistView />
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
