import Reactotron, { networking, asyncStorage } from "reactotron-react-native";
//import AsyncStorage from "@react-native-community/async-storage";

const reactotron = Reactotron.configure({ host: "192.168.0.23" }) // controls connection & communication settings
  .useReactNative(networking())
  .useReactNative(
    asyncStorage({
      ignore: ["secret"]
    })
  )
  // .setAsyncStorageHandler(AsyncStorage)
  // add all built-in react native plugins
  .connect();

export default reactotron;

