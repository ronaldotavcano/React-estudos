import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import {App} from './App'

createRoot(document.getElementById('root')!).render(
  //Assim que usa componentes < Componente />
  <StrictMode>
    <App />
  </StrictMode>,
)
