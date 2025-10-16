# AIDA Dashboard Prototype Guide

## Overview
This is a clickable prototype for the **AIDA (Artificial Intelligence Drafting Assistant)** dashboard application. The prototype demonstrates the complete user flow from sign-in through case management and review.

## Navigation Flow

### 1. Home Page
- **Starting Point**: Landing page with AIDA branding
- **Action**: Click the "Sign In" button to proceed to authentication

### 2. Sign In Page
- **Purpose**: User authentication interface
- **Action**: Click "Sign In (Click to Continue)" button
- **Note**: Accepts any credentials for prototype purposes

### 3. Dashboard MVP
The main dashboard with three expandable sections:

#### Cases to Review
- Click the section header to expand/collapse
- When expanded, displays a list of frozen cases awaiting review
- Click any case number (e.g., FR-2024-001) to view case details

#### Recently Resolved Cases
- Click the section header to expand/collapse
- Shows cases that have been recently processed
- Click any case number to view case details

#### All Pending Cases
- Click the section header to expand/collapse
- Displays all cases in the system
- Click "View & Edit" buttons to review specific cases

### 4. Review & Edit Frozen Cases Page
Detailed case review interface with:

- **Case Header**: Displays case ID and owner information
- **Case Details**: Form fields showing case metadata
- **Facts Section**: 
  - Editable text areas for case facts
  - Issue tags that can be toggled
  - "Delete Fact" buttons
  - "Additional Fact" button to add new facts
- **Evidence Section**: Large text area for evidence documentation
- **Action Buttons**:
  - "Back to Dashboard": Returns to main dashboard
  - "Send to Examiner to Unfreeze": Opens confirmation dialog
  - "Confirm & Send Back": Completes the action and returns to dashboard

## Design Features

### Clean, Professional Interface
- Modern card-based layout
- Consistent spacing and typography
- Professional color scheme (blue primary, gray neutrals)
- Clear visual hierarchy

### Interactive Elements
- Hover states on all clickable elements
- Smooth transitions between states
- Clear visual feedback for user actions
- Expandable/collapsible sections

### Responsive Design
- Adapts to different screen sizes
- Maintains usability across devices
- Flexible layouts with proper constraints

## Technical Implementation

### Technology Stack
- **React 18**: Component-based UI framework
- **React Router**: Client-side routing
- **Tailwind CSS**: Utility-first styling
- **Vite**: Build tool and dev server

### Key Components
- `HomePage.jsx`: Landing page with sign-in CTA
- `SignInPage.jsx`: Authentication interface
- `DashboardPage.jsx`: Main dashboard with expandable sections
- `ReviewCasePage.jsx`: Detailed case review interface

### Assets
All images from the original Figma design are properly imported and optimized as WebP format for fast loading.

## User Testing Notes

1. **Navigation is intuitive**: Users can easily move between pages
2. **Clear CTAs**: All buttons and interactive elements are clearly labeled
3. **Visual feedback**: Hover states and transitions provide clear feedback
4. **Consistent patterns**: Similar actions work the same way throughout

## Future Enhancements

Potential features for a production version:
- Real authentication system
- Backend API integration
- Data persistence
- Advanced search and filtering
- User role management
- Audit logging
- Export functionality
- Real-time collaboration

## Development

### Running Locally
```bash
cd /home/ubuntu/aida-dashboard
pnpm install
pnpm run dev
```

### Building for Production
```bash
pnpm run build
```

### Deploying
The application is deployed using the Manus deployment system, which handles building and hosting automatically.

