import {StyleSheet} from 'react-native';
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  list: {
    paddingHorizontal: 10,
  },
  listContainer: {
    alignItems: 'center',
  },
  separator: {
    marginTop: 10,
  },
  /******** card **************/
  card: {
    marginVertical: 10,
    backgroundColor: 'white',
    flexBasis: '45%',
    marginHorizontal: 10,
  },
  cardContent: {
    paddingVertical: 10,
    paddingHorizontal: 10,
    justifyContent: 'space-between',
  },
  cardImage: {
    flex: 1,
    height: 100,
    width: null,
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
  /******** card components **************/
  title: {
    fontSize: 18,
    flex: 1,
    color: 'black',
  },
  subtitle: {
    fontSize: 15,
    flex: 1,
    color: 'gray',
  },
  subTitle: {
    fontWeight: 'bold',
    fontSize: 18,
    color: '#000',
    marginTop: 10,
    marginBottom: 5,
    marginHorizontal: 18,
  },
  addButton: {
    position: 'absolute',
    bottom: 5,
    right: 5,
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
  /*course details*/
  detcontainer: {
    padding: 15,
  },
  dettitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  meta: {
    flexDirection: 'row',
    marginBottom: 15,
  },
  author: {
    fontSize: 14,
    color: '#999',
    marginRight: 10,
  },
  date: {
    fontSize: 14,
    color: '#999',
  },
  image: {
    width: '100%',
    height: 200,
    marginBottom: 15,
  },
  content: {
    fontSize: 14,
    textAlign: 'justify',
  },
  shareButton: {
    marginTop: 15,
    height: 40,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 30,
    backgroundColor: '#e8661b',
  },
  shareButtonText: {
    color: '#FFFFFF',
    fontSize: 18,
  },
  storyContainer: {
    marginTop: 15,
    alignItems: 'center',
  },
  storyImage: {
    width: '100%',
    height: 100,
    marginBottom: 5,
  },
  coursedetbody: {marginTop: 20},
  section: {
    marginBottom: 16,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: '600',
  },
  sectionContent: {
    marginTop: 8,
  },
  sectionItem: {
    marginVertical: 4,
  },
  sectionItemTitle: {
    fontSize: 14,
    fontWeight: '600',
  },
  sectionItemDesc: {
    fontSize: 14,
    color: 'gray',
  },
  detlistItem: {
    justifyContent: 'space-between',
    padding: 10,
    marginVertical: 5,
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#ddd',
  },
  relatedPostContainer: {
    flexDirection: 'row',
    marginTop: 10,
  },
  relatedPostImage: {
    width: 70,
    height: 50,
  },
  relatedPostTitle: {
    fontSize: 16,
    marginLeft: 10,
  },
  accordionContainer: {},
  titleContainer: {
    backgroundColor: '#f2f2f2',
    borderRadius: 5,
    marginBottom: 5,
  },
  contentContainer: {
    backgroundColor: '#f9f9f9',
    borderRadius: 5,
    marginBottom: 5,
  },
  sectionImage: {
    marginTop: 20,
    width: '100%',
    height: 200,
    borderRadius: 6,
  },
  pricingOption: {
    margin: 20,
    padding: 20,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
  },
  pricingOptionTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  pricingOptionPrice: {
    fontSize: 18,
    color: '#333',
    marginBottom: 10,
  },
  pricingOptionDescription: {
    fontSize: 14,
    color: '#666',
    marginBottom: 10,
  },
  pricingOptionFeatures: {
    marginBottom: 10,
  },
  pricingOptionFeature: {
    fontSize: 14,
    color: '#999',
  },
  pricingOptionButtonContainer: {
    backgroundColor: '#00BFFF',
    borderRadius: 5,
  },
  pricingOptionButton: {
    fontSize: 14,
    color: '#fff',
    padding: 10,
  },
  carde: {
    shadowColor: '#B0C4DE',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 1,
    margin: 10,
    backgroundColor: '#fff',
    borderRadius: 10,
  },
  cardContente: {
    flexDirection: 'column',
    alignItems: 'center',
    padding: 10,
  },
  productImage: {
    width: 100,
    height: 100,
    margin: 10,
  },
  productName: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  productPrice: {
    fontSize: 16,
    color: '#888',
  },
  cardActions: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10,
  },
  button: {
    backgroundColor: '#eee',
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: '#000',
    fontSize: 16,
  },
  imagesContent:{}
});

export default styles;
