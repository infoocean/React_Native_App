import {StyleSheet} from 'react-native';
export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollView: {
    flex: 1,
    backgroundColor: 'pink',
    alignItems: 'center',
    justifyContent: 'center',
  },

  /*login form design*/
  LoginContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 60,
  },

  pinLoginContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
  },

  Logincard: {
    backgroundColor: '#fff',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 1,
    padding: 20,
    width: '90%',
    alignItems: 'center',
    marginBottom: 10,
  },
  /*Registration Page Design*/
  RegistrationContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  RegistrationlogoContainer: {
    alignItems: 'center',
    marginTop: 5,
  },
  Registrationcard: {
    backgroundColor: '#fff',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 1,
    padding: 20,
    width: '90%',
    alignItems: 'center',
    marginBottom: 60,
  },
  /*common components*/
  logoContainer: {
    alignItems: 'center',
  },
  logo: {
    width: 250,
    height: 120,
    resizeMode: 'contain',
    marginRight: 20,
  },
  maintitle: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#000',
    textAlign: 'center',
  },
  Rmaintitle: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#000',
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 12,
    fontWeight: '500',
    color: '#000',
    textAlign: 'center',
    marginTop: 3,
    marginBottom: 3,
  },
  inputContainer: {
    width: '100%',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    width: '100%',
    marginVertical: 10,
  },
  forgotPasswordButton: {
    width: '100%',
    textAlign: 'flex-start',
  },
  forgotPasswordButtonText: {
    color: '#20B2AA',
    fontSize: 12,
    fontWeight: 'bold',
    textAlign: 'right',
  },
  button: {
    backgroundColor: '#e8661b',
    borderRadius: 5,
    padding: 10,
    marginTop: 10,
    width: '100%',
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  seprator: {
    marginTop: 15,
    marginBottom: 15,
    flexDirection: 'row',
    alignItems: 'center',
  },
  horizantolline: {
    flex: 1,
    height: 1,
    backgroundColor: 'black',
  },
  sepratortext: {width: 40, textAlign: 'center'},
  buttonGPlusStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(25, 118, 210, 0.04)',
    borderWidth: 1,
    borderColor: '#e8661b',
    height: 30,
    borderRadius: 5,
    margin: 5,
  },
  buttonImageIconStyle: {
    padding: 10,
    marginLeft: 10,
    height: 25,
    width: 25,
    resizeMode: 'stretch',
  },
  buttonTextStyle: {
    color: '#000',
    marginBottom: 4,
    marginLeft: 5,
    marginRight: 20,
  },
  createlink: {
    color: '#e8661b',
  },
  createAccountButton: {
    marginTop: 20,
  },
  createAccountButtonText: {
    color: '#20B2AA',
    fontSize: 12,
    fontWeight: 'bold',
  },

  buttons: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    width: 250,
    height: 50,
    borderRadius: 30,
    borderWidth: 0.2,
    borderColor: '#eee',
    borderBottomWidth: 2,
    marginVertical: 20,
    shadowOffset: {width: 0, height: 3},
    shadowOpacity: 0.5,
    shadowRadius: 3,
    elevation: 1,
  },
  infoButton: {
    backgroundColor: '#2196f3',
    borderColor: '#0e3860',
    shadowColor: '#1c5da6',
  },
  passButton: {
    backgroundColor: '#e8661b',
    borderColor: '#b87208',
    shadowColor: '#1c5da6',
  },
  buttonTextnew: {
    fontSize: 15,
    color: '#fff',
    fontWeight: 'bold',
  },
  sepratornew: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  header: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 20,
    paddingBottom: 20,
    width: '100%',
    height: 120,
  },
  heading: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#fff',
  },
});
