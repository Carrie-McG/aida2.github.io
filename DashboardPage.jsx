import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import dashboardMVP from '../assets/3014-1221.webp'
import casesReviewExpanded from '../assets/3014-1391.webp'
import recentlyResolvedExpanded from '../assets/3014-1392.webp'
import allPendingExpanded from '../assets/3014-1393.webp'

function DashboardPage() {
  const navigate = useNavigate()
  const [expandedSection, setExpandedSection] = useState(null)

  const handleSectionClick = (section) => {
    setExpandedSection(expandedSection === section ? null : section)
  }

  const handleCaseClick = (caseId) => {
    navigate(`/review-case/${caseId}`)
  }

  const getCurrentImage = () => {
    switch (expandedSection) {
      case 'casesReview':
        return casesReviewExpanded
      case 'recentlyResolved':
        return recentlyResolvedExpanded
      case 'allPending':
        return allPendingExpanded
      default:
        return dashboardMVP
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto p-4">
        <div className="relative">
          <img 
            src={getCurrentImage()} 
            alt="AIDA Dashboard" 
            className="w-full h-auto rounded-lg shadow-lg"
            style={{ maxWidth: '100%', height: 'auto' }}
          />
          
          {/* Clickable overlay areas */}
          <div className="absolute inset-0">
            {/* Cases to Review section - top section */}
            <div 
              className="absolute cursor-pointer hover:bg-blue-100 hover:bg-opacity-20 transition-colors"
              style={{ 
                top: '20%', 
                left: '35%', 
                width: '60%', 
                height: '8%' 
              }}
              onClick={() => handleSectionClick('casesReview')}
              title="Click to expand Cases to Review"
            />
            
            {/* Recently Resolved Cases section - middle section */}
            <div 
              className="absolute cursor-pointer hover:bg-blue-100 hover:bg-opacity-20 transition-colors"
              style={{ 
                top: expandedSection === 'casesReview' ? '45%' : '35%', 
                left: '35%', 
                width: '60%', 
                height: '8%' 
              }}
              onClick={() => handleSectionClick('recentlyResolved')}
              title="Click to expand Recently Resolved Cases"
            />
            
            {/* All Pending Cases section - bottom section */}
            <div 
              className="absolute cursor-pointer hover:bg-blue-100 hover:bg-opacity-20 transition-colors"
              style={{ 
                top: expandedSection ? '60%' : '50%', 
                left: '35%', 
                width: '60%', 
                height: '8%' 
              }}
              onClick={() => handleSectionClick('allPending')}
              title="Click to expand All Pending Cases"
            />

            {/* Case number clickable areas when expanded */}
            {expandedSection === 'casesReview' && (
              <>
                <div 
                  className="absolute cursor-pointer hover:bg-yellow-100 hover:bg-opacity-30 transition-colors"
                  style={{ top: '30%', left: '38%', width: '15%', height: '3%' }}
                  onClick={() => handleCaseClick('FR-2024-001')}
                  title="Click to view case FR-2024-001"
                />
                <div 
                  className="absolute cursor-pointer hover:bg-yellow-100 hover:bg-opacity-30 transition-colors"
                  style={{ top: '34%', left: '38%', width: '15%', height: '3%' }}
                  onClick={() => handleCaseClick('FR-2024-002')}
                  title="Click to view case FR-2024-002"
                />
                <div 
                  className="absolute cursor-pointer hover:bg-yellow-100 hover:bg-opacity-30 transition-colors"
                  style={{ top: '38%', left: '38%', width: '15%', height: '3%' }}
                  onClick={() => handleCaseClick('FR-2024-003')}
                  title="Click to view case FR-2024-003"
                />
              </>
            )}

            {expandedSection === 'recentlyResolved' && (
              <>
                <div 
                  className="absolute cursor-pointer hover:bg-yellow-100 hover:bg-opacity-30 transition-colors"
                  style={{ top: expandedSection === 'casesReview' ? '52%' : '42%', left: '38%', width: '15%', height: '3%' }}
                  onClick={() => handleCaseClick('RR-2024-001')}
                  title="Click to view case RR-2024-001"
                />
                <div 
                  className="absolute cursor-pointer hover:bg-yellow-100 hover:bg-opacity-30 transition-colors"
                  style={{ top: expandedSection === 'casesReview' ? '56%' : '46%', left: '38%', width: '15%', height: '3%' }}
                  onClick={() => handleCaseClick('RR-2024-002')}
                  title="Click to view case RR-2024-002"
                />
              </>
            )}

            {expandedSection === 'allPending' && (
              <>
                <div 
                  className="absolute cursor-pointer hover:bg-yellow-100 hover:bg-opacity-30 transition-colors"
                  style={{ top: '67%', left: '85%', width: '10%', height: '3%' }}
                  onClick={() => handleCaseClick('AP-2024-001')}
                  title="Click View & Edit"
                />
                <div 
                  className="absolute cursor-pointer hover:bg-yellow-100 hover:bg-opacity-30 transition-colors"
                  style={{ top: '72%', left: '85%', width: '10%', height: '3%' }}
                  onClick={() => handleCaseClick('AP-2024-002')}
                  title="Click View & Edit"
                />
                <div 
                  className="absolute cursor-pointer hover:bg-yellow-100 hover:bg-opacity-30 transition-colors"
                  style={{ top: '77%', left: '85%', width: '10%', height: '3%' }}
                  onClick={() => handleCaseClick('AP-2024-003')}
                  title="Click View & Edit"
                />
              </>
            )}
          </div>
        </div>

        {/* Helper text */}
        <div className="mt-6 text-center text-gray-600">
          <p className="text-sm">Click on section headers to expand/collapse</p>
          <p className="text-sm">Click on case numbers or "View & Edit" buttons to review cases</p>
        </div>
      </div>
    </div>
  )
}

export default DashboardPage

