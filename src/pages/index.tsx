import React from 'react'
import { Text, View } from 'react-native'


export const Home:React.FC = ()=>{
  return <View style={{
    flex:1,
    justifyContent:"center",
    alignItems:"center",
    backgroundColor:"#fff"
  }}>
    <Text>Olá mundo</Text>
  </View>
}