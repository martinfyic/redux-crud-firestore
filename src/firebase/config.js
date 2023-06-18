// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore/lite';

const firebaseConfig = {
	apiKey: import.meta.env.VITE_API_KEY_DB,
	authDomain: import.meta.env.VITE_AUTH_DOMAIN_DB,
	projectId: import.meta.env.VITE_PROJECT_ID_DB,
	storageBucket: import.meta.env.VITE_STORAGE_BUCKET_DB,
	messagingSenderId: import.meta.env.VITE_MESSAGIN_SENDER_ID_DB,
	appId: import.meta.env.VITE_APP_ID_DB,
};

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth(FirebaseApp);
export const FirebaseDB = getFirestore(FirebaseApp);
