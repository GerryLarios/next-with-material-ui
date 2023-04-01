import { ListItemButton, ListItemIcon, ListItemText } from '@mui/material';

const navigationItemClasses = {
  icon: 'navigation-item-icon',
  name: 'navigation-item-name',
};

type NavigationItemProps = {
  className?: string;
  href?: string;
  icon?: React.ReactNode;
  name?: string;
  onClick?: () => void;
};

const NavigationItem: React.FC<NavigationItemProps> = ({
  className,
  name,
  icon,
  href,
  onClick,
}) => {
  const content = (
    <>
      {icon && <ListItemIcon className={navigationItemClasses.icon}>{icon}</ListItemIcon>}
      {name && <ListItemText className={navigationItemClasses.name} primary={name} />}
    </>
  );

  if (href) {
    return (
      <ListItemButton className={className} component="a" href={href}>
        {content}
      </ListItemButton>
    );
  }

  return (
    <ListItemButton className={className} onClick={onClick}>
      {content}
    </ListItemButton>
  );
};

export default NavigationItem;
