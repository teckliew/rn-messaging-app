import React, {
  Navigator,
  Component,
  StyleSheet
} from 'react-native';

const Login = require('./components/login');
const Channels = require('./components/channels');
const Chat = require('./components/chat')

const ROUTES = {
  login: Login,
  channels: Channels,
  chat: Chat
};

module.exports = React.createClass({
  renderScene: (route, navigator) => {
    let Component = ROUTES[route.name];
    return <Component route={route} navigator={navigator} />;
  },
  render: function() {
    return (
      <Navigator
        style={ styles.container }
        initialRoute={ {name: 'login'} }
        renderScene={this.renderScene}
        configureScene={ () => { return Navigator.SceneConfigs.FloatFromRight; } }
      />
  );
  }
});

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
