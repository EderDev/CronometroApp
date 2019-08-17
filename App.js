import React, {Component} from 'react'
import {View, StyleSheet, Image, Text, TouchableOpacity} from 'react-native'

export default class CronometroApp extends Component{
  constructor(props){
    super(props)
    this.state = {n:0, botao:'Iniciar'}
    this.timer = null

    this.iniciar = this.iniciar.bind(this)
    this.limpar = this.limpar.bind(this)
  }

  iniciar(){
    let s = this.state
    if(this.timer != null){
      //Parar o timer
      clearInterval(this.timer)
      this.timer = null
      s.botao = 'Iniciar'
    }else{
      //Começar o timer
      this.timer = setInterval(() => {
        let s = this.state
        s.n += 0.1
        this.setState(s)
      }, 100)

      s.botao = 'Parar'
    }
    this.setState(s)
  }

  limpar(){
    if(this.timer != null){
      //Parar o timer
      clearInterval(this.timer)
      this.timer = null
    }
    let s = this.state
    s.n = 0
    s.botao = 'Iniciar'
    this.setState(s)
  }
  
  render(){
    return(
      <View style={styles.body}>
        <Image source={require('./images/relogio.png')} />
        <Text style={styles.timer}>{this.state.n.toFixed(1)}</Text>
        <View style={styles.botaoArea}>
          <TouchableOpacity style={styles.botao} onPress={this.iniciar}>
            <Text style={styles.botaoText}>{this.state.botao}</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.botao} onPress={this.limpar}>
            <Text style={styles.botaoText}>Limpar</Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  body:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'#2c1f30'
  },
  timer:{
    color:'#baa07a',
    fontSize:80,
    fontWeight:'bold',
    backgroundColor:'transparent',
    marginTop:-160
  },
  botaoArea:{
    flexDirection:'row',
    height:40,
    marginTop:80
  },
  botao:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'#886532',
    height:40,
    borderRadius:5,
    margin:10,
  },
  botaoText:{
    fontSize:17,
    fontWeight:'bold',
    color:'#FFF'
  }
})
