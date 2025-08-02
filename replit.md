# Portfolio Website Project

## Overview

This project is a personal portfolio website for Yugeshwaran G, a full-stack developer and technology enthusiast. The website showcases his skills, education, projects, and provides a contact form for potential employers or collaborators. Built as a modern single-page application, it features a clean, professional design with smooth scrolling navigation and responsive layout.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
The frontend is built using React with TypeScript, utilizing a component-based architecture. The application uses Vite as the build tool for fast development and optimized production builds. The UI is constructed with shadcn/ui components built on top of Radix UI primitives, providing accessible and customizable interface elements.

**Key Frontend Decisions:**
- **React Router Alternative**: Uses Wouter for lightweight client-side routing
- **State Management**: TanStack Query for server state management, avoiding complex global state solutions
- **Styling**: Tailwind CSS with CSS custom properties for theming, enabling consistent design system
- **Component Library**: shadcn/ui for pre-built, accessible components that can be customized

### Backend Architecture
The backend follows a simple Express.js REST API pattern with a modular structure. The server handles API routes, serves static files in production, and includes development-specific Vite integration for hot module replacement.

**Key Backend Decisions:**
- **Storage Strategy**: Currently uses in-memory storage (MemStorage) for development/demo purposes, with an interface (IStorage) that allows easy migration to database implementations
- **API Design**: RESTful endpoints with proper error handling and validation using Zod schemas
- **Development Setup**: Integrated Vite middleware for seamless full-stack development experience

### Data Layer
The project uses Drizzle ORM with PostgreSQL for database operations, though currently implements an in-memory storage layer for development. The schema is defined in TypeScript with Zod validation for type safety across the application.

**Database Design:**
- **Users Table**: Basic user authentication structure (prepared for future features)
- **Contact Submissions**: Stores form submissions with validation
- **Schema Validation**: Drizzle Zod integration ensures type consistency between database and application logic

### Styling and Design System
The application implements a comprehensive design system using Tailwind CSS with custom color variables defined in CSS custom properties. This approach allows for easy theming and consistent visual hierarchy.

**Design Decisions:**
- **Color System**: Custom color palette with semantic naming (primary, secondary, accent)
- **Typography**: Responsive text sizing with proper contrast ratios
- **Layout**: CSS Grid and Flexbox for responsive layouts
- **Component Variants**: Class Variance Authority for consistent component styling patterns

## External Dependencies

### Core Framework Dependencies
- **React 18**: Modern React with hooks and concurrent features
- **TypeScript**: Type safety across the entire application
- **Express.js**: Node.js web framework for the backend API
- **Vite**: Build tool and development server

### Database and ORM
- **Drizzle ORM**: Type-safe database operations with PostgreSQL
- **@neondatabase/serverless**: Serverless PostgreSQL driver
- **Drizzle Kit**: Database migrations and schema management

### UI and Styling
- **Tailwind CSS**: Utility-first CSS framework
- **Radix UI**: Headless, accessible UI primitives
- **shadcn/ui**: Pre-built component library
- **Lucide React**: Icon library for consistent iconography
- **Class Variance Authority**: Component variant management

### Form and Validation
- **React Hook Form**: Performant form library with minimal re-renders
- **Zod**: Runtime type validation and schema parsing
- **@hookform/resolvers**: Integration between React Hook Form and Zod

### Development and Tooling
- **tsx**: TypeScript execution for development
- **esbuild**: Fast JavaScript bundler for production builds
- **@replit/vite-plugin-runtime-error-modal**: Development error overlay
- **@replit/vite-plugin-cartographer**: Replit-specific development tooling

### State Management and Data Fetching
- **TanStack React Query**: Server state management and caching
- **Wouter**: Lightweight client-side routing

The architecture prioritizes developer experience, type safety, and performance while maintaining simplicity and ease of deployment. The modular design allows for easy scaling and feature additions as the portfolio grows.