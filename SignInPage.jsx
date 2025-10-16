import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import signInImage from '../assets/3015-944.webp'

function SignInPage() {
  const navigate = useNavigate()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSignIn = (e) => {
    e.preventDefault()
    // Accept any credentials and navigate to dashboard
    navigate('/dashboard')
  }

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div className="max-w-6xl w-full">
        <div className="relative">
          <img 
            src={signInImage} 
            alt="AIDA Sign In Page" 
            className="w-full h-auto rounded-lg shadow-lg"
            style={{ maxWidth: '100%', height: 'auto' }}
          />
          {/* Overlay form for interaction */}
          <form 
            onSubmit={handleSignIn}
            className="absolute inset-0 flex items-center justify-center"
            style={{ pointerEvents: 'none' }}
          >
            <div className="w-full max-w-md" style={{ pointerEvents: 'auto' }}>
              <div className="space-y-4 opacity-0">
                <input
                  type="text"
                  placeholder="Email or Username"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                />
                <input
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                />
                <button
                  type="submit"
                  className="w-full px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Sign In
                </button>
              </div>
            </div>
          </form>
        </div>
        <div className="text-center mt-6">
          <button
            onClick={() => navigate('/dashboard')}
            className="px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
          >
            Sign In (Click to Continue)
          </button>
        </div>
      </div>
    </div>
  )
}

export default SignInPage

