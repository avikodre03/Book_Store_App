import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { My_Provider_fun } from './Context/Context.jsx'


createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <My_Provider_fun>
  <div className='dark:bg-slate-900 dark:text-white'>

<App />
</div>
  </My_Provider_fun>
 
  </BrowserRouter>
  
)
