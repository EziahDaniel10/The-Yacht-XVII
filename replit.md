# Yacht XVII - Luxury Yacht Charter Website

## Overview

Yacht XVII is a luxury yacht charter website for a Washington DC-based yacht charter company. The application provides an elegant, premium experience for users to explore charter packages, view the vessel, browse a photo gallery, and submit booking inquiries. Built as a full-stack TypeScript application with React frontend and Express backend, it features a sophisticated design with gold and white color palette, serif typography for headings, and smooth animations throughout.

## Recent Changes (Jan 31, 2026)

- **Simplified Booking Page**: Converted from multi-step flow to single-step reservation form
- **New Menu Page**: Created dedicated `/menu` page for Chef B Meals catering options
  - Brunch packages ($60-$100/person) with seafood upgrades and beverages
  - Lunch/Dinner packages ($45-$110/person) with seafood upgrades
  - Pre-order button shows prompt directing users to make a reservation first
- **Gallery Updates**: Added 7 new lifestyle images and 2 featured videos
- **Navigation**: Added "Menu" link between Gallery and Experiences

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Routing**: Wouter (lightweight React router)
- **Styling**: Tailwind CSS with custom luxury theme configuration
- **UI Components**: shadcn/ui component library built on Radix UI primitives
- **State Management**: TanStack React Query for server state
- **Animations**: Framer Motion for page transitions and scroll animations
- **Form Handling**: React Hook Form with Zod validation via @hookform/resolvers
- **Build Tool**: Vite with custom plugins for Replit integration

### Backend Architecture
- **Runtime**: Node.js with Express 5
- **Language**: TypeScript compiled with tsx
- **API Design**: RESTful endpoints defined in shared routes module
- **Validation**: Zod schemas shared between client and server for type-safe API contracts

### Data Storage
- **Database**: PostgreSQL
- **ORM**: Drizzle ORM with drizzle-zod for schema-to-validation integration
- **Schema Location**: `shared/schema.ts` contains all database table definitions
- **Migrations**: Managed via drizzle-kit with `db:push` command

### Key Design Patterns
- **Monorepo Structure**: Client (`client/`), server (`server/`), and shared code (`shared/`) in single repository
- **Shared Types**: Database schemas and API route definitions shared between frontend and backend
- **Type-Safe API**: Route definitions include input/output Zod schemas ensuring full type safety
- **Component-Based UI**: Modular React components with consistent styling via shadcn/ui

### Project Structure
```
├── client/           # React frontend
│   ├── src/
│   │   ├── components/  # Reusable UI components
│   │   ├── pages/       # Route pages (Home, About, Yacht, etc.)
│   │   ├── hooks/       # Custom React hooks
│   │   └── lib/         # Utilities and query client
├── server/           # Express backend
│   ├── index.ts      # Server entry point
│   ├── routes.ts     # API route handlers
│   ├── storage.ts    # Database operations
│   └── db.ts         # Database connection
├── shared/           # Shared code
│   ├── schema.ts     # Drizzle database schemas
│   └── routes.ts     # API route definitions
└── migrations/       # Database migrations
```

## External Dependencies

### Database
- **PostgreSQL**: Primary database, connection via `DATABASE_URL` environment variable
- **connect-pg-simple**: Session storage for PostgreSQL (available but sessions not currently implemented)

### UI Component Libraries
- **Radix UI**: Full suite of accessible, unstyled primitives (dialog, dropdown, accordion, etc.)
- **shadcn/ui**: Pre-styled component layer on Radix with New York style variant
- **Embla Carousel**: Image carousel for gallery and yacht pages
- **react-day-picker**: Calendar component for booking date selection

### Styling & Animation
- **Tailwind CSS**: Utility-first CSS framework with custom luxury theme
- **Framer Motion**: Animation library for page transitions and scroll effects
- **class-variance-authority**: Component variant management
- **tailwind-merge**: Intelligent Tailwind class merging

### Form & Validation
- **Zod**: Schema validation used across client and server
- **React Hook Form**: Form state management
- **drizzle-zod**: Automatic Zod schema generation from Drizzle tables

### Fonts
- **Google Fonts**: Playfair Display (serif headings) and Lato (sans-serif body)
- Loaded via Google Fonts CDN in `client/index.html`

### Development Tools
- **Vite**: Frontend build tool with HMR
- **esbuild**: Server bundling for production
- **drizzle-kit**: Database schema management and migrations