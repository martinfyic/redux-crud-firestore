import { Link as RouterLink } from 'react-router-dom';
import { Button, Grid, Link, TextField } from '@mui/material';
import { AuthLayout } from '../layout';

export const RegisterPage = () => {
	return (
		<AuthLayout title='Create Acount'>
			<form action=''>
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
						>
							<Button
								variant='contained'
								fullWidth
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
						>
							I already have an account
						</Link>
					</Grid>
				</Grid>
			</form>
		</AuthLayout>
	);
};
