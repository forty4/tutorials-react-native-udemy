import React from 'react';
import { StyleSheet, View } from 'react-native';

import PlaceInput from './src/components/PlaceInput/PlaceInput';
import PlaceList from './src/components/PlaceList/PlaceList';
import PlaceDetail from './src/components/PlaceDetail/PlaceDetail';

export default class App extends React.Component {
  state = {
    places: [],
    selectedPlace: null,
  };

  components = {
    PlaceInput,
    PlaceList,
  };

  placeAddedHandler = (placeName) => {
    this.setState((prevState) => {
      return {
        places: prevState.places.concat({
          key: Math.random(),
          name: placeName,
          image: {
            uri: 'https://image.nj.com/home/njo-media/width620/img/entertainment_impact/photo/njbeachcapemb-64jpg-eb1b27e66c0c2c85.jpg'
          },
        })
      };
    });
  };

  placeSelectedHandler = (key) => {
    this.setState((prevState) => {
      return {
        selectedPlace: prevState.places.find((place) => {
          return place.key === key;
        })
      };
    });
  };

  placeDeletedHandler = () => {
    this.setState((prevState) => {
      return {
        places: prevState.places.filter((place) => {
          return place.key !== prevState.selectedPlace.key;
        }),
        selectedPlace: null,
      };
    });
  };

  modalClosedHandler = () => {
    this.setState({
      selectedPlace: null,
    });
  };

  render() {
    return (
      <View style={styles.container}>
        
        <PlaceDetail
            selectedPlace={this.state.selectedPlace}
            onItemDeleted={this.placeDeletedHandler}
            onModalClosed={this.modalClosedHandler} />
        <PlaceInput
            onPlaceAdded={this.placeAddedHandler} />
        <PlaceList
            places={this.state.places}
            onItemSelected={this.placeSelectedHandler} />
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
