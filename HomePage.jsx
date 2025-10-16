import { useNavigate } from 'react-router-dom'
import homeImage from '../assets/3014-928.webp'

function HomePage() {
  const navigate = useNavigate()

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div className="max-w-6xl w-full">
        <img 
          src={homeImage} 
          alt="AIDA Home Page" 
          className="w-full h-auto rounded-lg shadow-lg cursor-pointer hover:shadow-xl transition-shadow"
          onClick={() => navigate('/signin')}
          style={{ maxWidth: '100%', height: 'auto' }}
        />
        <div className="text-center mt-6">
          <button
            onClick={() => navigate('/signin')}
            className="px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
          >
            Sign In
          </button>
        </div>
      </div>
    </div>
  )
}

export default HomePage

