/**
 * @format
 */
import React from 'react';
import { 
  View, 
  Text, 
  StyleSheet,
  ImageBackground,
  StatusBar,
  TouchableHighlight,
} from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import { AuthContext } from '../../App';

const SignUpScreen = ({navigation}) => {
  const [data, setData] = React.useState({
    fullname: '',
    username: '',
    password: '',
    email: '',
    // dataSource: [],
    isValidName: true,
    isValidUser: true,
    isValidPassword: true,
    isValidEmail: true
  });

  const { signUp } = React.useContext(AuthContext);

  const handleNameChange = (fName) => {
    if( fName.trim().length >= 4 ) {
        setData({
            ...data,
            fullname: fName,
            isValidName: true
        });
    } else {
        setData({
            ...data,
            fullname: fName,
            isValidName: false
        });
    }
  }

  const textInputChange = (uName) => {
    if( uName.trim().length >= 4 ) {
        setData({
            ...data,
            username: uName,
            check_textInputChange: true,
            isValidUser: true
        });
    } else {
        setData({
            ...data,
            username: uName,
            check_textInputChange: false,
            isValidUser: false
        });
    }
  }

  const handlePasswordChange = (pw, pw1) => {
    if( pw.trim().length >= 8 || pw == pw1 ) {
        setData({
            ...data,
            password: pw,
            isValidPassword: true
        });
    } else {
        setData({
            ...data,
            password: pw,
            isValidPassword: false
        });
    }
  }

  const handleEmailChange = (Email) => {
    if( Email.trim().length >= 8) {
        setData({
            ...data,
            email: Email,
            isValidEmail: true
        });
    } else {
        setData({
            ...data,
            email: Email,
            isValidEmail: false
        });
    }
  }

  const loginHandle = (fullname, username, password, email) => {
    if ( data.fullname.length == 0 || data.username.length == 0 || data.password.length == 0 || data.email.length == 0 ) {
      alert( ' All of field cannot be empty.');
      return;
    } else {
      fetch('http://10.0.3.2:5555/signup' , {
          method: 'POST',
          headers: {
              Accept: 'application/json',
              'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            'nick_name': data.fullname,
            'username': data.username,
            'password': data.password,
            'email': data.email
          })
      })
      .then ((response) => response.json())
      .then ( (res) => { 
        if (res.new_account != 0 ) {
          alert("correct");
        } else {
          alert("Username or password is incorrect");
        }           
      })
      .catch ((error) => {
        console.log(error);
      })
    }
  }
    return (
      <View style={styles.container}>
        <StatusBar barStyle="light-content"/>
        <View style={styles.header}>
          <ImageBackground
            source={require("../Images/header.png")}
            style={styles.imagebackground}
          >
            <Text style={{
              color: 'white',
              fontWeight: 'bold',
              fontSize: 30
            }}>Sign up an account</Text>
            <Text style={{color: 'yellow'}}>Fill the blanks to continue </Text>
          </ImageBackground>
        </View>
  
        <View style={styles.footer}>
          <Text style={styles.title}      
            >Full Name</Text>
          <View style={styles.action}>
            <TextInput
            placeholder='Your name...'
            style={styles.textInput}
            onChangeText={(fName) => handleNameChange(fName)}
            />
          </View>
          <Text style={[styles.title, {
            marginTop: 10
          }]}      
          >Username</Text>
          <View style={styles.action}>
            <TextInput
            placeholder='Your username...'
            style={styles.textInput}
            onChangeText={(uName) => textInputChange(uName)}
            />
          </View>
          <Text style={[styles.title, {
            marginTop: 10
          }]}>Password</Text>
          <View style={styles.action}>
            <TextInput
            placeholder='Your password...'
            secureTextEntry
            style={styles.textInput}
            onChangeText={ (pw) =>handlePasswordChange(pw)}
            /> 
          </View>
          <Text style={[styles.title, {
            marginTop: 10
          }]}>Confirm Password</Text>
          <View style={styles.action}>
            <TextInput
            placeholder='Your password...'
            secureTextEntry
            style={styles.textInput}
            onChangeText={ (pw1) =>handlePasswordChange(pw1)}
            /> 
          </View>
          <Text style={[styles.title, {
            marginTop: 10
          }]}      
          >Email</Text>
          <View style={styles.action}>
            <TextInput
            placeholder='Your email...'
            style={styles.textInput}
            onChangeText={(Email) => handleEmailChange(Email)}
            />
          </View>
          <TouchableHighlight
            style={styles.logIn}
            underlayColor='#fff'
            onPress={() => {loginHandle(data.fullname, data.username, data.password, data.email)}}
            >
              <Text style={[styles.logInText]}>Sign Up</Text>
          </TouchableHighlight>
        </View>
      </View>
    );
} 
export {SignUpScreen};

var styles = StyleSheet.create ({
    container: {
        flex: 1,
        backgroundColor: "white",
        justifyContent: "center"
    },

    header: {
        flex:1,
    },

    footer: {
        flex: 2,
        padding: 20,
        fontSize: 20
    },

    imagebackground: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        height: "100%"
    },

    title: {
        color: "black",
        fontWeight: 'bold'
    },

    action: {
        flexDirection: 'row',
        borderBottomWidth: 1,
        borderBottomColor: 'grey'
    },

    textInput: {
        flex: 1,
        marginTop: 5,
        paddingBottom: 5,
        color: "grey"
    },

    logIn:{
        marginTop: 20,
        paddingTop: 15,
        paddingBottom: 15,
        backgroundColor:'#93278f',
        borderRadius: 50,
        borderWidth: 1,
        borderColor: '#fff'
    },

    logInText:{
        color:'#fff',
        textAlign:'center'
    }
});
