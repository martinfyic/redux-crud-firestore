import { useMemo } from 'react';
import { TurnedInNot } from '@mui/icons-material';
import {
	Grid,
	ListItem,
	ListItemButton,
	ListItemIcon,
	ListItemText,
} from '@mui/material';

export const SideBarItem = ({ title = '', body }) => {
	const truncateTitle = useMemo(() => {
		return title.length > 17 ? title.substring(0, 17) + '...' : title;
	}, [title]);

	return (
		<ListItem disablePadding>
			<ListItemButton>
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
					<ListItemText secondary={body} />
				</Grid>
			</ListItemButton>
		</ListItem>
	);
};
