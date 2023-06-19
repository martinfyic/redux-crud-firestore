import { Button, Grid, TextField, Typography } from '@mui/material';
import { SaveOutlined } from '@mui/icons-material';
import { ImageGallery } from '../components';

export const NoteView = () => {
	return (
		<Grid
			className='animate__animated animate__fadeIn animate__fast'
			container
			direction='row'
			justifyContent='space-between'
			alignItems='center'
			sx={{ mb: 1 }}
		>
			<Grid item>
				<Typography
					fontSize={39}
					fontWeight='light'
				>
					17 de junio, 2023
				</Typography>
			</Grid>

			<Grid item>
				<Button
					color='primary'
					sx={{ p: 2 }}
				>
					<SaveOutlined sx={{ fontSize: 30, mr: 1 }} />
					Save
				</Button>
			</Grid>

			<Grid container>
				<TextField
					type='text'
					variant='filled'
					fullWidth
					placeholder='Write your title here'
					label='Title'
					sx={{ border: 'none', mb: 2 }}
				/>

				<TextField
					type='text'
					variant='filled'
					fullWidth
					multiline
					placeholder='Write your post here'
					minRows={10}
				/>
			</Grid>

			<ImageGallery />
		</Grid>
	);
};
