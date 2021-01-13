import { StyleSheet } from 'react-native';
import { Sizes, RelativeSizes } from '../../theme';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  buttonContainer: {
    alignItems: 'center',
    width: 150,
  },
  button: {
    width: '100%',
    borderWidth: 1,
    borderColor: '#0000000B',
  },
  imageContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 50,
    height: '50%',
  },
  image: {
    //resizeMode: 'cover',
    width: 180,
    height: '50%',
  },
});

export default styles;
