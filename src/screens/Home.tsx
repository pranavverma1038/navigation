import { StyleSheet, Text, Button,View } from 'react-native'
import React from 'react'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { RootStackParams } from '../App'

type HomeProps = NativeStackScreenProps<RootStackParams,'Home'>

export default function home({navigation}:HomeProps) {
  return (
    <View style={styles.conatiner}>
        <Text style={styles.smallerText}>Home Screen</Text>
        <Button
        title="Go To Deatils"
        onPress = {() => navigation.navigate('Details',{
            productId:"24"
        })}
        ></Button>
    </View>
  )
}

const styles = StyleSheet.create({
    conatiner:{
        flex:1,
        alignItems:'center',
        justifyContent:'center',
    },
    smallerText:{
        color:'black',
    }
})