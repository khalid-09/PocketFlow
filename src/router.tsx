import { createBrowserRouter } from 'react-router-dom';

// layouts
import RootLayout from './layouts/RootLayout';
import LandingLayout from './layouts/LandingLayout';
import AuthLayout from './layouts/AuthLayout';
import DashboardLayout from './layouts/DashboardLayout';

// pages
import Landing from './pages/Landing';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import ResetPassword from './pages/ResetPassword';

import Dashboard from './pages/Dashboard';

import Expenses from './pages/Expenses';
import CreateExpense from './pages/CreateExpense';
import EditExpense from './pages/EditExpense';

import Incomes from './pages/Incomes';
import CreateIncome from './pages/CreateIncome';
import EditIncome from './pages/EditIncome';
import Categories from './pages/Categories';
import Profile from './pages/Profile';

const router = createBrowserRouter([
  {
    element: <RootLayout />,
    children: [
      {
        element: <LandingLayout />,
        children: [
          {
            path: '/',
            element: <Landing />,
          },
          {
            element: <AuthLayout />,
            children: [
              {
                path: '/login',
                element: <Login />,
              },
              {
                path: '/signup',
                element: <SignUp />,
              },
              {
                path: '/reset-password',
                element: <ResetPassword />,
              },
            ],
          },
        ],
      },

      // DASHBOARD
      {
        path: '/dashboard',
        element: <DashboardLayout />,
        children: [
          {
            index: true,
            element: <Dashboard />,
          },
          {
            path: 'expenses',
            children: [
              {
                index: true,
                element: <Expenses />,
              },
              {
                path: 'create',
                element: <CreateExpense />,
              },
              {
                path: ':id/edit',
                element: <EditExpense />,
              },
            ],
          },

          {
            path: 'incomes',
            children: [
              {
                index: true,
                element: <Incomes />,
              },
              {
                path: 'create',
                element: <CreateIncome />,
              },
              {
                path: ':id/edit',
                element: <EditIncome />,
              },
            ],
          },
          {
            path: 'category',
            element: <Categories />,
          },
          {
            path: 'profile',
            element: <Profile />,
          },
        ],
      },
    ],
  },
]);

export default router;
