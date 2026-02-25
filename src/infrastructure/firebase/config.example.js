// src/infrastructure/firebase/config.example.js
// Copy this file to `config.js` or better: create a `.env.local` with the REACT_APP_FIREBASE_* values.
// Example .env.local (DO NOT commit .env.local):
// REACT_APP_FIREBASE_API_KEY=your_api_key
// REACT_APP_FIREBASE_AUTH_DOMAIN=your_project.firebaseapp.com
// REACT_APP_FIREBASE_PROJECT_ID=your_project_id
// REACT_APP_FIREBASE_STORAGE_BUCKET=your_project.appspot.com
// REACT_APP_FIREBASE_MESSAGING_SENDER_ID=your_messaging_sender_id
// REACT_APP_FIREBASE_APP_ID=your_app_id
// REACT_APP_FIREBASE_MEASUREMENT_ID=G-XXXXXXXXXX

const firebaseConfigExample = {
  apiKey: 'REACT_APP_FIREBASE_API_KEY',
  authDomain: 'REACT_APP_FIREBASE_AUTH_DOMAIN',
  projectId: 'REACT_APP_FIREBASE_PROJECT_ID',
  storageBucket: 'REACT_APP_FIREBASE_STORAGE_BUCKET',
  messagingSenderId: 'REACT_APP_FIREBASE_MESSAGING_SENDER_ID',
  appId: 'REACT_APP_FIREBASE_APP_ID',
  measurementId: 'REACT_APP_FIREBASE_MEASUREMENT_ID',
};

export default firebaseConfigExample;
