/**
 * @file Config.utility.js
 * @module Core/Configuration
 * @description
 * Single source of truth for environment-specific application configuration.
 *
 * Centralizes critical settings such as:
 * - Backend API base URL (switches between local development and production environments)
 * - Future extensibility for other service endpoints, feature flags, or app constants
 *
 * Usage pattern:
 * - Import and use CONFIG.BACKEND_API_URL in all API service layers
 * - Easily toggle between local dev server and deployed production backend
 *   by commenting/uncommenting the appropriate line
 */

const CONFIG = {
  /** Dev Backend API Url */
  BACKEND_API_URL: 'http://10.0.2.2:8000/api', //address for emulator 
  /** Prod Backend API Url */
  // BACKEND_API_URL: 'https://the-hope-backend-vert.vercel.app/api',
};

export default CONFIG;
