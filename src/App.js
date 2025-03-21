import {React, useState} from 'react';
import ReactDOM from 'react-dom';
import {HTML5Backend} from 'react-dnd-html5-backend';
import {DndProvider, useDrag, useDrop} from 'react-dnd';
import {Button, Card, CardContent, TextField} from '@mui/material';
import {v4 as uuid} from 'uuid';
import Dashboard from './components/dash';
import { Provider } from 'react-redux';
import { store } from './components/store';
import './App.css';

const App=()=>{
  return(
  <Provider store={store}>
      <DndProvider backend={HTML5Backend}>
      <Dashboard />
    </DndProvider>
    </Provider>
  );
}
export default App;