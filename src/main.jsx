
import { GoogleOAuthProvider } from '@react-oauth/google'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import { Provider } from 'react-redux'
import StoreRedux from './storeRedux/StoreRedux.jsx'

import { Router } from './/utils/Router'
// import Masuk from './Masuk/Masuk.jsx'
import { RouterProvider } from 'react-router-dom'

// import App from './App.jsx'

const element=document.getElementById("root")
const root=createRoot(element)


root.render(
  <GoogleOAuthProvider clientId={import.meta.env.VITE_GOOGLE_CLIENT_ID}>
    <Provider store={StoreRedux}>
      <StrictMode>
        <RouterProvider router={Router}/>
      </StrictMode>
    </Provider>
  </GoogleOAuthProvider>
)
