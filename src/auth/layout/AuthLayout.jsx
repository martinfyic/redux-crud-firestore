import { Avatar, Grid, Typography } from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { Copyright } from '../../ui';

export const AuthLayout = ({ children, title = '' }) => {
	return (
		<Grid
			container
			spacing={0}
			direction='column'
			alignItems='center'
			justifyContent='center'
			sx={{ minHeight: '100vh', backgroundColor: 'primary.main', padding: 4 }}
		>
			<Grid
				item
				className='box-shadow'
				xs={3}
				sx={{
					width: { sm: 500 },
					backgroundColor: 'white',
					padding: 3,
					borderRadius: 2,
				}}
			>
				<Grid
					container
					direction='column'
					alignItems='center'
					justifyContent='center'
				>
					<Avatar sx={{ m: 1, p: 1, bgcolor: 'secondary.main' }}>
						<LockOutlinedIcon sx={{ fontSize: 20 }} />
					</Avatar>
					<Typography
						variant='h5'
						sx={{ mb: 1 }}
					>
						{title}
					</Typography>
				</Grid>

				{children}

				<Copyright sx={{ mt: 5 }} />
			</Grid>
		</Grid>
	);
};
