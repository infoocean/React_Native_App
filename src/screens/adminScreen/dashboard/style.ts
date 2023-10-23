import {StyleSheet} from 'react-native';
const styles = StyleSheet.create({
  safeAreaView: {
    backgroundColor: '#ebf0f7',
    flex: 1,
  },
  card: {
    shadowColor: '#00000021',
    shadowOffset: {
      width: 0,
      height: 6,
    },
    borderLeftWidth: 3,
    shadowOpacity: 0.37,
    shadowRadius: 7.49,
    elevation: 1,
    marginLeft: 10,
    marginRight: 10,
    marginTop: 15,
    backgroundColor: 'white',
    padding: 10,
    flexDirection: 'row',
    borderRadius: 10,
  },
  cardContent: {
    marginLeft: 20,
    marginTop: 5,
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 45,
    borderWidth: 2,
    borderColor: '#ebf0f7',
  },

  usercardLeftWith: {
    borderLeftColor: '#ffa500',
  },
  coursecardLeftWith: {
    borderLeftColor: '#3498db',
  },
  earningcardLeftWith: {
    borderLeftColor: '#07bc0c',
  },
  subscriptioncardLeftWith: {
    borderLeftColor: '#5856d6',
  },
  name: {
    fontSize: 18,
    flex: 1,
    alignSelf: 'center',
    color: '#000',
    fontWeight: 'bold',
  },
  count: {
    fontSize: 14,
    flex: 1,
    //alignSelf: 'center',
    color: '#000',
    fontWeight: 'bold',
  },
  subCard: {
    marginHorizontal: 10,
    marginVertical: 5,
    padding: 7,
    borderRadius: 10,
    marginTop: 10,
    backgroundColor: '#f4f4f4',
  },
  titleWithLink: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  allBtn: {
    fontWeight: 'bold',
    fontSize: 18,
    color: 'blue',
    marginRight: 5,
  },
  subTitle: {
    fontWeight: 'bold',
    fontSize: 18,
    color: '#000',
  },

  UseritemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 8,
    marginTop: 12,
    shadowColor: '#cccccc',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 10,
    backgroundColor: '#fff',
    marginBottom: 5,
    marginLeft: 4,
  },
  userimage: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  subscimage: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  infoContainer: {
    marginLeft: 10,
    flex: 1,
  },
  username: {
    fontSize: 14,
    color: '#000',
  },
  useremail: {
    fontSize: 10,
    color: '#888',
  },
  removeButton: {
    alignItems: 'center',
  },
});

export {styles};
