import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {Provider} from "react-redux";
import {store} from "./src/redux/store";
import AppNavigation from "./src/navigation";

export default function App() {
  return (
      <Provider store={store}>
          <StatusBar style="auto" />
          <AppNavigation />
      </Provider>
  );
}
