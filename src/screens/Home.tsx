import { StyleSheet, Text, Button,View,FlatList, Pressable } from 'react-native'
import React from 'react'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { RootStackParams } from '../App'
import ProductItem from '../components/ProductItem'
import Saparator from '../components/Saparator'
import { PRODUCTS_LIST } from '../data/constants'

type HomeProps = NativeStackScreenProps<RootStackParams,'Home'>

export default function Home({navigation}:HomeProps) {
  return (
    <View style={styles.container}>
        <FlatList
            data={PRODUCTS_LIST}
            keyExtractor={item=>item.id}
            ItemSeparatorComponent={Saparator}
            renderItem={({item})=>(
                <Pressable
                    onPress={()=> {
                        navigation.navigate('Details',{
                            product:item
                        })
                    }}
                >
                <ProductItem product={item}/>
                </Pressable>
            )}
            
        />
        
        
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
    flex: 1,
    alignItems: 'flex-start',
    justifyContent: 'center',

    padding: 12,
    backgroundColor: '#FFFFFF',
  },
})