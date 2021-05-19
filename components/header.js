import React, { Component} from 'react';
import { Header,Icon,Badge } from 'react-native-elements';
import { View, Text, StyeSheet, Alert, Image} from 'react-native';

export default class Header extends Component{
  constructor(props){
    super(props)
    this.state={
      value:""
    }
  }

    render(){
    return(
        <Header
        //   leftComponent={<Image source = {require("../assets/menu.png")} onPress={() => this.props.navigation.toggleDrawer()}/>}
          centerComponent={{ text: this.props.title, style: { color: '#d5ffff', fontSize:1,fontWeight:"bold", } }}
          backgroundColor = "d5ffff"
        />

)
}

}