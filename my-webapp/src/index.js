import React from 'react';
import App from "./App";
import './index.css';
import reportWebVitals from './reportWebVitals';
import 'firebase/firestore';
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";
import 'firebase/firestore';
import firebaseConfig from './firebaseConfig';
import { createRoot } from 'react-dom/client';
import "./index.css";
import { AuthProvider } from './providers/AuthContext';

const defaultTheme = require('tailwindcss/defaultTheme')

const app = initializeApp(firebaseConfig);
getAnalytics(app);

const container = document.getElementById('app');
const root = createRoot(container);

root.render(<React.StrictMode><AuthProvider><App/></AuthProvider></React.StrictMode>);

reportWebVitals();
