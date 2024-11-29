import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import 'react-toastify/dist/ReactToastify.css';
import UserAuth from './context/UserAuth.jsx';

createRoot(document.getElementById('root')).render(
    <UserAuth>
        <App />
    </UserAuth>,
)
