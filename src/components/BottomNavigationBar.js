import React, { Component } from 'react'
import { Text, View, StatusBar, Image } from 'react-native'

import CircleIconBtn from './CircleIconBtn'

export default class BottomNavigationBar extends Component {
  render() {
    return (
      <View style={{
          zIndex: 100,
          elevation: 5,
          width: '100%',
          flexDirection: 'row',
          alignItems: 'flex-end'
        }}>
        
        <View style={{
            flex: 1,
            backgroundColor: '#fff',
            height: 70,
            elevation: 10,
            justifyContent: 'center',
            alignItems: 'center',
            borderTopLeftRadius: 10,
            borderBottomLeftRadius: 10
        }}>
        <Image source={require('../../assets/img/home.png')} style={{
            width: 30,
            height: 30
        }}/>
        </View>

        <View style={{
            flex: 1,
            backgroundColor: '#fff',
            height: 70,
            elevation: 10,
            justifyContent: 'center',
            alignItems: 'center',
        }}>

        <Image source={require('../../assets/img/baseline-search-24px.png')} style={{
            width: 30,
            height: 30
        }}/>
        
        </View>

        <View style={{
            flex: 1,
            flexDirection: 'column',
            backgroundColor: '#fff',
            height: 100,
            alignItems: 'center',
            elevation: 10,
            borderTopLeftRadius: 50,
            borderTopRightRadius: 50
        }}>

        <CircleIconBtn style={{flex: 2, }}/>
        <View style={{
            flex: 1.5,
        }}/>

        </View>

        <View style={{
            flex: 1,
            backgroundColor: '#fff',
            height: 70,
            elevation: 10,
            justifyContent: 'center',
            alignItems: 'center',
        }}>

        <Image source={require('../../assets/img/round-notifications_active-24px.png')} style={{
            width: 30,
            height: 30
        }}/>

        </View>

        <View style={{
            flex: 1,
            backgroundColor: '#fff',
            height: 70,
            elevation: 10,
            justifyContent: 'center',
            alignItems: 'center',
            borderTopRightRadius: 10,
            borderBottomRightRadius: 10
        }}>

        <Image source={require('../../assets/img/profile.png')} style={{
            width: 30,
            height: 30
        }}/>

        </View>

      </View>
    )
  }
}