import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
  coverImage: {
    height: 230,
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
  },
  avatarContainer: {
    alignItems: 'center',
    marginTop: 20,
  },
  avatar: {
    width: 120,
    height: 120,
    borderRadius: 60,
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 5,
    color: '#FFFFFF',
  },
  role: {
    color: '#FFFFFF',
  },
  content: {
    marginTop: 10,
  },
  infoContainer: {
    marginTop: 25,
  },
  infoLabel: {
    fontWeight: 'bold',
  },
  infoValue: {
    marginTop: 5,
  },
  button: {
    marginTop: 40,
    backgroundColor: '#e8661b',
    borderRadius: 5,
    padding: 10,
  },
  button1: {
    marginTop: 20,
    backgroundColor: '#008ac3',
    borderRadius: 5,
    padding: 10,
  },
  buttonText: {
    fontSize: 16,
    color: '#fff',
    textAlign: 'center',
  },
  avatarContainer1: {
    width: 120,
    height: 120,
    borderRadius: 70,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowRadius: 6,
    shadowOpacity: 0.16,
  },
  avatar1: {
    fontSize: 60,
    fontWeight: '700',
  },
  iconstyle: {
    width: 40,
    height: 40,
    borderRadius: 50,
    backgroundColor: '#008ac3',
    left: 210,
    top: 60,
    position: 'absolute',
  },
  iconstyle1: {
    width: 40,
    height: 40,
    borderRadius: 50,
    backgroundColor: '#008ac3',
    left: 100,
    top: 60,
    position: 'absolute',
  },
});
