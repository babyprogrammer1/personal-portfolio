# Personal Portfolio

A modern portfolio built with Next.js, Tailwind CSS, Framer Motion, and EmailJS for contact form email delivery.

## Features

- Responsive design
- Animated transitions
- Contact form with email delivery via EmailJS
- Modular component structure

## Getting Started

### 1. Clone the repository

```bash
git clone <your-repo-url>
cd personal-portfolio
```

### 2. Install dependencies

```bash
npm install
# or
bun install
```

### 3. Set up EmailJS

- Go to [EmailJS](https://www.emailjs.com/) and create an account.
- Create an email service and email template.
- Get your **Service ID**, **Template ID**, and **Public Key** from the EmailJS dashboard.
- Update the contact form code with your EmailJS credentials.

### 4. Run the development server

```bash
npm run dev
# or
bun run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the app.

## Contact Form

- The contact form sends submissions to your email using EmailJS.
- All required fields must be filled.
- No backend API is required for the contact form.

## Deployment

Deploy on Vercel, Netlify, or any platform that supports Next.js.

## .gitignore

Sensitive files like `.env.local` are already ignored (see `.gitignore`).

---

**Built by Ayomide.**
