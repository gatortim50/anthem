import React, { useState } from 'react';
import { View, Text, FlatList } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faThumbsUp, faThumbsDown } from '@fortawesome/free-solid-svg-icons';
import sortBy from 'lodash/sortBy';
import { Button } from '../../components';
import { Cache } from 'react-native-cache';
import styles from './styles';

const ResultsScreen = ({ route, navigation }) => {
  const [displayList, setDisplayList] = useState(route.params.results.list);
  const cache = new Cache({
    namespace: 'anthem',
    policy: {
        maxEntries: 50000
    },
    backend: AsyncStorage
  });
  let icon = true;

  const submitForm = () => {
    navigation.goBack();
  };

  const sortThumbsUp = () => {
    console.log('thumbs up');
    const sortedByMostThumbsUp = sortBy(displayList, 'thumbs_up').reverse();
    setDisplayList(sortedByMostThumbsUp);
  };

  const sortThumbsDown = () => {
    console.log('thumbs up');
    const sortedByMostThumbsDown = sortBy(displayList, 'thumbs_down').reverse();
    setDisplayList(sortedByMostThumbsDown);
  };

  return (
    <View style={styles.container}>
      <View style={styles.sortContainer}>
        <View style={styles.sortButtonContainer}>
          <Button onPress={sortThumbsUp} title={'Sort By Thumbs Up'} />
        </View>
        <View style={styles.sortButtonContainer}>
          <Button onPress={sortThumbsDown} title={'Sort By Thumbs Down'} />
        </View>
      </View>
      {displayList && (
        <FlatList
          data={displayList}
          renderItem={({ item, index }) => (
            <View style={styles.container}>
              <View style={styles.rateContainer}>
                <Text style={styles.thumbsUp}>
                  {item.thumbs_up}
                  {icon && (
                    <FontAwesomeIcon
                      style={styles.buttonIcon}
                      icon={faThumbsUp}
                      size={12}
                    />
                  )}
                </Text>
                <Text style={styles.thumbsDown}>
                  {item.thumbs_down}
                  {icon && (
                    <FontAwesomeIcon
                      style={styles.buttonIcon}
                      icon={faThumbsDown}
                      size={12}
                    />
                  )}
                </Text>
              </View>

              <View style={styles.resultsContainer}>
                <Text style={styles.defText}>{item.definition}</Text>
              </View>
            </View>
          )}
          keyExtractor={(item, index) => index.toString()}
        />
      )}
      
      <View style={styles.resultsButtonContainer}>
        <Button onPress={submitForm} title={'Back'} />
      </View>
    </View>
  );
};

export default ResultsScreen;
