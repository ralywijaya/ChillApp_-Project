

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'



import { Router } from './/utils/Router'
// import Masuk from './Masuk/Masuk.jsx'
import { RouterProvider } from 'react-router-dom'




// import App from './App.jsx'


const element=document.getElementById("root")
const root=createRoot(element)



root.render(
  <StrictMode>
    <RouterProvider router={Router}/>
  </StrictMode>
)