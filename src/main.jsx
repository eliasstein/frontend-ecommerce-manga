import React, { StrictMode } from 'react'

import { createRoot } from 'react-dom/client'
import { AppRouter } from './router'

createRoot(document.getElementById('root')).render(
  // React.Fragment Para produccion.
  // <StrictMode>
    <AppRouter/>
  // </StrictMode>,
)
