import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { TodosContext } from './Context/TodoContext.jsx'
import { CounterContext } from './Context/CounterContext.jsx'
import { AuthContext } from './Context/AuthContext.jsx'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <TodosContext>
      <AuthContext>
        <CounterContext>
          <App />
        </CounterContext>
      </AuthContext>
    </TodosContext>
  </BrowserRouter>,
)
