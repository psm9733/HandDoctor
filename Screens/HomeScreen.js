import React, {Component} from 'react';
import { Text, View, TouchableHighlight, StyleSheet } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import { Camera, Permissions } from 'expo';

class HomeScreen extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            buttons:[
                {
                    Icon: "run",
                    Text: "보행분석"
                },
                {
                    Icon: "human",
                    Text: "벨런스분석"
                }
            ],
        }
    }

    async componentWillMount() {

    }

    render() {
        return (
            <View style = {styles.contents}>
                <TouchableHighlight
                        underlayColor="#eeeeee"
                        onPress={() => {this._onButtonPress(this.state.buttons[0].Text)}}>
                        <View style = {styles.button}>
                            <MaterialCommunityIcons name = {this.state.buttons[0].Icon} size = {80}/>
                            <Text style = {styles.text}>{this.state.buttons[0].Text}</Text>
                        </View>
                </TouchableHighlight>

                <TouchableHighlight
                        underlayColor="#eeeeee"
                        onPress={() => {this._onButtonPress(this.state.buttons[1].Text)}}>
                        <View style = {styles.button}>
                            <MaterialCommunityIcons name = {this.state.buttons[1].Icon} size = {80}/>
                            <Text style = {styles.text}>{this.state.buttons[1].Text}</Text>
                        </View>
                </TouchableHighlight>
            </View>
        );
    }
    _onButtonPress = (m) => {
        console.log(m)
    }
}

const styles = StyleSheet.create({
    contents: {
        flex: 1, 
        justifyContent: 'center', 
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
    button: {
        backgroundColor:'#77aa66',
        borderRadius: 15,
        borderWidth: 1,
        padding: 2,
        borderColor: 'white',
        justifyContent: 'center', 
        textAlignVertical: "center",
        textAlign: "center"
    },
    text: {
        textAlignVertical: "center",
        textAlign: "center"
    }
});

  
export default HomeScreen;