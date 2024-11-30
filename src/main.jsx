import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import store from './store/store.js'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { AuthLayout, Login } from './components/index.js'
import { Provider } from 'react-redux'

import Home from './pages/Home.jsx'
import Signup from './pages/Signup.jsx'

const router =createBrowserRouter([
  {
    path:'/',
    element:<App/>,
    children:[
      {
        path:'/',
        element:<Home/>
      },
      {
        path:'/login',
        element:(
        <AuthLayout authentication={false} >
          <Login/>
        </AuthLayout>
        )
      },
      {
        path:'/signup',
        element:(
          <AuthLayout authentication={false}>
            <Signup/>
          </AuthLayout>
        )
      },
      //Code needed to be added
    ],
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
<RouterProvider router={router} />
  </Provider>
)
