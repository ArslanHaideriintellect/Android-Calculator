/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */
import React, {Component} from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    ImageBackground,
    TextInput,
    TouchableHighlight,
    TouchableOpacity,
    TouchableWithoutFeedback,
    StatusBar
} from 'react-native';

const instructions = Platform.select({
    ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
    android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export default class App extends Component<Props> {
    state = {
        check: true,
        check2: false,
        output: "0",
        number1: "",
        num1length: 0,
        operator: "",
    };

    async assignoperator(val) {
        if (this.state.operator !== "") {
            await this.calculate();
            await this.addingInput1(val);
            let length = this.state.output.length;
            await this.setState({operator: val, num1length: length},()=>{
                let temp = "";
                for (let i = 0; i < length-1; i++) {
                    temp = temp + this.state.output[i];
                }
                this.setState({number1: temp,check2:true});
            });
        }
        else {
            this.addingInput1(val);
            let length = this.state.output.length;
            this.setState({operator: val, num1length: length});
            let temp = "";
            for (let i = 0; i < length; i++) {
                temp = temp + this.state.output[i];
            }
            this.setState({number1: temp});
        }
    };

    addingInput1(val) {
        if (this.state.check) {
            this.setState({output: val, check: false},()=>{
                this.setState({output: val, check: false})
            });
        }
        else {
            let temp1 = this.state.output;
            temp1 = temp1 + val;
            this.setState({output: temp1},()=>{
                this.setState({output: temp1})
            });
        }
    }

    calculate() {
        if (this.state.output === "0") {
            return 0;
        }
        if (this.state.output.length<=this.state.number1.length){
            return 0;
        }
        if(this.state.operator===""){
            return 0;
        }
        if(this.state.check2){
            let temp = "";
            for (let j = this.state.num1length; j < this.state.output.length; j++) {
                temp = temp + this.state.output[j];
            }
            switch (this.state.operator) {
                case "+" : {
                    let result = +this.state.number1 + +temp;
                    this.setState({
                        output: result,
                        number1: "",
                        num1length: 0,
                        operator: "",
                        check2:false
                    });
                    return 0;
                }
                case "*" : {
                    let result = this.state.number1 * temp;
                    this.setState({
                        output: result,
                        number1: "",
                        num1length: 0,
                        operator: "",
                        check2:false
                    });
                    return 0;
                }
                case "/" : {
                    let result = this.state.number1 / temp;
                    this.setState({
                        output: result,
                        number1: "",
                        num1length: 0,
                        operator: "",
                        check2:false
                    });
                    return 0;
                }
                case "-" : {
                    let result = (this.state.number1) - (temp);
                    this.setState({
                        output: result,
                        number1: "",
                        num1length: 0,
                        operator: "",
                        check2:false
                    });
                    return 0;
                }
                default:
                    this.setState({
                        output: result,
                        number1: "",
                        num1length: 0,
                        operator: "",
                        check2:false
                    });
                    return 0;
            }
        }
        else
        {
            let temp = "";
            for (let j = this.state.num1length +1; j < this.state.output.length; j++) {
                temp = temp + this.state.output[j];
            }
            switch (this.state.operator) {
                case "+" : {
                    let result = +this.state.number1 + +temp;
                    this.setState({
                        output: result,
                        number1: "",
                        num1length: 0,
                        operator: "",
                    });
                    return 0;
                }
                case "*" : {
                    let result = this.state.number1 * temp;
                    this.setState({
                        output: result,
                        number1: "",
                        num1length: 0,
                        operator: "",
                    });
                    return 0;
                }
                case "/" : {
                    let result = this.state.number1 / temp;
                    this.setState({
                        output: result,
                        number1: "",
                        num1length: 0,
                        operator: "",
                    });
                    return 0;
                }
                case "-" : {
                    let result = (this.state.number1) - (temp);
                    this.setState({
                        output: result,
                        number1: "",
                        num1length: 0,
                        operator: "",
                    });
                    return 0;
                }
                default:
                    this.setState({
                        output: result,
                        number1: "",
                        num1length: 0,
                        operator: "",
                    });
                    return 0;
            }
        }
    }

    delete() {
        if (this.state.output.length - 1 === 0) {
            this.setState({output: "0", check: true})
        }
        else {
            let temp = "";
            for (let i = 0; i < this.state.output.length - 1; i++) {
                temp = temp + this.state.output[i];
            }
            this.setState({output: temp})
        }
    }

    percentage() {
        let per = this.state.output / 100;
        this.setState({
            result: per
        })
    }

    render() {
        return (

            <ImageBackground
                style={styles.container}>
                <StatusBar backgroundColor="black"/>
                {/*<Text style={styles.welcome}>Calculator</Text>*/}
                <Text style={styles.inputfield}
                >{this.state.output}</Text>
                {/*<Text style={styles.resultfield}> {this.state.result}</Text>*/}
                <View style={styles.smallBtn}>
                    <TouchableOpacity style={styles.btnstyle3} onPress={() => this.setState({
                        check: true,
                        output: "0",
                        number1: "",
                        num1length: 0,
                        result: 0,
                        operator: "",
                    })}
                    ><Text style={styles.btntext}>AC</Text></TouchableOpacity>
                    <TouchableOpacity style={styles.btnstyle3}
                                      onPress={() => this.delete()}><Text
                        style={styles.btntext}>C</Text></TouchableOpacity>
                    <TouchableOpacity style={styles.btnstyle3}
                                      onPress={() => this.percentage()}
                    ><Text style={styles.btntext}>%</Text></TouchableOpacity>
                    <TouchableOpacity style={styles.btnstyle} onPress={() => this.assignoperator("/")}
                    ><Text style={styles.btntext}>/</Text></TouchableOpacity>
                    <TouchableOpacity style={styles.btnstyle1} onPress={() => this.addingInput1("7")}><Text
                        style={styles.btntext}
                    >7</Text></TouchableOpacity>
                    <TouchableOpacity style={styles.btnstyle1} onPress={() => this.addingInput1("8")}><Text
                        style={styles.btntext}
                    >8</Text></TouchableOpacity>
                    <TouchableOpacity style={styles.btnstyle1} onPress={() => this.addingInput1("9")}><Text
                        style={styles.btntext}
                    >9</Text></TouchableOpacity>
                    <TouchableOpacity style={styles.btnstyle} onPress={() => this.assignoperator("*")}
                    ><Text style={styles.btntext}>x</Text></TouchableOpacity>
                    <TouchableOpacity style={styles.btnstyle1} onPress={() => this.addingInput1("4")}><Text
                        style={styles.btntext}
                    >4</Text></TouchableOpacity>
                    <TouchableOpacity style={styles.btnstyle1} onPress={() => this.addingInput1("5")}><Text
                        style={styles.btntext}
                    >5</Text></TouchableOpacity>
                    <TouchableOpacity style={styles.btnstyle1} onPress={() => this.addingInput1("6")}><Text
                        style={styles.btntext}
                    >6</Text></TouchableOpacity>
                    <TouchableOpacity style={styles.btnstyle} onPress={() => this.assignoperator("+")}
                    ><Text style={styles.btntext}>+</Text></TouchableOpacity>
                    <TouchableOpacity style={styles.btnstyle1} onPress={() => this.addingInput1("1")}><Text
                        style={styles.btntext}
                    >1</Text></TouchableOpacity>
                    <TouchableOpacity style={styles.btnstyle1} onPress={() => this.addingInput1("2")}><Text
                        style={styles.btntext}
                    >2</Text></TouchableOpacity>
                    <TouchableOpacity style={styles.btnstyle1} onPress={() => this.addingInput1("3")}><Text
                        style={styles.btntext}
                    >3</Text></TouchableOpacity>
                    <TouchableOpacity style={styles.btnstyle} onPress={() => this.assignoperator("-")}
                    ><Text style={styles.btntext}>-</Text></TouchableOpacity>
                    <TouchableOpacity style={styles.btnstyle2} onPress={() => this.addingInput1("0")}><Text
                        style={styles.btntext}
                    >0</Text></TouchableOpacity>
                    <TouchableOpacity style={styles.btnstyle1} onPress={() => this.addingInput1(".")}><Text
                        style={styles.btntext}
                    >.</Text></TouchableOpacity>
                    <TouchableOpacity style={styles.btnstyle}
                                      onPress={() => this.calculate()}><Text
                        style={styles.btntext}>=</Text></TouchableOpacity>
                </View>
            </ImageBackground>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: 'black',
        paddingTop: 60,
    },
    welcome: {
        fontSize: 30,
        textAlign: 'center',
        margin: 10,
        fontWeight: 'bold',
        color: 'white'
    },
    smallBtn: {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap'
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
    inputfield: {
        width: 300,
        borderColor: '#fff',
        paddingBottom: 5,
        fontSize: 60,
        borderRadius: 4,
        marginTop: 2,
        color: 'rgba(255, 255, 255,1)',
        textAlign: 'right',
    },
    resultfield: {
        marginTop: 5,
        paddingTop: 5,
        paddingLeft: 3,
        fontSize: 40,
        borderWidth: 1,
        borderRadius: 4,
        width: 300,
        height: 50,
        color: '#ff9501',
        textAlign: 'right',
    },
    btnstyle: {
        backgroundColor: '#ff9501',
        width: 70,
        height: 70,
        borderWidth: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 15,
        marginLeft: 15,
        borderRadius: 40
    },
    btnstyle1: {
        backgroundColor: '#333',
        width: 70,
        height: 70,
        borderWidth: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 15,
        marginLeft: 15,
        borderRadius: 40

    },
    btnstyle2: {
        backgroundColor: '#333',
        width: 153,
        height: 70,
        borderWidth: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 15,
        marginLeft: 15,
        borderRadius: 40
    },
    btnstyle3: {
        backgroundColor: '#a6a6a6',
        width: 70,
        height: 70,
        borderWidth: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 15,
        marginLeft: 15,
        borderRadius: 40
    },
    btntext: {
        color: '#fff',
        fontSize: 24,
    },
    btndisplay: {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
    }
});
