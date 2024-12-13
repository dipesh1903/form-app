import './App.css'
import { AuthGaurd } from './auth/authGaurd'
import { AuthObserver } from './auth/authObserver'
import AuthContextProvider from './store/auth/context'
import { ConfigContextProvider } from './store/config'
import { UserDetailsStore } from './store/globalStore'

new UserDetailsStore();

function App() {
  return (
    <AuthContextProvider>
      <ConfigContextProvider>
        <AuthObserver>
          <AuthGaurd />
        </AuthObserver>
      </ConfigContextProvider>
    </AuthContextProvider>
  )
}

export default App
