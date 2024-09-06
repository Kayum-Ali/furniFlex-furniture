import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import './index.css'
import { RouterProvider } from 'react-router-dom'
import router from './routes/BasicRoutes.jsx'
import BlogContextComponent from './context/BlogContextComponent.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BlogContextComponent>
       <RouterProvider router={router} />

    </BlogContextComponent>
  </StrictMode>,
)
