import { View, Text } from 'react-native'
import { Link } from 'expo-router'
import React from 'react'

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
      }}>

      <Text className="font-bold text-lg my-10 font-source-sans text-3xl">Index</Text>
      <Link href="/welcome">Welcome</Link>
    </View>
  )
}