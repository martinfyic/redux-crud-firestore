import { useEffect, useMemo, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button, Grid, IconButton, TextField, Typography } from '@mui/material';
import {
	DeleteOutline,
	SaveOutlined,
	UploadOutlined,
} from '@mui/icons-material';
import Swal from 'sweetalert2';
import 'sweetalert2/dist/sweetalert2.css';
import { ImageGallery } from '../components';
import { useForm } from '../../hooks';
import {
	setActiveNote,
	startSaveNote,
	startUploadinFiles,
	startDeletingNote,
} from '../../store';

export const NoteView = () => {
	const dispatch = useDispatch();
	const {
		active: note,
		messageSaved,
		isSaving,
	} = useSelector(state => state.journal);

	const { body, title, date, onInputChange, formState } = useForm(note);

	const dateString = useMemo(() => {
		const newDate = new Date(date).toUTCString();

		return newDate;
	}, [date]);

	const fileInputRef = useRef();

	useEffect(() => {
		dispatch(setActiveNote(formState));
	}, [formState]);

	useEffect(() => {
		if (messageSaved.length > 0) {
			Swal.fire('Updated note', messageSaved, 'success');
		}
	}, [messageSaved]);

	const onSaveNote = () => {
		dispatch(startSaveNote());
	};

	const onFileinputChange = ({ target }) => {
		if (target.files === 0) return;

		dispatch(startUploadinFiles(target.files));
		Swal.fire({
			title: 'Upload Files',
			text: 'Images ready to be saved',
			timer: 2500,
			icon: 'warning',
		});
	};

	const onDelete = () => {
		dispatch(startDeletingNote());
	};

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
					fontSize={26}
					fontWeight='light'
				>
					{dateString}
				</Typography>
			</Grid>

			<Grid item>
				<input
					type='file'
					multiple
					onChange={onFileinputChange}
					style={{ display: 'none' }}
					ref={fileInputRef}
				/>
				<IconButton
					color='primary'
					disabled={isSaving}
					sx={{ p: 1 }}
					onClick={() => fileInputRef.current.click()}
				>
					<UploadOutlined />
				</IconButton>

				<Button
					disabled={isSaving}
					onClick={onSaveNote}
					color='primary'
					sx={{ p: 1 }}
				>
					<SaveOutlined sx={{ fontSize: 30, mr: 1 }} />
					Save
				</Button>
			</Grid>

			<Grid
				container
				sx={{ mt: 1 }}
			>
				<TextField
					type='text'
					variant='filled'
					fullWidth
					placeholder='Write your title here'
					label='Title'
					sx={{ border: 'none', mb: 2 }}
					name='title'
					value={title}
					onChange={onInputChange}
				/>

				<TextField
					type='text'
					variant='filled'
					fullWidth
					multiline
					placeholder='Write your post here'
					minRows={10}
					name='body'
					value={body}
					onChange={onInputChange}
				/>
			</Grid>

			<Grid
				container
				justifyContent='end'
				alignItems='center'
			>
				<Button
					onClick={onDelete}
					sx={{ mt: 2 }}
					color='error'
				>
					<DeleteOutline />
					Delete
				</Button>
			</Grid>

			<ImageGallery images={note.imageUrls} />
		</Grid>
	);
};
