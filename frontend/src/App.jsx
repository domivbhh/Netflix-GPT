import './App.css'
import store from './Store/store'
import Body from './components/Body'
import Header from './components/Header'
import {Provider} from 'react-redux'


function App() {

  return (
    <Provider store={store}>
    <div>
    <Body/>
    </div>
    </Provider>
  )
}

export default App
