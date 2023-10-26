import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginBottom: 10,
  },
  /*active sunscription card section*/
  subCardSection: {
    padding: 7,
    borderRadius: 10,
    backgroundColor: '#f4f4f4',
  },
  subcard: {
    marginHorizontal: 7,
    marginVertical: 1,
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 15,
    justifyContent: 'space-between',
    shadowColor: '#000',
    borderWidth: 0.2,
    borderLeftWidth: 6,
    borderLeftColor: 'green',
  },
  subTitle: {
    fontWeight: 'bold',
    fontSize: 18,
    color: '#000',
    marginVertical: 5,
    marginHorizontal: 10,
  },
  cardInfoContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  cardInfoContainer1: {
    marginTop: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 5,
  },
  cardTitle: {
    fontSize: 18,
    letterSpacing: 2,
    marginBottom: 10,
    marginTop: 10,
    color: '#000',
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

  /*course section*/
  courSection: {
    padding: 7,
  },
  coursecard: {
    marginVertical: 10,
    backgroundColor: 'white',
    flexBasis: '45%',
    marginHorizontal: 10,
    borderRadius: 10,
  },
  cardContent: {
    paddingVertical: 12,
    paddingHorizontal: 10,
    justifyContent: 'space-between',
  },
  cardImage: {
    flex: 1,
    height: 100,
    width: null,
    resizeMode: 'cover',
  },
  imageContainer: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.32,
    shadowRadius: 5.46,
    elevation: 1,
  },
  title: {
    fontSize: 18,
    flex: 1,
    color: 'black',
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 13,
    flex: 1,
    color: 'gray',
    textAlign: 'center'
  },

  /*top enrolled courses*/
  TopEnrolledcourSection: {
    padding: 7,
  },
  TopEnrolledcard: {
    marginLeft: 10,
    marginRight: 10,
  },
  TopEnrolledcardContent: {
    flexDirection: 'column',
    alignItems: 'center',
  },
  productImage: {
    width: 140,
    height: 80,
    margin: 5,
  },
  cardcontent: {
    shadowColor: '#B0C4DE',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 1,
    borderRadius:4.5,
  },
  coursecnt: {
    paddingTop: 5,
    paddingBottom: 15,
  },
  title1: {
    fontSize: 18,
    flex: 1,
    color: 'black',
    textAlign: 'center',
  },

  /*top[ free course section*/
  TopFreecourSection:{
      padding:7,
  },

  /*common component*/
  addButton: {
    position: 'absolute',
    bottom: 5,
    right: 5,
    width: 50,
    height: 50,
    borderRadius: 30,
    backgroundColor: '#e8661b',
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
  titleWithLink: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom:5,
  },
  allBtn: {
    color: 'blue',
    marginVertical: 5,
    marginHorizontal: 2,
  },
});

export default styles;
