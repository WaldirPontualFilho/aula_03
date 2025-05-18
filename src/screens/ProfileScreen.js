import { View, Text, Button } from 'react-native'
import React from 'react'

const ProfileScreen = ( {navigation} ) => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ fontSize: 20, fontWeight: 'bold', marginBottom: 10 }}>👤 Meu Perfil</Text>
      <Text>Nome: Waldir Pontual</Text>
      <Text>Email: waldirp@bol.com.br</Text>
      <Button title="Sair" onPress={() => navigation.replace('Login')}></Button>
    </View>
  )
}

export default ProfileScreen