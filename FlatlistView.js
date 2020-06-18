import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  FlatList,
  Image,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import data from './data';

export default class FlatlistView extends React.Component {
  state = {
    text: '',
    contacts: data,
  };
  renderItemgetAll = ({item, index}) => {
    return (
      <TouchableOpacity style={styles.layoutShape}>
        <Image style={styles.avatar} source={{uri: item.picture}} />
        <View>
          <Text style={styles.textStyle}>{item.name}</Text>
          <Text style={styles.textStyle}>{item.company}</Text>
        </View>
      </TouchableOpacity>
    );
  };

  searchFilter = text => {
    const newdata = data.filter(item => {
      const listItem = `${item.name.toLowerCase()} ${item.company.toLowerCase()}`;
      return listItem.indexOf(text.toLowerCase()) > -1;
    });
    this.setState({
      contacts: newdata,
    });
  };
  headerSearchBar = () => {
    const {text} = this.state;
    return (
      <View style={styles.searchCont}>
        <TextInput
          onChangeText={text => {
            this.setState({});
            this.searchFilter(text);
          }}
          value={text}
          placeholder="Search"
          style={styles.searchbarS}
        />
      </View>
    );
  };
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <Text style={styles.textTitleStyle}>My List</Text>
        <View style={styles.viewText}>
          <FlatList
            ListHeaderComponent={this.headerSearchBar()}
            renderItem={this.renderItemgetAll}
            keyExtractor={item => item._id}
            data={this.state.contacts}
          />
        </View>
      </SafeAreaView>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  layoutShape: {
    flex: 1,
    flexDirection: 'row',
    paddingVertical: 10,
    marginHorizontal: 5,
    borderBottomWidth: 2,
    borderBottomColor: '#eee',
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginHorizontal: 5,
  },
  textTitleStyle: {
    fontSize: 35,
    marginLeft: 10,
    fontWeight: 'bold',
    letterSpacing: 12,
  },
  viewText: {
    marginTop: 25,
  },
  searchCont: {
    padding: 10,
  },
  searchbarS: {
    fontSize: 15,
    backgroundColor: '#f9f9f9',
    padding: 10,
  },
});
