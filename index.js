import React from "react";
import { AppRegistry } from "react-native";
import App from "./App";
import { name as appName } from "./app.json";
import { Provider } from "react-redux";

import configureStore from "./src/stores/products.store";

const store = configureStore();

const Redux = () => (
  <Provider store={store}>
    <App />
  </Provider>
);
const LogLocation = async (data) => {
  navigator.geolocation.getCurrentPosition((position) => {
    console.log(position.coords);
  });
}

AppRegistry.registerHeadlessTask('LogLocation', () => LogLocation);
AppRegistry.registerComponent(appName, () => Redux);
