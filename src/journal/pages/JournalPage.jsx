import { useDispatch, useSelector } from 'react-redux';
import { IconButton } from '@mui/material';
import { AddOutlined } from '@mui/icons-material';
import { JornalLayout } from '../layout';
import { NothingSelectedView, NoteView } from '../views';
import { startNewNote } from '../../store/slices/journal/';

export const JournalPage = () => {
	const dispatch = useDispatch();
	const { isSaving, active } = useSelector(state => state.journal);

	const onClickNewNote = () => {
		dispatch(startNewNote());
	};

	return (
		<JornalLayout>
			{active === null ? <NothingSelectedView /> : <NoteView />}

			<IconButton
				disabled={isSaving}
				onClick={onClickNewNote}
				size='large'
				sx={{
					color: 'white',
					backgroundColor: 'error.main',
					':hover': { backgroundColor: 'error.main', opacity: 0.9 },
					position: 'fixed',
					right: 50,
					bottom: 50,
				}}
			>
				<AddOutlined sx={{ fontSize: 30 }} />
			</IconButton>
		</JornalLayout>
	);
};
