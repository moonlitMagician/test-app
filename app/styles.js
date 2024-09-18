// styles.js
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "red"
  },

  shakeDisplaybox: {
    alignItems: "center",
    borderWidth: 1,
    marginTop: 10,
    marginHorizontal: 10,
    marginBottom: 10,
    borderRadius: 10
  },
  
  textMainHeader: {
    textAlign: "center",
    fontSize: 45
  },

  textHeader:{
    textAlign: "center",
    fontSize: 20  
  },

  button: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,
    width: 100,
    height: 50,
    marginBottom: 10
  },

  shakeImage: {
    width: '10%',
    height: 100, 
    resizeMode: 'contain',
    borderRadius: 8,
    marginTop: 10,
    marginBottom: 10,
  },
});

export default styles;  