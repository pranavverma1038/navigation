import { StyleSheet, Text, View, Button} from 'react-native'
import React from 'react'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { RootStackParams } from '../App'
import { useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'


type DetailsProps = NativeStackScreenProps<RootStackParams,'Details'>

export default function Details({route}: DetailsProps) {
    const { productId } = route.params
    const navigation = useNavigation<NativeStackNavigationProp<RootStackParams>>()

  return (
    <View style={styles.conatiner}>
      <Text style={styles.smallerText}>Details: {productId} </Text>
      <Button
      title='Go To Home'
      onPress={()=>navigation.popToTop()}
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