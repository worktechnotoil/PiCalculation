/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

 import React, { useState } from 'react';
import {SafeAreaView,ScrollView,StatusBar,StyleSheet,Text,TextInput,TouchableOpacity,useColorScheme,View} from 'react-native';
import { NativeModules,ActivityIndicator,Alert} from 'react-native'
import validator from 'validator';

const App = () => {

  const [text, setText] = useState('')
  const [result, setResult] = useState('')
  const [loader, setloader] = useState(false)

  return (
    
     <SafeAreaView> 

       
     {loader?<ActivityIndicator style={{marginTop:'40%'}} animating={true} color="#0000ff" size='small'/>:
      <View>
       <View style={{marginLeft:10,marginRight:10,marginTop:10,height:20}}>
         <Text>Decimal Number</Text>
      </View>

      <View style={{marginLeft:10,marginRight:10,
      marginTop:10,marginBottom:10,
      borderColor:'gray',borderWidth:1,
      height:40,borderRadius:5,
      paddingLeft:10,paddingRight:10,alignContent:'center',justifyContent:'center'}}>
        <TextInput 
        placeholder = "Enter number" 
        value={text}
        keyboardType='numeric'
        onChangeText={text =>setText(text)} 
        
        />
        
      </View>
       <TouchableOpacity onPress={() => {
         setResult("")
         setloader(true)
         
         if(parseInt(text, 10) == 0)
         {
          setloader(false)
           alert('Please Enter valid number')
           
         }
         else
         {
          NativeModules.Calculation.getCalculation(text,(value) => {
            console.log("count is " + value)
            setResult(value)
            setloader(false)
              }) 
          
           
         }
                
          
        
     
    }}>
    <View style={{backgroundColor:'green',
    marginLeft:10,marginRight:10,
    marginBottom:0,height:40,justifyContent:'center',flexDirection:'row',alignItems:'center',borderRadius:5}}>
  
    <Text>Submit</Text>
    </View>
    </TouchableOpacity>

    <ScrollView> 
     <View style={{marginTop:10,marginLeft:10,marginRight:10,marginBottom:0}}>
      <Text>{result}</Text>

      </View>
      </ScrollView> 
      </View>
     }
    

    </SafeAreaView>
  
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center"
  },
 
});

export default App;
