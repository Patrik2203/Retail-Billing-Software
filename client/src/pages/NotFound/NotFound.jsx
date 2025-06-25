import { useNavigate } from 'react-router-dom'
import './NotFound.css'

const NotFound = () => {
    const navigate = useNavigate();

    return (
        <div className='not-found-container'>
            <div className='not-found-content'>
                <h1 className='not-found-title'>404</h1>
                <h2 className='not-found-subtitle'>Oops! Page not found</h2>
                <p className='not-found-message'>
                    It seems like the page you're looking for doesn't exist. You can try going back to
                </p>
                <button className='not-found-button' onClick={() => navigate('/')}>
                    Go to Home
                </button>
            </div>
        </div>
    )
}

export default NotFound;