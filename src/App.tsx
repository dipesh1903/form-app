import { RouterProvider, Outlet } from 'react-router-dom'
import './App.css'
import { AuthObserver } from './auth/authObserver'
import router from './auth/routes'
import AuthContextProvider from './store/auth/context'
import { ConfigContextProvider } from './store/config'
import { UserDetailsStore } from './store/globalStore'
import { useEffect } from 'react'

new UserDetailsStore();

function App() {

  useEffect(() => {
    const element = document.getElementsByClassName('app-init-loader')[0] as HTMLElement
    if (element) {
      element.style.display = 'none';
    }
  }, [])

  return (
    <AuthContextProvider>
      <ConfigContextProvider>
        <AuthObserver>
          <RouterProvider router={router}/>
          <Outlet/>
        </AuthObserver>
      </ConfigContextProvider>
    </AuthContextProvider>
  )
}

export default App
