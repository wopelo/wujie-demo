import React from 'react'
import ReactDOM from 'react-dom/client'

import App from './App'
import './index.css'

window.React = React
window.ReactDOM = ReactDOM

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
