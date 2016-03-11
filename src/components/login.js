import React, {
  View,
  Component,
  Text,
  TextInput,
  TouchableHighlight,
  StyleSheet
} from 'react-native';

const sendbird = require('sendbird');

module.exports = React.createClass({
  getInitialState: function() {
    return {
      username: ''
    }
  },
  render: function() {
    return (
      <View style={styles.container}>
        <View style={styles.loginContainer}>
          <TextInput
            style={styles.input}
            value={this.state.username}
            onChangeText={(text) => this.setState({username:text})}
            placeholder={'Enter User nickname'}
            maxLength={12}
            multiline={false}
            />
          <TouchableHighlight
            style={styles.button}
            underlayColor={'#328fe6'}
            onPress={this.onPress}
            >
            <Text style={styles.label}>Login</Text>
          </TouchableHighlight>
        </View>
      </View>
    );
  },
  onPress: function() {
    sendbird.init({
      app_id: 'A7A2672C-AD11-11E4-8DAA-0A18B21C2D82',
      guest_id: this.state.username,
      user_name: this.state.username,
      image_url: "",
      access_token: "",
      successFunc: (data) => {
        this.props.navigator.push({ name: 'channels'})
      },
      errorFunc: (status, error) => {
        this.setState({username: ''});
      }
    });
  }
});



const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'stretch',
    backgroundColor: '#6E5BAA'
  },
  loginContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  input: {
    width: 250,
    color: '#555555',
    padding: 10,
    height: 50,
    borderColor: '#32C5E6',
    borderWidth: 1,
    borderRadius: 4,
    alignSelf: 'center',
    backgroundColor: '#ffffff'
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: 5,
    borderColor: '#328FE6',
    padding: 10,
    marginTop: 10,
    backgroundColor: '#32c5e6'
  },
  label: {
    width: 230,
    flex: 1,
    alignSelf: 'center',
    textAlign: 'center',
    fontSize: 20,
    fontWeight: '600',
    color: '#ffffff'
  }
});
