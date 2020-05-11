import {StyleSheet, Text ,View } from 'react-native';
import * as React from 'react';

const Footer =(props)=>{
    return(
    <View style={styles.foot}> 
        <Text styles={styles.write}>{props.title}
        ©Michal Stemplewski
        </Text>
    </View>
    )
}
const styles= StyleSheet.create({
    foot:{
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
export default Footer;