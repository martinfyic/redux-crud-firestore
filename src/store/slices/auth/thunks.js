import {
	loginWithEmailPassword,
	registerUserWithEmailPassword,
	singInWithGoogle,
	logoutFirebase,
} from '../../../firebase';
import { checkingCredentials, logout, login } from './authSlice';

export const checkingAuthentication = () => {
	return async dispatch => {
		dispatch(checkingCredentials());
	};
};

export const startGoogleSignIn = () => {
	return async dispatch => {
		dispatch(checkingCredentials());
		const result = await singInWithGoogle();
		if (!result.ok) return dispatch(logout(result.errorMessage));

		dispatch(login(result));
	};
};

export const startCreatingUserWithEmailPassword = ({
	email,
	password,
	displayName,
}) => {
	return async dispatch => {
		dispatch(checkingCredentials());

		const { ok, uid, photoURL, errorMessage } =
			await registerUserWithEmailPassword({
				email,
				password,
				displayName,
			});
		if (!ok) return dispatch(logout({ errorMessage }));

		dispatch(login({ uid, photoURL, displayName, email }));
	};
};

export const startLoginWithEmailPassword = ({ email, password }) => {
	return async dispatch => {
		dispatch(checkingCredentials());
		const result = await loginWithEmailPassword({
			email,
			password,
		});
		if (!result.ok) return dispatch(logout(result));

		dispatch(login(result));
	};
};

export const startLogOut = () => {
	return async dispatch => {
		await logoutFirebase();
		dispatch(logout({ errorMessage: null }));
	};
};
