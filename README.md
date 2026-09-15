# Alisher React Portfolio

A modern, responsive developer portfolio built with **React, TypeScript, Vite, and Tailwind CSS**.

The project was created as a practical React learning and showcase project. It demonstrates modern frontend development concepts including reusable components, routing, form validation, API integration, server-state management, responsive design, theme switching, and user feedback.

The portfolio is designed as a **static frontend application** and does not require a custom backend server.

---

## ✨ Features

- Responsive developer portfolio
- Hero, About, Skills, Experience, Projects, and Contact sections
- Project listing and project details pages
- React Router navigation
- Dynamic project routes
- Light / Dark / System theme
- Theme persistence with `localStorage`
- Responsive mobile navigation
- Contact form
- Form validation with Zod
- Form handling with React Hook Form
- REST API integration with Axios
- Server-state management with TanStack Query
- GET and POST API examples
- Loading and error states
- Toast notifications with Sonner
- Reusable UI components
- shadcn/ui components
- Responsive layouts with Tailwind CSS
- Accessible focus states
- Hover and transition effects
- TypeScript type safety

---

## 🛠️ Tech Stack

### Frontend

- React
- TypeScript
- Vite
- Tailwind CSS
- React Router

### Forms & Validation

- React Hook Form
- Zod
- `@hookform/resolvers`

### API & Server State

- Axios
- TanStack Query
- JSONPlaceholder

### UI

- shadcn/ui
- Radix UI
- Lucide React
- Sonner

### State Management

- React Context API
- React `useState`

---

## 📁 Project Structure

```text
alisher-react-portfolio/
│
├── public/
│
├── src/
│   │
│   ├── api/
│   │   └── postsApi.ts
│   │
│   ├── components/
│   │   ├── ui/
│   │   ├── Navbar.tsx
│   │   ├── Hero.tsx
│   │   ├── About.tsx
│   │   ├── Skills.tsx
│   │   ├── Experience.tsx
│   │   ├── ExperienceCard.tsx
│   │   ├── Projects.tsx
│   │   ├── ProjectCard.tsx
│   │   ├── Contact.tsx
│   │   ├── PostForm.tsx
│   │   ├── Button.tsx
│   │   └── LinkButton.tsx
│   │
│   ├── context/
│   │   └── ThemeContext.tsx
│   │
│   ├── data/
│   │   └── projects.ts
│   │
│   ├── lib/
│   │   └── axios.ts
│   │
│   ├── pages/
│   │   ├── Home.tsx
│   │   ├── ProjectsPage.tsx
│   │   ├── ProjectDetailsPage.tsx
│   │   └── PostsPage.tsx
│   │
│   ├── types/
│   │   ├── project.ts
│   │   └── experience.ts
│   │
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css
│
├── .env
├── package.json
├── vite.config.ts
└── README.md
```

---

## 🚀 Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/flat07/alisher-react-portfolio.git
```

Navigate into the project:

```bash
cd alisher-react-portfolio
```

### 2. Install dependencies

```bash
npm install
```

### 3. Configure environment variables

Create a `.env` file in the project root:

```env
VITE_API_BASE_URL=https://jsonplaceholder.typicode.com
```

The project uses this variable as the base URL for Axios requests.

### 4. Start the development server

```bash
npm run dev
```

The application will be available at the local URL displayed by Vite.

---

## 🔌 API Integration

The portfolio does not have its own backend server.

Instead, a public mock REST API is used to demonstrate frontend API integration.

The current architecture is:

```text
React Component
       ↓
TanStack Query
       ↓
API Function
       ↓
Axios
       ↓
Mock REST API
```

For example, posts are loaded through:

```text
GET /posts
```

and new posts can be submitted through:

```text
POST /posts
```

The API integration demonstrates:

- Axios configuration
- REST API requests
- TypeScript API types
- TanStack Query
- Query caching
- Mutations
- Loading states
- Error states
- Success handling
- Toast notifications

### Important

The API used by this project is a **mock/testing API**. POST requests are simulated and are not intended to provide persistent production data.

The purpose of the integration is to demonstrate frontend API architecture without requiring a dedicated backend server.

---

## 🎨 Theme System

The application supports three theme modes:

- Light
- Dark
- System

Theme state is managed with the React Context API.

```text
ThemeContext
      ↓
