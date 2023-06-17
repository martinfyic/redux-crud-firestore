import { Link as RouterLink } from 'react-router-dom';
import { Google } from '@mui/icons-material';
import { Button, Grid, Link, TextField, Typography } from '@mui/material';
import { AuthLayout } from '../layout';

export const LoginPage = () => {
	return (
		<AuthLayout title='Sign In'>
			<form action=''>
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
							sm={6}
						>
							<Button
								variant='contained'
								fullWidth
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
