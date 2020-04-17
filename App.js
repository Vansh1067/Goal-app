import React,{useState} from 'react';
import { StyleSheet, Text, View, Button, FlatList, TextInput, TouchableOpacity } from 'react-native';

import Header from './component/Header'
import AddNew from './component/addnewGoal';

export default function App() {
  const [visible,setvisible]=useState(false);
  const [listItem,setListItem]=useState([])
  //console.log(listItem)
  const removeHandler=id=>{
  setListItem(listItem.filter(item=>item.id!==id))
  }
  const AddListHandler=value=>{
    setListItem([...listItem,value])
  }

  
  return (

    <View style={styles.container}>
    <Header></Header>
    <AddNew onChange={AddListHandler}visible={visible} visiblity={setvisible}></AddNew>
      <View style={styles.btn}><Button title="ADD GOAL" onPress={()=>{setvisible(true)}}></Button></View>
      <View><Text>{listItem.id}</Text></View>
  <FlatList data={listItem}  style={styles.listCont} keyExtractor={(item,index)=>item.id.toString()}
   renderItem={(itemData)=><TouchableOpacity   onPress={()=>{removeHandler(itemData.item.id)}}>
     <View style={styles.list}><Text style={styles.listItem}>{itemData.item.value}</Text></View>
     </TouchableOpacity>}>
      
     </FlatList>
       
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor:'pink',
    flex:1,
   alignItems: 'center',
    justifyContent: 'center',
    width:'100%'
  },
  btn:{
    width:'90%'
  },
  listCont:{
    width:'80%'
  },
  list:{
    width:'100%',
    borderColor:'black',
    borderWidth:1,
    backgroundColor:'#ccc',
    marginVertical:10
  },
  listItem:{
    fontSize:20,
    padding:5
  }
});
