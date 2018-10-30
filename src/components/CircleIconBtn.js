import React, {Component} from 'react';
import {View, Text, TouchableWithoutFeedback, Image} from 'react-native';


export default class CircleIconBtn extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <TouchableWithoutFeedback onPress={this.props.onClick}>
                <View style={{
                    width: 70,
                    height: 70,
                    backgroundColor: "#fff",
                    borderRadius: 50,
                    elevation: 5,
                    alignItems: 'center',
                    justifyContent: 'center',
                }}>

                <Image source={require('../../assets/img/round-add-24px.png')} style={{
                            width: 40,
                            height: 40
                        }}/>

                </View>

            </TouchableWithoutFeedback>
        );
    }
}
