# COREX

COREX — Premium Digital Solutions

This repository is a Next.js 15 + TypeScript + Tailwind CSS scaffold for the COREX landing site.

Quick start

1. Clone the repo

   git clone https://github.com/CoreX-CX/CoreX.git
   cd CoreX

2. Install dependencies

   npm install

3. Create Supabase project and table

   - Create a Supabase project at https://app.supabase.com/
   - Create a table named `requests` with columns:
     - id (uuid or bigint) - primary key
     - name (text)
     - email (text)
     - service (text)
     - budget (text)
     - description (text)
     - created_at (timestamp) default: now()

4. Add environment variables

   Create a `.env.local` file in the project root and add:

   SUPABASE_URL=your-supabase-url
   SUPABASE_SERVICE_ROLE_KEY=your-service-role-key

   Note: For production, store the service role key securely (use server-side only). The API route uses the service role key to insert data.

5. Run the development server

   npm run dev

6. Open http://localhost:3000 in your browser

What's included

- Next.js 15 (App Router)
- TypeScript
- Tailwind CSS
- Dark theme, glassmorphism, neon accents
- Pages: Home, Services, Login, Register, Request
- Components: Hero, Services, WhyChoose, ContactCTA, Footer

Notes

- The project uses Tailwind CSS via PostCSS. The Tailwind config is at `tailwind.config.js` and the entry CSS is `app/globals.css`.
- The Request form submits to `/api/requests` which stores submissions in your Supabase project's `requests` table.

Recommended Node version

- Node.js 18+ (LTS)

Building for production

1. Build

   npm run build

2. Start

   npm run start

Contributions

If you'd like changes to the design, colors, or behavior (auth, forms, API routes), open an issue or create a PR.

License

MIT
