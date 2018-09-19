import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';

import ListItem from '../ListItem/ListItem';

const PlaceList = (props) => {
  const placesOutput = props.places.map((place, i) => {
    return (<ListItem
              placeName={place}
              key={i}
              onItemPressed={() => props.onItemDeleted(i)} />
    );
  });

  return (<ScrollView style={styles.listContainer}>{placesOutput}</ScrollView>);
};

const styles = StyleSheet.create({
  listContainer: {
    width: "100%"
  }
});

export default PlaceList;
