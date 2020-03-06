const Reactotron = require('reactotron-react-native').default
const reactotronRedux = require('reactotron-redux').reactotronRedux

if (process.env.NODE_ENV === 'development') {
  Reactotron.configure() // controls connection & communication settings
    // .useReactNative() // add all built-in react native plugins
    .use(reactotronRedux())
    .connect()
}
