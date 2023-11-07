import {StyleSheet} from 'react-native';
const styles = StyleSheet.create({
  safeAreaView: {
    backgroundColor: 'white',
    flex: 1,
  },
  formContent: {
    flexDirection: 'row',
  },
  inputContainer: {
    borderBottomColor: 'lightgray',
    backgroundColor: '#FFFFFF',
    borderBottomWidth: 1,
    height: 32,
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
    margin: 10,
  },
  icon: {
    width: 25,
    height: 25,
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
    height: 33,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
    width: 50,
    alignSelf: 'flex-end',
    backgroundColor: '#e8661b',
    borderRadius: 20,
  },
});
export {styles};
