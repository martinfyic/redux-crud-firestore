import {
	GoogleAuthProvider,
	createUserWithEmailAndPassword,
	signInWithEmailAndPassword,
	signInWithPopup,
	updateProfile,
} from 'firebase/auth';
import { FirebaseAuth } from './config';

const googleProvider = new GoogleAuthProvider();

export const singInWithGoogle = async () => {
	try {
		const result = await signInWithPopup(FirebaseAuth, googleProvider);
		const { displayName, email, photoURL, uid } = result.user;

		return {
			ok: true,
			displayName,
			email,
			photoURL,
			uid,
		};
	} catch (error) {
		const errorCode = error.code;
		const errorMessage = error.message;
		return {
			ok: false,
			errorCode,
			errorMessage,
		};
	}
};

export const registerUserWithEmailPassword = async ({
	email,
	password,
	displayName,
}) => {
	try {
		const result = await createUserWithEmailAndPassword(
			FirebaseAuth,
			email,
			password
		);
		const { uid, photoURL } = result.user;

		await updateProfile(FirebaseAuth.currentUser, { displayName });

		return {
			ok: true,
			uid,
			photoURL,
			email,
			displayName,
		};
	} catch (error) {
		const errorCode = error.code;
		const errorMessage = error.message;
		return {
			ok: false,
			errorCode,
			errorMessage,
		};
	}
};

export const loginWithEmailPassword = async ({ email, password }) => {
	try {
		const result = await signInWithEmailAndPassword(
			FirebaseAuth,
			email,
			password
		);
		const { photoURL, uid, displayName } = result.user;

		return {
			ok: true,
			uid,
			photoURL,
			displayName,
		};
	} catch (error) {
		const errorCode = error.code;
		const errorMessage = error.message;
		return {
			ok: false,
			errorCode,
			errorMessage,
		};
	}
};

export const logoutFirebase = async () => {
	return await FirebaseAuth.signOut();
};
