
import ReactDOM from 'react-dom/client'

import React from 'react'

import { Provider } from 'react-redux'
import store from './store'
import Counter from './counter'

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
         <Counter/>
    </Provider>
)
