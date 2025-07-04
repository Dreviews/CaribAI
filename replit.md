# CaribAI - AI-Enhanced E-Commerce Platform

## Overview

CaribAI is a full-stack web application designed to provide AI-powered e-commerce solutions and digital transformation services specifically for Caribbean businesses. The platform serves as both a marketing website and a lead generation system, featuring contact form functionality and service showcases.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Styling**: Tailwind CSS with custom CSS variables for theming
- **UI Components**: Radix UI primitives with shadcn/ui component library
- **Routing**: Wouter for client-side routing
- **State Management**: TanStack Query for server state management
- **Form Handling**: React Hook Form with Zod validation
- **Build Tool**: Vite for fast development and optimized builds

### Backend Architecture
- **Runtime**: Node.js with Express.js server
- **Language**: TypeScript with ESNext modules
- **Database**: PostgreSQL with Drizzle ORM
- **Database Provider**: Neon Database (serverless PostgreSQL)
- **Session Management**: PostgreSQL session store with connect-pg-simple
- **API Design**: RESTful API with JSON responses

### Development Environment
- **Replit Integration**: Configured for Replit development with live reload
- **Hot Module Replacement**: Vite HMR for development
- **Error Handling**: Runtime error modal for development debugging

## Key Components

### Frontend Components
1. **Landing Page Sections**:
   - Hero section with call-to-action
   - Services showcase
   - About section with company information
   - Contact form with validation
   - Footer with navigation links

2. **UI System**:
   - Comprehensive component library based on Radix UI
   - Dark theme with neon accent colors (blue, green, coral)
   - Responsive design with mobile-first approach
   - Custom animations and hover effects

3. **Form Management**:
   - Contact form with real-time validation
   - Success/error toast notifications
   - Form submission handling with API integration

### Backend Components
1. **API Routes**:
   - POST /api/contact - Contact form submission
   - GET /api/contact - Retrieve contact submissions (admin)

2. **Data Models**:
   - Users table (for future authentication)
   - Contact submissions table for lead management

3. **Storage Layer**:
   - Abstract storage interface for database operations
   - In-memory storage implementation for development
   - Production-ready PostgreSQL integration

## Data Flow

1. **Contact Form Submission**:
   - User fills out contact form on frontend
   - Form validates data using Zod schema
   - Validated data sent to backend API
   - Backend validates and stores submission in database
   - Success/error response sent back to frontend
   - Toast notification displayed to user

2. **Database Operations**:
   - Drizzle ORM handles database queries
   - Schema validation ensures data integrity
   - Automatic timestamp tracking for submissions

## External Dependencies

### Frontend Dependencies
- **React Ecosystem**: React, React DOM, React Hook Form
- **UI Libraries**: Radix UI components, Lucide React icons
- **Styling**: Tailwind CSS, class-variance-authority, clsx
- **State Management**: TanStack Query
- **Validation**: Zod with drizzle-zod integration
- **Routing**: Wouter
- **Date Handling**: date-fns

### Backend Dependencies
- **Server**: Express.js
- **Database**: Drizzle ORM, @neondatabase/serverless
- **Session**: connect-pg-simple
- **Validation**: Zod
- **Development**: tsx for TypeScript execution

### Build and Development
- **Build Tool**: Vite with React plugin
- **TypeScript**: Full TypeScript support
- **ESBuild**: Backend bundling for production
- **PostCSS**: CSS processing with Tailwind and Autoprefixer

## Deployment Strategy

### Build Process
1. **Frontend Build**: Vite builds React app to `dist/public`
2. **Backend Build**: ESBuild bundles server code to `dist/index.js`
3. **Database Migration**: Drizzle Kit handles schema migrations

### Environment Configuration
- **Development**: Uses tsx for direct TypeScript execution
- **Production**: Runs compiled JavaScript with Node.js
- **Database**: Requires `DATABASE_URL` environment variable

### File Structure
```
├── client/          # Frontend React application
├── server/          # Backend Express server
├── shared/          # Shared TypeScript schemas
├── migrations/      # Database migration files
└── dist/           # Production build output
```

## Changelog

```
Changelog:
- July 04, 2025. Initial setup
```

## User Preferences

```
Preferred communication style: Simple, everyday language.
```