import { useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link as RouterLink } from 'react-router-dom';
import { Google } from '@mui/icons-material';
import {
	Alert,
	Button,
	Grid,
	Link,
	TextField,
	Typography,
} from '@mui/material';
import { AuthLayout } from '../layout';
import { useForm } from '../../hooks';
import {
	startGoogleSignIn,
	startLoginWithEmailPassword,
} from '../../store/slices/auth';

const formDate = {
	email: '',
	password: '',
};

export const LoginPage = () => {
	const { status, errorMessage } = useSelector(state => state.auth);

	const dispatch = useDispatch();

	const { email, password, onInputChange } = useForm(formDate);

	const isAuthenticating = useMemo(() => status === 'checking', [status]);

	const onSubmit = event => {
		event.preventDefault();
		dispatch(startLoginWithEmailPassword({ email, password }));
	};

	const onGoogleSubmit = () => {
		console.log('onGoogleSignIn');
		dispatch(startGoogleSignIn());
	};

	return (
		<AuthLayout title='Sign In'>
			<form
				className='animate__animated animate__fadeIn animate__fast'
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
							label='Email'
							type='email'
							placeholder='Write your email here'
							fullWidth
							name='email'
							onChange={onInputChange}
							value={email}
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
						/>
					</Grid>

					<Grid
						container
						sx={{ mt: 2 }}
						display={errorMessage ? '' : 'none'}
					>
						<Grid
							item
							xs={12}
						>
							<Alert severity='error'>{errorMessage}</Alert>
						</Grid>
					</Grid>

					<Grid
						container
						spacing={2}
						sx={{ mb: 2, mt: 1 }}
					>
						<Grid
							item
							xs={12}
							sm={6}
						>
							<Button
								variant='contained'
								fullWidth
								type='submit'
								disabled={isAuthenticating}
							>
								Login
							</Button>
						</Grid>
						<Grid
							item
							xs={12}
							sm={6}
						>
							<Button
								variant='contained'
								fullWidth
								onClick={onGoogleSubmit}
								disabled={isAuthenticating}
							>
								<Google />
								<Typography sx={{ ml: 1 }}>Google</Typography>
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
							to='/auth/register'
							variant='body2'
						>
							{"Don't have an account? Sign Up"}
						</Link>
					</Grid>
				</Grid>
			</form>
		</AuthLayout>
	);
};
