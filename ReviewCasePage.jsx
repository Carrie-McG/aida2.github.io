import { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

function ReviewCasePage() {
  const navigate = useNavigate()
  const { caseId } = useParams()
  const [showDropdown, setShowDropdown] = useState(false)

  const handleSendToExaminer = () => {
    setShowDropdown(!showDropdown)
  }

  const handleConfirmSend = () => {
    // Return to dashboard
    navigate('/dashboard')
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 px-6 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center">
              <span className="text-gray-600 font-semibold">AI</span>
            </div>
            <h1 className="text-xl font-semibold text-gray-800">AIDA: Artificial Intelligence Drafting Assistant</h1>
          </div>
          <div className="flex items-center space-x-6">
            <button className="text-gray-600 hover:text-gray-800">Home</button>
            <button className="text-gray-600 hover:text-gray-800">Logout</button>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto p-6">
        {/* Case Header */}
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-lg font-semibold text-gray-800">
                Case ID: FR-2024-{caseId}
              </h2>
              <p className="text-sm text-gray-600">Case Owner: Joseph Carr</p>
            </div>
            <button
              onClick={() => navigate('/dashboard')}
              className="px-4 py-2 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors text-sm font-medium"
            >
              Send to Examiner to Unfreeze
            </button>
          </div>
        </div>

        {/* Case Details Section */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-6">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">Case Details</h3>
          
          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-600 mb-1">Case for Review (FR)</label>
                <input 
                  type="text" 
                  value="FR-2024-001"
                  readOnly
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg bg-gray-50"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-600 mb-1">Recently Resolved Cases</label>
                <input 
                  type="text" 
                  value="RR-2024-001"
                  readOnly
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg bg-gray-50"
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-600 mb-1">Hearing Number</label>
                <input 
                  type="text" 
                  value="HN-2024-001"
                  readOnly
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg bg-gray-50"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-600 mb-1">Claim Type</label>
                <input 
                  type="text" 
                  value="Disability"
                  readOnly
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg bg-gray-50"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Facts Section */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-6">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">Case Facts</h3>
          
          {/* Fact 1 */}
          <div className="mb-6">
            <div className="flex items-center justify-between mb-2">
              <span className="inline-block px-3 py-1 bg-gray-200 text-gray-700 rounded text-sm font-medium">Fact 1</span>
              <button className="text-gray-400 hover:text-red-600 flex items-center space-x-1">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd" />
                </svg>
                <span className="text-sm">Delete Fact</span>
              </button>
            </div>
            <textarea 
              className="w-full px-4 py-3 border border-gray-300 rounded-lg resize-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              rows="4"
              defaultValue="Employee worked for 4 years"
            />
            <div className="mt-3">
              <p className="text-sm text-gray-600 mb-2">Click on each Issue this fact relates to:</p>
              <div className="flex space-x-2">
                <button className="px-4 py-2 bg-blue-600 text-white rounded-full text-sm font-medium hover:bg-blue-700">
                  MC 01/01/2025
                </button>
                <button className="px-4 py-2 bg-white border border-gray-300 text-gray-700 rounded-full text-sm font-medium hover:bg-gray-50">
                  GM 01/01/2025
                </button>
              </div>
            </div>
          </div>

          {/* Fact 2 */}
          <div className="mb-6">
            <div className="flex items-center justify-between mb-2">
              <span className="inline-block px-3 py-1 bg-gray-200 text-gray-700 rounded text-sm font-medium">Fact 2</span>
              <button className="text-gray-400 hover:text-red-600 flex items-center space-x-1">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd" />
                </svg>
                <span className="text-sm">Delete Fact</span>
              </button>
            </div>
            <textarea 
              className="w-full px-4 py-3 border border-gray-300 rounded-lg resize-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              rows="4"
              defaultValue="Company downsized due to economic conditions"
            />
            <div className="mt-3">
              <p className="text-sm text-gray-600 mb-2">Click on each Issue this fact relates to:</p>
              <div className="flex space-x-2">
                <button className="px-4 py-2 bg-blue-600 text-white rounded-full text-sm font-medium hover:bg-blue-700">
                  MC 01/01/2025
                </button>
                <button className="px-4 py-2 bg-blue-600 text-white rounded-full text-sm font-medium hover:bg-blue-700">
                  GM 01/01/2025
                </button>
              </div>
            </div>
          </div>

          {/* Add Fact Button */}
          <button className="flex items-center space-x-2 px-4 py-2 border-2 border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 transition-colors font-medium">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
            </svg>
            <span>Additional Fact</span>
          </button>
        </div>

        {/* Evidence Section */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-6">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">Evidence</h3>
          <textarea 
            className="w-full px-4 py-3 border border-gray-300 rounded-lg resize-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            rows="6"
            placeholder="Evidence content for Juror..."
          />
        </div>

        {/* Action Buttons */}
        <div className="flex justify-between items-center">
          <button
            onClick={() => navigate('/dashboard')}
            className="px-6 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors font-medium"
          >
            Back to Dashboard
          </button>
          
          <div className="flex space-x-4">
            {!showDropdown ? (
              <button
                onClick={handleSendToExaminer}
                className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
              >
                Send to Examiner to Unfreeze
              </button>
            ) : (
              <>
                <button
                  onClick={() => setShowDropdown(false)}
                  className="px-6 py-2 bg-gray-300 text-gray-700 rounded-lg hover:bg-gray-400 transition-colors font-medium"
                >
                  Cancel
                </button>
                <button
                  onClick={handleConfirmSend}
                  className="px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors font-medium"
                >
                  Confirm & Send Back
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default ReviewCasePage

