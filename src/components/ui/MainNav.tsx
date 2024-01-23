import { Menubar, MenubarMenu, MenubarTrigger } from '@/components/ui/menubar';
import { Link } from 'react-router-dom';

const navItems = [
  { link: '/dashboard', name: 'Dashboard' },
  { link: 'expenses', name: 'Expenses' },
  { link: 'incomes', name: 'Incomes' },
  { link: 'category', name: 'Category' },
];

const MainNav = () => {
  return (
    <Menubar>
      {navItems.map(item => (
        <MenubarMenu key={item.name}>
          <MenubarTrigger>
            <Link to={item.link}>{item.name}</Link>
          </MenubarTrigger>
        </MenubarMenu>
      ))}
    </Menubar>
  );
};

export default MainNav;
