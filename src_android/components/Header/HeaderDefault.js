import React from 'react';
import { View, StatusBar } from 'react-native';
import { Title, Header, Left, Right, Body } from 'native-base';
import { AntDesign } from '@expo/vector-icons';
import { Actions } from 'react-native-router-flux';

export default class HeaderDefault extends React.Component {
  render() {
    return (
        <View style={{backgroundColor: '#00a8ff'}}>
            <Header style={{backgroundColor: '#00a8ff', marginTop: 20, elevation: 0}}>
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
