import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './firebaseConfig.ts'
import './index.css'
import "./i18n/config.ts";
import App from './App.tsx'
import { ToastContainer, Slide } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
    <ToastContainer
      position="top-right"
      autoClose={5000}
      hideProgressBar
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      transition={Slide}
      />
  </StrictMode>,
)
