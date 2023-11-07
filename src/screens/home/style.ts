import {StyleSheet} from 'react-native';
const styles = StyleSheet.create({
  safeAreaView: {
    backgroundColor: '#FAFAFA',
    flex: 1,
  },
  /*how it works style*/
  howitworkscontainer: {
    marginBottom: 30,
    marginTop:10
  },
  Iconcircle: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    marginTop: 30,
  },
  iconarticle1: {
    position: 'relative',
    borderRadius: 150,
    backgroundColor: '#e8eaed',
    width: 110,
    height: 110,
    justifyContent: 'space-evenly',
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconarcircle2: {
    position: 'relative',
    borderRadius: 50,
    backgroundColor: '#000',
    width: 70,
    height: 70,
    justifyContent: 'space-evenly',
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconarcircle3: {
    borderRadius: 50,
    backgroundColor: '#fff',
    width: 30,
    height: 30,
    justifyContent: 'space-evenly',
    flexDirection: 'row',
    alignItems: 'center',
  },
  subtitle: {
    fontSize: 12,
    fontWeight: 'bold',
    marginTop: 8,
    textAlign: 'center',
    color: 'black',
  },
  /*top enrolled courses style*/
  topenrolledcoursesContainer: {
    marginTop: 1,
  },
  topenrolledcoursesSection: {
    paddingHorizontal: 10,
  },
  sectionCard: {
    width: 80,
    minHeight: 125,
    backgroundColor: 'white',
    shadowColor: 'gray',
    shadowRadius: 2,
    elevation: 2,
    marginTop: 15,
    marginRight: 15,
    marginBottom: 15,
  },
  sectionImage: {
    width: '100%',
    aspectRatio: 1,
  },
  courseInfo: {
    marginTop:5,
    marginBottom:0,
    paddingBottom:0
  },
  courseTirle: {
    fontSize: 13,
    marginBottom: 2,
    textAlign: 'center',
    color: 'black',
  },
  courseType: {
    fontSize: 9,
    textAlign: 'center',
    color: 'gray',
    marginBottom:0,
    paddingBottom:0
  },
});
export {styles};
