import { Divider, Drawer, List, Typography, drawerClasses, styled } from '@mui/material';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import DashboardIcon from '@mui/icons-material/Dashboard';
import NavigationItem from 'components/NavigationItem';
import { useDashboardLayout } from 'hooks';
import React from 'react';

const Main = styled('main')({
  alignItems: 'center',
  display: 'flex',
  flexGrow: 1,
  height: '100%',
  justifyContent: 'center',
});

const StyledDivider = styled(Divider)({ marginTop: 8 });

const StyledDrawer = styled(Drawer, { shouldForwardProp: (p) => p !== 'open' })(
  ({ theme, open }) => ({
    height: '100%',
    [`& .${drawerClasses.paper}`]: {
      boxSizing: 'border-box',
      position: 'relative',
      whiteSpace: 'nowrap',
      width: 200,
      transition: theme.transitions.create('width', {
        duration: theme.transitions.duration.enteringScreen,
        easing: theme.transitions.easing.sharp,
      }),
      ...(!open && {
        overflowX: 'hidden',
        width: 60,
        transition: theme.transitions.create('width', {
          duration: theme.transitions.duration.leavingScreen,
          easing: theme.transitions.easing.sharp,
        }),
      }),
    },
  }),
);

const Content = styled('section')({
  display: 'flex',
  flexDirection: 'column',
  height: '100%',
  overflow: 'auto',
  width: '100%',
});

const Wrapper = styled('div')({
  display: 'flex',
  flex: '1 auto',
  overflow: 'auto',
});

type DashboardLayoutProps = {
  children?: React.ReactNode;
  className?: string;
  name: string;
};

const DashboardLayout: React.FC<DashboardLayoutProps> = ({ children, name }) => {
  const { isOpen, toggleIsOpen } = useDashboardLayout();

  return (
    <Main>
      <StyledDrawer variant="permanent" open={isOpen}>
        <List component="nav">
          <NavigationItem
            icon={isOpen ? <ChevronLeftIcon /> : <ChevronRightIcon />}
            onClick={toggleIsOpen}
          />
          <StyledDivider />
          <NavigationItem name="Dashboard" icon={<DashboardIcon />} href="/" />
        </List>
      </StyledDrawer>
      <Content>
        <Typography component="h1" variant="h6">
          {name}
        </Typography>
        <Wrapper>{children}</Wrapper>
      </Content>
    </Main>
  );
};

export default DashboardLayout;
