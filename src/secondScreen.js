import React from 'react';
import {View,StyleSheet,Text, Button} from 'react-native'

const SecondScreen = (props) => {
    const {name,url} = props.route.params
  return (
    <View style={styles.container}>
        <Text>{JSON.stringify(name)}</Text>
        <Text>{JSON.stringify(url)}</Text>
    </View>
  ) 
}

export default SecondScreen;

const styles = new StyleSheet.create({
    container : {
        flex:1,
        display:'flex',
        flexDirection:'column',
        justifyContent:'center',
        alignItems:'center',
    },

    
})