# 🚀 Apna.co Job Application Tracker

A real-time job application management system designed to eliminate the "application black hole." It provides instant submission feedback for candidates and a high-efficiency dashboard with batch status controls for recruiters.

---

## 🛠️ Tech Stack

- **Framework:** Next.js (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS & Lucide Icons
- **Database:** PostgreSQL
- **ORM:** Prisma ORM

---

## ✨ Features

- **Candidate Hub (`/`):**
  - Instant application submission with default `PENDING` status.
  - Real-time session tracker to monitor status updates without page reloads.
- **Recruiter Pipeline (`/employer`):**
  - High-density data table displaying candidate pipelines chronologically.
  - Multi-select checkboxes for individual or select-all candidate management.
  - Contextual floating action bar to perform batch status updates (`VIEWED`, `APPROVED`, `REJECTED`).
- **Type-Safe API Architecture:**
  - RESTful Next.js Route Handlers utilizing Prisma query abstraction (`findMany`, `create`, `updateMany`).

---

## 📁 Project Structure

```text
├── app/
│   ├── api/
│   │   └── applications/
│   │       ├── route.ts              # GET (all) & POST (create)
│   │       └── batch-update/
│   │           └── route.ts          # PATCH (bulk status update)
│   ├── employer/
│   │   └── page.tsx                  # Recruiter table & batch action UI
│   ├── page.tsx                      # Candidate application submission UI
│   ├── layout.tsx                    # Root layout
│   └── globals.css                   # Tailwind styles
├── lib/
│   └── prisma.ts                     # Prisma client singleton
├── prisma/
│   └── schema.prisma                 # PostgreSQL database schema & enums
└── .env                              # Environment variables (DATABASE_URL)