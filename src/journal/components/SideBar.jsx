import { useSelector } from 'react-redux';
import { TurnedInNot } from '@mui/icons-material';
import {
	Box,
	Divider,
	Drawer,
	Grid,
	List,
	ListItem,
	ListItemButton,
	ListItemIcon,
	ListItemText,
	Toolbar,
	Typography,
} from '@mui/material';

export const SideBar = ({ drawerWidth = 240 }) => {
	const { displayName } = useSelector(state => state.auth);

	return (
		<Box
			component='nav'
			sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
		>
			<Drawer
				variant='permanent'
				open
				sx={{
					display: { xs: 'block' },
					'& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
				}}
			>
				<Toolbar>
					<Typography
						variant='h6'
						noWrap
						component='div'
					>
						{displayName}
					</Typography>
				</Toolbar>
				<Divider />

				<List>
					{['Enero', 'Febrero', 'Marzo', 'Abril'].map((text, i) => (
						<ListItem
							key={i}
							disablePadding
						>
							<ListItemButton>
								<ListItemIcon>
									<TurnedInNot />
								</ListItemIcon>
								<Grid container>
									<ListItemText primary={text} />
									<ListItemText
										secondary={
											'Ipsum is simply dummy text of the printing and typesetting industry.'
										}
									/>
								</Grid>
							</ListItemButton>
						</ListItem>
					))}
				</List>
			</Drawer>
		</Box>
	);
};
