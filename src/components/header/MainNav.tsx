import { Menubar, MenubarMenu, MenubarTrigger } from '@/components/ui/menubar';
import { Link } from 'react-router-dom';
import { Separator } from '../ui/separator';

const navItems = [
  { link: '/dashboard', name: 'Dashboard' },
  { link: 'expenses', name: 'Expenses' },
  { link: 'incomes', name: 'Incomes' },
  { link: 'category', name: 'Category' },
];

const MainNav = () => {
  return (
    <Menubar className="mr-4">
      {navItems.map(item => (
        <MenubarMenu key={item.name}>
          <MenubarTrigger>
            <Link to={item.link}>{item.name}</Link>
          </MenubarTrigger>
          {item.name === 'Category' ? null : (
            <Separator orientation="vertical" />
          )}
        </MenubarMenu>
      ))}
    </Menubar>
  );
};

export default MainNav;
