import React, {useState, useRef} from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, SafeAreaView, Keyboard } from 'react-native';
import api from './src/services/api';

export default function App() {
  const [cep, setCep] = useState('');
  const [cepUser, setCepUser] = useState(null);

  //referenciando o cursor no input quando clicar em limpar
  const inputRef = useRef(null);

  //função para limpar
  function limpar(){
    setCep('');
    inputRef.current.focus();
  }

  async function buscar(){
    if(cep == ''){
      alert('Digite um CEP válido')
      setCep('');
      return; //se não passar o return ele vai continuar passando pra baixo
    }
    try{
      const response = await api.get(`/${cep}/json`);
      setCepUser(response.data)
      Keyboard.dismiss();
    }catch(error){
      console.log('ERROR: ' + error);
    }
  }

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
          ref={inputRef}
        />
      </View>
      <View style={styles.areabtn}>
        <TouchableOpacity style={styles.botaoLimpar} activeOpacity={0.7} onPress={limpar}>
          <Text style={styles.botaoText}>LIMPAR</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.botaoBuscar} activeOpacity={0.7} onPress={buscar}>
          <Text style={styles.botaoText}>BUSCAR</Text>
        </TouchableOpacity>
      </View>

    {cepUser && 
      <View style={styles.resultado}>
        <Text style={styles.itemText}>CEP: {cepUser.cep}</Text>
        <Text style={styles.itemText}>Logradouro: {cepUser.logradouro}</Text>
        <Text style={styles.itemText}>Bairro: {cepUser.bairro}</Text>
        <Text style={styles.itemText}>Cidade: {cepUser.localidade}</Text>
        <Text style={styles.itemText}>UF: {cepUser.uf}</Text>
      </View>
    }
      
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
