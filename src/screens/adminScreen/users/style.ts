import {StyleSheet} from 'react-native';
const styles = StyleSheet.create({
  safeAreaView: {
    backgroundColor: '#ebf0f7',
    flex: 1,
  },
  formContent: {
    flexDirection: 'row',
    marginTop: 2,
  },
  inputContainer: {
    borderBottomColor: '#F5FCFF',
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    borderBottomWidth: 1,
    height: 30,
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
    margin: 10,
  },
  icon: {
    width: 25,
    height: 26,
  },
  iconBtnSearch: {
    alignSelf: 'center',
  },
  inputs: {
    height: 45,
    marginLeft: 10,
    borderBottomColor: '#FFFFFF',
    flex: 1,
  },
  inputIcon: {
    marginLeft: 15,
    justifyContent: 'center',
  },
  filterButton: {
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
    width: 60,
    alignSelf: 'flex-end',
    backgroundColor: '#e8661b',
    borderRadius: 20,
  },

  usersSec: {
    backgroundColor: 'white',
    marginRight: 10,
    marginTop: 10,
    marginLeft: 10,
  },
  userSecContainers: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: 'lightgray',
  },
  images: {
    width: 40,
    height: 40,
    borderRadius: 24,
  },
  textContainer: {
    marginLeft: 10,
  },
  nameText: {
    fontSize: 15,
    fontWeight: 'bold',
  },
  phoneText: {
    fontSize: 10,
    color: '#999',
  },
  UseritemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 5,
    marginTop: 5,
    borderBottomColor: 'gray',
    borderBottomWidth: 0.5,
  },
  userimage: {
    width: 50,
    height: 50,
    borderRadius: 50,
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
  userrole: {
    fontSize: 8,
    color: '#888',
  },
  removeButton: {
    alignItems: 'center',
    marginRight: 1,
  },
  heading: {
    fontWeight: '500',
    color: '#000',
  },
  paginationsec: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginLeft: 12,
    marginRight: 8,
  },
  prev: {
    color: '#000',
    fontWeight: '500',
  },
  next: {
    color: '#0409ab',
    fontWeight: '500',
    marginLeft: 30,
  },
});

export {styles};
