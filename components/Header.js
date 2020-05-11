import {StyleSheet, Text ,View } from 'react-native';
import * as React from 'react';


const Header = (props)=>{
  return (
<View style ={Styles.header}>
  <Text style={Styles.write}>
     Welcome to the navigation app!
  </Text>
</View>

  );
}

const Styles =StyleSheet.create({

header: {
    backgroundColor: '#00FFF0',
    height: 60,
    alignItems:'center',
    justifyContent:'center',
    width:'100%'
},
write:{
  color:'#FFF',
  fontSize:20,
  fontWeight:'bold',
  textTransform:'capitalize',
  alignItems:'center'


}

});
export default Header;