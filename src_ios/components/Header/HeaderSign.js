import React from 'react';
import { View, StatusBar } from 'react-native';
import { Title, Header, Left, Right, Body } from 'native-base';
import { AntDesign } from '@expo/vector-icons';
import { Actions } from 'react-native-router-flux';

export default class HeaderSign extends React.Component {
  render() {
    return (
        <View>
            <Header style={{backgroundColor: '#00a8ff'}}>
                <Left>
                    <AntDesign color={'#fff'} name="back" size={25} onPress={() => Actions.pop()}/>
                </Left>
                <Body>
                    <Title style={{color: '#fff', fontFamily: 'OpenSans-Regular'}}>{this.props.title}</Title>
                </Body>
                <Right />
            </Header>
            <StatusBar barStyle="light-content" />
        </View>
    );
  }
}
