# Backend Scaffold for BusinessFlow Sage

## Overview
This directory contains the backend scaffold for the BusinessFlow Sage application, built using Node.js, TypeScript, Express, and Prisma.

## Technologies Used
- Node.js
- TypeScript
- Express
- Prisma (Postgres)

## Features
- Multi-tenancy support
- Role-Based Access Control (RBAC)
- Two-Factor Authentication (TOTP + Email)
- Audit logs
- Subscription plans and organizations

## Directory Structure
- `src/`: Contains the main application code.
- `prisma/`: Contains the Prisma schema and configuration.
- `.env.example`: Environment variable template.

## Installation
1. Clone the repository.
2. Navigate to the `/backend` directory.
3. Install dependencies:
   ```bash
   npm install
   ```
4. Set up your environment variables by copying `.env.example` to `.env` and filling in the required values.
5. Run the application:
   ```bash
   npm start
   ```

## Development
For development, you can run:
```bash
npm run dev
```
This will start the server in watch mode.

## Contributing
Please open an issue or submit a pull request for any changes or improvements.

---