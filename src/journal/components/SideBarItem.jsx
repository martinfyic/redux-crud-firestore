import { useMemo } from 'react';
import { useDispatch } from 'react-redux';
import { TurnedInNot } from '@mui/icons-material';
import {
	Grid,
	ListItem,
	ListItemButton,
	ListItemIcon,
	ListItemText,
} from '@mui/material';
import { setActiveNote } from '../../store';

export const SideBarItem = ({ title = '', body, id, date, imageUrls = [] }) => {
	const truncateTitle = useMemo(() => {
		return title.length > 17 ? title.substring(0, 17) + '...' : title;
	}, [title]);

	const truncateBody = useMemo(() => {
		return body.length > 65 ? body.substring(0, 65) + '...' : body;
	}, [body]);

	const dispatch = useDispatch();

	const onClickSetNote = () => {
		dispatch(setActiveNote({ title, body, id, date, imageUrls }));
	};

	return (
		<ListItem disablePadding>
			<ListItemButton onClick={onClickSetNote}>
				<ListItemIcon>
					<TurnedInNot />
				</ListItemIcon>
				<Grid
					container
					direction='column'
				>
					<ListItemText
						title={title}
						primary={truncateTitle}
					/>
					<ListItemText secondary={truncateBody} />
				</Grid>
			</ListItemButton>
		</ListItem>
	);
};
