import {StyleSheet} from 'react-native';
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    height: 200,
  },
  safeAreaView: {
    backgroundColor: 'white',
    flex: 1,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#e8661b',
    textAlign: 'center',
    marginTop: 10,
    marginBottom: 10,
  },
  list: {
    padding: 10,
  },

  video: {
    flexDirection: 'row',
    marginTop: 15,
    padding: 5,
    marginBottom: 5,
    backgroundColor: '#FFFFFF',
    shadowColor: 'black',
    shadowOpacity: 0.2,
    shadowOffset: {
      height: 1,
      width: -2,
    },
    elevation: 2,
  },
  coursetitle: {
    fontSize: 18,
    color:"#000000",
  },
  coursedet: {
    fontSize: 14,
    color:"#000000",
    marginTop:5
  },
  thumbnail: {
    width: '35%',
    aspectRatio: 16 / 9,
    borderRadius: 5,
  },
  details: {
    padding: 10,
    width: '100%',
  },
  channel: {
    color: '#000',
    fontSize: 15,
  },
});

export {styles};
