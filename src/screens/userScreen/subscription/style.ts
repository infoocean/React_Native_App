import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  subcontainer: {
    flex: 1,
    backgroundColor: '#fff',
  },
  subCard: {
    marginHorizontal: 15,
    marginVertical: 15,
    padding: 7,
    borderRadius: 10,
    backgroundColor: '#f4f4f4',
  },
  subTitle: {
    fontWeight: 'bold',
    fontSize: 18,
    color: '#000',
    marginVertical: 10,
    marginHorizontal: 10,
  },
  subcardContainer: {
    marginHorizontal: 10,
    marginVertical: 10,
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 20,
    justifyContent: 'space-between',
    shadowColor: '#000',
    borderWidth: 1,
    borderColor: '#ddd',
    borderBottomColor: '#ccc',
    borderLeftWidth: 6,
  },
  cardNumber: {
    fontSize: 18,
    letterSpacing: 3,
    marginBottom: 10,
    marginTop: 10,
    color: '#000',
  },
  cardInfoContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  cardInfoItem: {},
  cardInfoLabel: {
    fontSize: 12,
    color: 'gray',
  },
  cardInfoValue: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  logo: {
    width: 50,
    height: 50,
  },
  addButton: {
    position: 'absolute',
    bottom: 20,
    right: 20,
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#6495ED',
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  addButtonText: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#fff',
  },
  menuBox: {
    width: 150,
    height: 150,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 12,
    shadowColor: '#000',
    borderWidth: 1,
    borderColor: '#ddd',
    borderBottomColor: '#ccc',
  },
  icon: {
    width: '100%',
    height: 100,
  },
  info: {
    fontSize: 20,
    color: '#696969',
    marginTop: 10,
    marginBottom: 10,
  },
  coursecontainer: {
    flex: 1,
    backgroundColor: '#fff',
  },
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
});

export default styles;
