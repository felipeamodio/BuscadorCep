import React, {useState} from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, SafeAreaView } from 'react-native';
import api from './src/services/api';

export default function App() {
  const [cep, setCep] = useState('');

  return (
    <SafeAreaView style={styles.container}>
      <View style={{alignItems: 'center'}}>
        <Text style={styles.title}>Digite o CEP desejado:</Text>
        <TextInput 
          style={styles.input}
          placeholder="Ex: 12345-678"
          value={cep}
          onChangeText={(text) => setCep(text)}
          keyboardType="numeric"
        />
      </View>
      <View style={styles.areabtn}>
        <TouchableOpacity style={styles.botaoLimpar }>
          <Text style={styles.botaoText}>LIMPAR</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.botaoBuscar}>
          <Text style={styles.botaoText}>BUSCAR</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.resultado}>
        <Text style={styles.itemText}>CEP: 07123090</Text>
        <Text style={styles.itemText}>Logradouro: Rua teste</Text>
        <Text style={styles.itemText}>Bairro: Centro</Text>
        <Text style={styles.itemText}>Cidade: São Paulo</Text>
        <Text style={styles.itemText}>UF: SP</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  title: {
    marginTop: 25,
    marginBottom: 15,
    fontSize: 25,
    fontWeight: 'bold',
    color: '#A9A9DD'
  },
  input: {
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#A9A9A9',
    borderRadius: 5,
    width: '90%',
    height: 34,
    padding: 10,
    fontSize: 18
  },
  areabtn: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 25,
    justifyContent: 'space-around'
  },
  botaoBuscar: {
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 15,
    borderRadius: 5,
    backgroundColor: '#1D75CD'
  },
  botaoLimpar: {
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 15,
    borderRadius: 5,
    backgroundColor: '#CD3E1D'
  },
  botaoText: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#FFFFFF'
  },
  resultado: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  itemText: {
    fontSize: 22,
    fontWeight: '700'
  }
});