ThemeProvider
      ↓
useTheme()
      ↓
Components
```

The selected theme is stored in `localStorage`, allowing the user's preference to persist between visits.

---

## 🧾 Forms & Validation

The contact form uses:

- React Hook Form
- Zod
- `@hookform/resolvers`

The validation flow is:

```text
User input
    ↓
React Hook Form
    ↓
Zod schema
    ↓
Validation
    ↓
Submit
```

Invalid data is rejected before it is submitted.

---

## 🔔 User Feedback

Sonner is used for toast notifications.

Examples include:

```text
✓ Message sent successfully
✓ Post created successfully
✕ Failed to create post
```

This provides immediate feedback after asynchronous operations.

---

## 📱 Responsive Design

The application follows a mobile-first responsive design approach using Tailwind CSS.

The layout adapts to:

- Mobile
- Tablet
- Laptop
- Desktop

Responsive behavior includes:

- Mobile navigation
- Responsive project grids
- Responsive typography
- Mobile-friendly forms
- Responsive buttons
- Adaptive spacing

---

## 🧩 Component Architecture

The project uses reusable React components rather than placing the entire application inside a single component.

For example:

```text
Projects
   ↓
ProjectCard
   ↓
LinkButton
```

This makes the UI easier to maintain and extend.

---

## 🧠 What I Practised

This project was built as a practical way to learn and demonstrate modern React development.

### React fundamentals

- Components
- Props
- `useState`
- Event handling
- Conditional rendering
- Lists and `.map()`
- Reusable components

### TypeScript

- Interfaces and type aliases
- Union types
- Optional properties
- Generic types
- Type inference
- API response typing

### React ecosystem

- React Router
- React Hook Form
- Zod
- Axios
- TanStack Query
- Context API
- shadcn/ui
- Sonner

### Frontend architecture

- Separation of UI and data
- API service functions
- Reusable components
- Server-state management
- Environment variables
- Loading and error handling

---

## 🏗️ Architecture

The main frontend architecture can be summarized as:

```text
                     React Application
                            │
             ┌──────────────┼──────────────┐
             │              │              │
          Pages         Components       Context
             │              │              │
             │              │         Theme Management
             │              │
             │         shadcn/ui
             │
       React Router
             │
             ↓
      TanStack Query
             │
             ↓
        API Layer
             │
             ↓
          Axios
             │
             ↓
      Mock REST API
```

---

## 📦 Build for Production

Create a production build:

```bash
npm run build
```

Preview the production build locally:

```bash
npm run preview
```

The production files are generated in:

```text
dist/
```

---

## 🌐 Deployment

The application is designed to be deployable as a static website.

The planned deployment target is:

**Surge**

Because the application does not require a custom backend, the React/Vite production build can be deployed as static files.

---

## 🔮 Future Improvements

Possible future improvements include:

- Add project filtering by technology
- Improve project detail pages
- Add more portfolio projects
- Add GitHub repository information
- Add better SEO metadata
- Add Open Graph metadata
- Add a custom domain
- Add a real contact service
- Add more accessibility improvements
- Add automated deployment
- Add unit/component tests

---

## 📌 Related Project

For a more complete full-stack example, see my **Hotel Reservation Dashboard**, which demonstrates a different architecture using React and Django.

That project focuses on:

- Django
- Django REST Framework
- PostgreSQL
- JWT authentication
- RBAC
- Celery
- Redis
- React
- TypeScript
- REST API integration

This portfolio project intentionally remains a static frontend application.

---

## 👨‍💻 About

I'm **Alisher Khalikulov**, a developer focused on building modern web applications with Python, Django, React, and TypeScript.

This project is part of my ongoing frontend development and React learning journey.

---

## 📄 License

This project is intended primarily as a personal portfolio and learning project.
