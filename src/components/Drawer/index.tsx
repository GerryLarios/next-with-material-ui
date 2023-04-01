import { styled } from '@mui/material';
import Drawer, { drawerClasses } from '@mui/material/Drawer';

export default styled(Drawer, { shouldForwardProp: (p) => p !== 'open' })<{ open?: boolean }>(
  ({ theme, open }) => ({
    [`& .${drawerClasses.paper}`]: {
      boxSizing: 'border-box',
      position: 'relative',
      whiteSpace: 'nowrap',
      width: 240,
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
      ...(!open && {
        overflowX: 'hidden',
        transition: theme.transitions.create('width', {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.leavingScreen,
        }),
        width: theme.spacing(7),
        [theme.breakpoints.up('sm')]: {
          width: theme.spacing(9),
        },
      }),
    },
  }),
);
