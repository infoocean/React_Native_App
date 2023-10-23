import {StyleSheet} from 'react-native';
const styles = StyleSheet.create({
  safeAreaView: {
    backgroundColor: '#ebf0f7',
    flex: 1,
  },
  formContent: {
    flexDirection: 'row',
    marginTop: 5,
  },
  inputContainer: {
    borderBottomColor: '#F5FCFF',
    backgroundColor: '#FFFFFF',
    borderRadius: 30,
    borderBottomWidth: 1,
    height: 40,
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
    margin: 10,
  },
  icon: {
    width: 26,
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
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
    width: 60,
    alignSelf: 'flex-end',
    backgroundColor: '#e8661b',
    borderRadius: 20,
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

  subscontainer: {
    flex: 1,
    marginTop: 10,
  },
  subscCard: {
    marginBottom: 10,
    padding: 10,
    backgroundColor: '#fff',
    borderRadius: 5,
  },
  subscHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 2,
    justifyContent:'space-between',
  },
  userimg:{
    flexDirection: 'row',
    alignItems: 'center',
  },
  postAvatar: {
    width: 25,
    height: 25,
    marginRight: 5,
    borderRadius: 15,
  },
  planename: {
    flex: 1,
    fontSize: 15,
    fontWeight: '500',
    color: '#000',
  },
  IssuDate: {
    fontSize: 12,
    color: '#A9A9A9',
  },
  subscPrice: {
    fontSize: 12,
    color: '#00008B',
    marginBottom: 5,
  },
  postImage: {
    marginTop: 10,
    width: '100%',
    height: 200,
  },
  Username: {
    fontSize: 12,
    fontWeight: '400',
    color: 'gray',
  },
  postFooter: {
    flexDirection: 'row',
  },
  postButton: {
    marginRight: 10,
    marginTop: 1,
  },
  poststatus: {
    color: 'green',
  },
  poststatusText: {
    color: '#808080',
    fontSize: 10,
  },
});

export {styles};
