import {StyleSheet} from 'react-native';
const styles = StyleSheet.create({
  safeAreaView: {
    backgroundColor: 'white',
    flex: 1,
  },
  howitworkscontainer: {
    marginBottom: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#e8661b',
    textAlign: 'center',
  },
  iconcontainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoContainer: {
    overflow: 'hidden',
    marginBottom: 40,
    margin: 10,
  },
  logo: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  subtitle: {
    fontSize: 12,
    fontWeight: 'bold',
    marginTop: 8,
    textAlign: 'center',
    color: 'black',
  },
  topenrolledcourses: {},
  container: {
    flex: 1,
    marginTop: 10,
  },
  section: {
    paddingHorizontal: 16,
    marginVertical: 5,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 15,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '800',
    color: 'black',
  },
  seeAllButton: {
    backgroundColor: 'lightgray',
    padding: 5,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 4,
  },
  seeAllButtonText: {
    color: 'black',
  },
  sectionBody: {
    marginTop: 10,
  },
  sectionScroll: {
    paddingBottom: 10,
  },
  sectionCard: {
    width: 200,
    minHeight: 200,
    backgroundColor: '#fff',
    shadowColor: '#B0C4DE',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 1,
    margin: 10,
    borderRadius: 6,
  },
  sectionImage: {
    width: '100%',
    aspectRatio: 1,
  },
  sectionInfo: {
    padding: 10,
  },
  sectionLabel: {
    fontSize: 12,
    marginBottom: 2,
    textAlign: 'center',
    color: 'black',
  },
});

export {styles};
