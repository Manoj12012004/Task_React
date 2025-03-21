import {React} from 'react';
import {HTML5Backend} from 'react-dnd-html5-backend';
import {DndProvider} from 'react-dnd';
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