import React,{useEffect,useState,useCallback,useRef}from 'react';
import { View, StyleSheet, Text, Button,FlatList,TouchableOpacity} from 'react-native';

const Home = (props) => {
  const [listData, setData] = useState([]);
  const offsetCount = useRef()

  const ApiCall = () => {
        // console.log(`https://pokeapi.co/api/v2/pokemon//?offset=${20*offsetCount.current}&limit=20`)
        fetch(`https://pokeapi.co/api/v2/pokemon/?offset=${20*offsetCount.current}&limit=20`)
            .then(response => response.json())
            .then(data => setData([...listData,...data.results]))
            .then(data => {
                if(data.results.length >0){
                    offsetCount.current = offsetCount.current +1;
                }
            })
            .catch(err => console.log(err));
        
        // offsetCount.current = offsetCount.current +1;
        console.log(listData)
  }

  useEffect(() => {
    offsetCount.current = 1;
    ApiCall();
  },[])

  const ListItem = ({item}) => {
    return(
        <View style={{marginVertical:'5%'}}>
            <Text>{item.name}</Text>
        </View>
    )
  }

  return (
    <View style={styles.container}>
        <FlatList 
            renderItem={ListItem}
            data = {listData}
            style={{flexGrow:0,height:'100%'}}
            onEndReachedThreshold={0}
            onEndReached={() => {ApiCall()}}
            keyExtractor={(item,key) => key}/>
    </View>
  )
}

export default Home;

const styles = StyleSheet.create({
    container : {
        height:'100%',
        width:'100%',
        display:'flex',
        flexDirection:'row',
    },
})