import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { router } from './Routes'
import { RouterProvider } from 'react-router-dom'
import { store } from './Redux/Redux'
import { Provider } from 'react-redux'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>,
)
