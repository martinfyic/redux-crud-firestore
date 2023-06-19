import { useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link as RouterLink } from 'react-router-dom';
import { Alert, Button, Grid, Link, TextField } from '@mui/material';
import { AuthLayout } from '../layout';
import { useForm } from '../../hooks';
import { startCreatingUserWithEmailPassword } from '../../store/slices/auth';

const formDate = {
	displayName: '',
	email: '',
	password: '',
};

const formValidations = {
	displayName: [value => value.length >= 3, 'Name is required'],
	email: [value => value.includes('@'), 'Must be a valid email'],
	password: [
		value => value.length >= 6,
		'Password must be more than 6 characters',
	],
};

export const RegisterPage = () => {
	const dispatch = useDispatch();
	const [formSubmited, setFormSubmited] = useState(false);

	const { status, errorMessage } = useSelector(state => state.auth);

	const isAuthenticating = useMemo(() => status === 'checking', [status]);

	const {
		formState,
		displayName,
		email,
		password,
		onInputChange,
		isFormValid,
		displayNameValid,
		emailValid,
		passwordValid,
	} = useForm(formDate, formValidations);

	const onSubmit = event => {
		event.preventDefault();
		setFormSubmited(true);

		if (!isFormValid) return;

		dispatch(startCreatingUserWithEmailPassword(formState));
	};

	return (
		<AuthLayout title='Sing Up'>
			<form
				action=''
				onSubmit={onSubmit}
			>
				<Grid container>
					<Grid
						item
						xs={12}
						sx={{ mt: 2 }}
					>
						<TextField
							label='Name'
							type='text'
							placeholder='Write your full name here'
							fullWidth
							name='displayName'
							onChange={onInputChange}
							value={displayName}
							error={!!displayNameValid && formSubmited}
							helperText={displayNameValid}
						/>
					</Grid>

					<Grid
						item
						xs={12}
						sx={{ mt: 2 }}
					>
						<TextField
							label='Email'
							type='email'
							placeholder='Write your email here'
							fullWidth
							name='email'
							onChange={onInputChange}
							value={email}
							error={!!emailValid && formSubmited}
							helperText={emailValid}
						/>
					</Grid>

					<Grid
						item
						xs={12}
						sx={{ mt: 2 }}
					>
						<TextField
							label='Password'
							type='password'
							placeholder='Write your password here'
							fullWidth
							name='password'
							onChange={onInputChange}
							value={password}
							error={!!passwordValid && formSubmited}
							helperText={passwordValid}
						/>
					</Grid>

					<Grid
						container
						spacing={2}
						sx={{ mb: 2, mt: 1 }}
					>
						<Grid
							item
							xs={12}
							display={errorMessage ? '' : 'none'}
						>
							<Alert severity='error'>{errorMessage}</Alert>
						</Grid>

						<Grid
							item
							xs={12}
						>
							<Button
								variant='contained'
								fullWidth
								type='submit'
								disabled={isAuthenticating}
							>
								Create acount
							</Button>
						</Grid>
					</Grid>

					<Grid
						container
						direction='row'
						justifyContent='end'
					>
						<Link
							component={RouterLink}
							color='inherit'
							to='/auth/login'
							variant='body2'
						>
							Already have an account? Sign in
						</Link>
					</Grid>
				</Grid>
			</form>
		</AuthLayout>
	);
};
