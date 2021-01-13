import React, {
  useState,
  useEffect,
  useCallback,
  useMemo,
  useRef,
  useContext,
} from 'react';
import { Image, View, TextInput } from 'react-native';
import GetResults from '../../api/API';

import styles from './styles';
import { Button } from '../../components';
import Images from '../../constants/images';

const SearchScreen = ({ navigation }) => {
  const [value, onChangeText] = useState('');

  const submitForm = () => {
    console.log('searching: ', value);
    GetResults(value).then((response) => {
      console.log(response);
      navigation.navigate('Results', { results: response.data });
    });
  };

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image style={styles.image} source={Images.logo} />
      </View>

      <TextInput
        style={{ height: 40, width: 120, borderColor: 'gray', borderWidth: 1 }}
        onChangeText={(text) => onChangeText(text)}
        value={value}
      />

      <View style={styles.buttonContainer}>
        <Button onPress={submitForm} title={'Search'} />
      </View>
    </View>
  );
};

export default SearchScreen;
