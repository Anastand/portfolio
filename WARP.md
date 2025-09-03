# WARP.md

This file provides guidance to WARP (warp.dev) when working with code in this repository.

## Project Overview

This is a Next.js 15 portfolio application built with React 19, TypeScript, and Tailwind CSS v4. The project uses Turbopack for fast development builds and follows the modern Next.js App Router architecture.

## Development Commands

### Core Development
```bash
# Start development server with Turbopack
npm run dev

# Build for production with Turbopack
npm run build

# Start production server
npm run start

# Run ESLint
npm run lint
```

### Development Server
- Development server runs on `http://localhost:3000`
- Uses Turbopack for faster builds and hot reloading
- Auto-updates on file changes in `src/app/`

## Architecture & Structure

### Tech Stack
- **Framework**: Next.js 15 with App Router
- **React**: 19.1.0 (latest)
- **Build Tool**: Turbopack (Next.js's Rust-based bundler)
- **Styling**: Tailwind CSS v4 with PostCSS
- **TypeScript**: v5 with strict mode enabled
- **Fonts**: Geist Sans and Geist Mono from Google Fonts

### File Structure
```
src/
├── app/                    # App Router directory
│   ├── layout.tsx         # Root layout with fonts and metadata
│   ├── page.tsx           # Home page component
│   ├── globals.css        # Global styles with Tailwind and CSS custom properties
│   └── favicon.ico        # App icon
public/                    # Static assets (SVG icons)
```

### Key Architectural Patterns

**App Router Structure**: Uses Next.js 15 App Router with file-based routing in `src/app/`

**Font Optimization**: Implements `next/font/google` with Geist fonts loaded as CSS variables for optimal performance

**Styling System**: 
- Tailwind CSS v4 with PostCSS plugin
- CSS custom properties for theming (light/dark mode support)
- Font variables: `--font-geist-sans`, `--font-geist-mono`

**TypeScript Configuration**:
- Path aliases: `@/*` maps to `./src/*`
- Strict mode enabled
- Next.js plugin for enhanced TypeScript support

### Development Workflow

1. **Hot Reloading**: Turbopack provides instant updates during development
2. **Linting**: ESLint configured with Next.js TypeScript rules
3. **Type Safety**: Full TypeScript coverage with React 19 types
4. **Component Structure**: Currently minimal with layout and page components

### Build & Deployment

- **Build**: `npm run build` creates optimized production build
- **Output**: Static generation with Next.js optimizations
- **Deployment**: Configured for Vercel deployment (standard Next.js setup)

## Key Files to Understand

- `src/app/layout.tsx`: Root layout defining fonts, metadata, and global HTML structure
- `src/app/page.tsx`: Main page component (currently the default Next.js starter)
- `src/app/globals.css`: Global styles with Tailwind imports and CSS custom properties
- `next.config.ts`: Next.js configuration (minimal setup)
- `tsconfig.json`: TypeScript configuration with path aliases and Next.js plugin
