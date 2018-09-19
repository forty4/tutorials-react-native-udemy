import React from 'react';
import { StyleSheet, View } from 'react-native';

import PlaceInput from './src/components/PlaceInput/PlaceInput';
import PlaceList from './src/components/PlaceList/PlaceList';

export default class App extends React.Component {
  state = {
    places: [],
  };

  components = {
    PlaceInput,
    PlaceList,
  };

  placeAddedHandler = (placeName) => {
    this.setState((prevState) => {
      return {
        places: prevState.places.concat(placeName)
      };
    });
  };

  placeDeletedHandler = (index) => {
    this.setState((prevState) => {
      return {
        places: prevState.places.filter((place, i) => {
          return i !== index;
        })
      };
    })
  }

  render() {
    return (
      <View style={styles.container}>
        <PlaceInput
            onPlaceAdded={this.placeAddedHandler} />
        <PlaceList
            places={this.state.places}
            onItemDeleted={this.placeDeletedHandler} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 26,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
});
