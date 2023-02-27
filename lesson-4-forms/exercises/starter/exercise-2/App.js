import { Provider } from 'react-redux'
import Navigation from './src/navigation'
import initializeStore from './src/store'
// import store from "./src/store/index"

const store = initializeStore()

const App = () => {
  return (
    <Provider store={store}>
    <Navigation />
    </Provider>
  )
}

export default App