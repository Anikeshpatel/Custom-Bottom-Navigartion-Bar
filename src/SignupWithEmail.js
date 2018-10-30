import React, {Component} from 'react';
import {View, Text, TextInput, TouchableNativeFeedback} from 'react-native';

import LoginArrow from "./components/LoginArrow";
import CircleIconBtn from "./components/CircleIconBtn";

export default class SignupWithEmail extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <View style={{
                flexDirection: "row",
                height: "100%",
                flex: 1
            }}>
                <View style={{
                    flex: 8,
                    marginBottom: 20,
                    backgroundColor: "#fff",
                    borderTopLeftRadius: 0,
                    borderBottomLeftRadius: 0,
                    borderRadius: 20,
                    elevation: 5,
                    alignItems: "center",
                    paddingTop: 50
                }}>
                    <Text style={{
                        fontSize: 30
                    }}>
                        Signup
                    </Text>

                    <View style={{
                        marginTop: 50,
                        width: "100%",
                        paddingLeft: 30,
                        paddingRight: 30
                    }}>
                        <TextInput
                            placeholder="Email or Username"
                            style={{
                                width: "100%",
                                borderWidth: 2,
                                borderColor: "#03A9F4",
                                borderRadius: 10,
                                paddingLeft: 10,
                                marginBottom: 20
                            }}
                            placeholderTextColor="rgba(0,0,0,.2)"
                        />
                        <TextInput
                            placeholder="Password"
                            style={{
                                width: "100%",
                                borderWidth: 1,
                                borderColor: "#03A9F4",
                                borderRadius: 10,
                                paddingLeft: 10,
                                marginBottom: 50
                            }}
                            placeholderTextColor="rgba(0,0,0,.2)"
                        />

                        <TouchableNativeFeedback>
                            <View style={{
                                backgroundColor: "#03A9F4",
                                height: 50,
                                borderRadius: 50,
                                justifyContent: "center",
                                marginLeft: 20,
                                marginRight: 20
                            }}>
                                <Text style={{
                                    fontSize: 20,
                                    textAlign: "center",
                                    color: "#fff"
                                }}>
                                    Signup
                                </Text>
                            </View>
                        </TouchableNativeFeedback>
                    </View>
                </View>

                <View style={{
                    flex: 0.3,
                    paddingTop: 30
                }}>
                    <LoginArrow/>
                </View>

                <View style={{
                    flex: 1.8,
                    alignItems: "center",
                    paddingTop: 30
                }}>
                    <CircleIconBtn onClick={() => this.props.onFragmentChange(0)}/>
                    <CircleIconBtn/>
                    <CircleIconBtn onClick={() => this.props.onFragmentChange(2)}/>
                    <CircleIconBtn/>
                    <CircleIconBtn/>
                </View>
            </View>
        );
    }
}
