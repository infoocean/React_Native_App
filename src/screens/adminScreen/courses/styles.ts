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
  coursecontainer: {
    flex: 1,
    marginTop: 10,
  },
  list: {
    paddingHorizontal: 5,
    backgroundColor: '#E6E6E6',
  },
  listContainer: {
    alignItems: 'center',
  },
  /******** card **************/
  card: {
    marginVertical: 12,
    backgroundColor: 'white',
    flexBasis: '47%',
    marginHorizontal: 7,
    borderRadius: 5,
  },
  cardImage: {
    flex: 1,
    height: 80,
    width: '100%',
  },
  cardHeader: {
    paddingHorizontal: 10,
    paddingVertical: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  coursenamesec: {},
  title: {
    fontSize: 15,
    flex: 1,
  },
  price: {
    fontSize: 10,
    color: 'green',
    marginTop: 2,
  },
  cardFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingBottom: 5,
  },
  sessionBarContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    flex: 1,
  },
  sessionBarSection: {
    justifyContent: 'center',
    flexDirection: 'row',
    flex: 1,
  },
  sessionBar: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  footertitle: {
    color: '#000',
    fontSize: 10,
    marginLeft: 5,
  },
  /*module section design*/
  Modulebox: {
    padding: 10,
    marginTop: 5,
    marginBottom: 5,
    backgroundColor: 'white',
    flexDirection: 'row',
  },
  modimage: {
    width: 75,
    height: 75,
  },
  ModboxContent: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'flex-start',
    marginLeft: 10,
  },
  Modtitle: {
    fontSize: 15,
    color: '#000',
    fontWeight: '500',
  },
  modCoursename: {
    fontSize: 12,
    color: 'gray',
  },
  modSessions: {
    fontSize: 10,
    color: 'blue',
  },
  modiconsSec: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 5,
    marginTop: 2,
  },
  iconbtnview: {
    backgroundColor: '#eee',
    paddingHorizontal: 4,
    borderWidth: 0.2,
    borderColor: '#e8661b',
    borderRadius: 1.5,
  },
  modviewbtn: {
    color: '#e8661b',
  },
  iconbtedit: {
    backgroundColor: '#eee',
    paddingHorizontal: 6,
    paddingVertical: 2.5,
    borderWidth: 0.2,
    borderColor: '#2e7d32',
    borderRadius:1.5,
    marginLeft: 15,
  },
  modeditbtn: {
    color: '#2e7d32',
  },
  iconbtdelete: {
    backgroundColor: '#eee',
    paddingHorizontal: 6,
    paddingVertical: 2.5,
    borderWidth: 0.2,
    borderColor: 'red',
    borderRadius:1.5,
    marginLeft: 15,
  },
  modedeletebtn: {
    color: '#d32f2f',
  },
});

export {styles};
