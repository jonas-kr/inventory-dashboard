# Inventory Management System

A modern, responsive inventory management dashboard designed for business efficiency. This application provides a high-level overview of sales, purchases, and expenses using interactive data visualizations.

## 📦 Project Overview

This project is a sophisticated dashboard for managing inventory and tracking business performance. It features a clean UI with a focus on data clarity and user experience.

![Dashboard Preview](client/homePage.png)

## 🚀 Key Features

- **Comprehensive Dashboard**: Centralized view of all critical business metrics.
- **Visual Analytics**: Interactive charts for Sales and Purchase summaries using Recharts.
- **Expense Tracking**: Visual breakdown of expenses to monitor business costs.
- **Product Insights**: List of popular products with ratings and stock status.
- **Metric Highlights**: Quick-glance stat cards for customer growth, pending orders, and dues.
- **Modern UI/UX**: Built with Tailwind CSS and Material UI for a professional feel.
- **Responsive Layout**: Fully functional across desktop, tablet, and mobile devices.

## 🛠️ Tech Stack

### Frontend
- **Framework**: [React](https://reactjs.org/) with [Vite](https://vitejs.dev/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **UI Components**: [Material UI (MUI)](https://mui.com/)
- **Charts**: [Recharts](https://recharts.org/)
- **State Management**: [Redux Toolkit](https://redux-toolkit.js.org/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Routing**: [React Router](https://reactrouter.com/)

## 🏁 Getting Started

### Prerequisites
- [Node.js](https://nodejs.org/) (v18 or higher)
- npm or yarn

### Installation

1. **Clone the repository**:
   ```bash
   git clone <your-repo-url>
   cd invetory-management
   ```

2. **Setup the Client**:
   ```bash
   cd client
   npm install
   ```

3. **Run the Development Server**:
   ```bash
   npm run dev
   ```

The application will be available at `http://localhost:5173`.

## 📜 Available Scripts

In the `client` directory, you can run:

- `npm run dev`: Starts the Vite development server.
- `npm run build`: Compiles the application for production.
- `npm run lint`: Runs ESLint to check for code quality issues.
- `npm run preview`: Locally previews the production build.

## 📂 Project Structure

```text
invetory-management/
├── client/
│   ├── src/
│   │   ├── components/  # Reusable UI components (Charts, Cards, etc.)
│   │   ├── pages/       # Page components (Dashboard, Layout)
│   │   ├── App.jsx      # Main application routing
│   │   └── main.jsx     # Entry point
│   ├── public/          # Static assets
│   └── package.json     # Client dependencies and scripts
└── README.md            # Project documentation
```

---

*Note: This project is currently in the frontend development phase, utilizing mock data for visualizations.*
