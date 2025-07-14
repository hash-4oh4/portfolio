# Replit Project Documentation

## Overview

This is a frontend-only cybersecurity portfolio website built with React, featuring a modern design with cybersecurity themes. The application showcases a student's education, experience, projects, skills, and includes a static blog and contact system.

## User Preferences

Preferred communication style: Simple, everyday language.

## Recent Changes

- **Converted to Frontend-Only**: Removed all backend dependencies (Express, database, API routes)
- **Static Blog Data**: Created BLOG_DATA in constants.ts with cybersecurity articles
- **Frontend Contact Form**: Simple form validation and success states without backend
- **Removed React Query**: Eliminated server state management for static data
- **Deployment Ready**: Added Netlify/Vercel configuration and comprehensive README
- **Fixed typing animation bug** on quote/tagline text
- **Removed light theme completely** (user preference: "light theme is horrible")
- **Kept only dark theme**: Black background, white text, green accents
- **Removed theme toggle functionality** from navigation
- **Applied console styling consistently** across navigation and headings
- **Removed decorative icons** for cleaner aesthetic
- **Single dark theme** with cybersecurity color scheme throughout

## System Architecture

### Frontend Architecture
- **Framework**: React with TypeScript
- **Build Tool**: Vite for development and production builds
- **Routing**: Wouter for client-side routing
- **State Management**: React hooks for local state
- **Styling**: Tailwind CSS with custom cybersecurity theme
- **UI Components**: Radix UI primitives with shadcn/ui components
- **Data**: Static data stored in constants.ts file

### Deployment Architecture
- **Type**: Static site deployment (JAMstack)
- **Build Output**: Static HTML, CSS, and JavaScript files
- **Hosting**: Compatible with Netlify, Vercel, GitHub Pages, etc.
- **Configuration**: Includes _redirects for SPA routing

## Key Components

### Database Schema
- **Users**: Basic user management with username/password
- **Blog Posts**: Articles with title, content, tags, and metadata
- **Contact Messages**: Form submissions with name, email, subject, and message

### Frontend Components
- **Hero Section**: Animated cybersecurity-themed landing with typing effect
- **Navigation**: Responsive navigation with smooth scrolling
- **Education**: Degree information and certification status
- **Experience**: Timeline-based work experience display
- **Projects**: Portfolio showcase with images and technologies
- **Skills**: Technical skills with proficiency levels
- **Blog**: Article listing with loading states
- **Contact**: Form submission with validation
- **Matrix Rain**: Animated background effect

### UI System
- **Theme**: Dark/light mode support with cybersecurity color scheme
- **Components**: Comprehensive UI component library based on Radix UI
- **Responsive**: Mobile-first design with breakpoint handling
- **Animations**: Smooth transitions and interactive elements

## Data Flow

### Client-Server Communication
1. Frontend makes API requests using React Query
2. Express server handles REST endpoints
3. Data validation using Zod schemas
4. Database operations through Drizzle ORM
5. Response formatting and error handling

### State Management
- Server state managed by React Query with caching
- Local state using React hooks
- Theme state persisted in localStorage
- Form state managed by React Hook Form

## External Dependencies

### Core Libraries
- **React**: UI framework
- **Express**: Backend server
- **Drizzle ORM**: Database operations
- **Zod**: Schema validation
- **Tailwind CSS**: Styling framework
- **Radix UI**: Accessible UI primitives

### Database
- **PostgreSQL**: Primary database (via Neon serverless)
- **Drizzle Kit**: Database migrations and management

### Development Tools
- **Vite**: Build tool and dev server
- **TypeScript**: Type safety
- **ESBuild**: Production bundling

## Deployment Strategy

### Build Process
1. Frontend builds to `dist/public` directory
2. Backend builds to `dist/index.js` using ESBuild
3. Database migrations handled by Drizzle Kit

### Environment Setup
- Database URL required for PostgreSQL connection
- Development/production environment detection
- Static file serving in production

### Development Workflow
- Hot reloading for both frontend and backend
- Integrated development server with proxy
- Database schema synchronization with `db:push`

### Production Considerations
- Static file serving from Express
- Database connection pooling
- Error handling and logging
- Environment variable management

## Notable Features

### Storage Architecture
- Memory storage implementation for development
- Database storage interface for production
- Sample data initialization for blog posts

### Security Considerations
- Input validation with Zod schemas
- SQL injection protection via Drizzle ORM
- CORS and security headers (to be implemented)

### Performance Optimizations
- React Query caching strategies
- Vite development optimizations
- Bundle splitting for production
- Image optimization considerations

### Accessibility
- Radix UI components for accessibility
- Semantic HTML structure
- Keyboard navigation support
- Screen reader considerations