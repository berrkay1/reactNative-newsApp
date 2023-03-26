import {StyleSheet} from 'react-native';

export default styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },

  cardContainer:{
    borderColor:'black',
    borderWidth:1,
    backgroundColor:"white",
    padding:10,
    margin:10,
    borderRadius:5
  },

  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  desc: {
    fontSize: 16,
  },

  btn: {
   
    backgroundColor: 'aqua',
    marginTop:20,
    padding:10,
  },

  btnText:{
    color: '#fff',
    fontSize: 22,
    padding:5,
    textAlign: 'center',
    borderBottomRightRadius:10,
    borderBottomLeftRadius:10
  }
});
