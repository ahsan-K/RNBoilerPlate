import React from 'react';
import Route from './routes';
import { store } from './src/redux/store'
import { Provider } from 'react-redux'
export default function App() {
  return (
    <Provider store={store}>
      <Route/>
    </Provider>
  );
}