import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb';
import { Link, useLocation } from 'react-router-dom';

const BreadCrumb = () => {
  const { pathname } = useLocation();

  const isExpenseEdit =
    pathname.includes('/dashboard/expenses') &&
    pathname.split('/').includes('edit');

  const isIncomeEdit =
    pathname.includes('/dashboard/incomes') &&
    pathname.split('/').includes('edit');

  return (
    <Breadcrumb className="font-rub lg:hidden block">
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink asChild>
            <Link to="/dashboard">Dashboard</Link>
          </BreadcrumbLink>
        </BreadcrumbItem>
        {(pathname === '/dashboard/expenses' ||
          pathname === '/dashboard/expenses/create' ||
          isExpenseEdit) && (
          <>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink asChild>
                <BreadcrumbPage>
                  <Link to="expenses">Expenses</Link>
                </BreadcrumbPage>
              </BreadcrumbLink>
            </BreadcrumbItem>
          </>
        )}
        {pathname === '/dashboard/expenses/create' && (
          <>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink asChild>
                <BreadcrumbPage>Create</BreadcrumbPage>
              </BreadcrumbLink>
            </BreadcrumbItem>
          </>
        )}
        {isExpenseEdit && (
          <>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink>
                <BreadcrumbPage>Edit</BreadcrumbPage>
              </BreadcrumbLink>
            </BreadcrumbItem>
          </>
        )}
        {(pathname === '/dashboard/incomes' ||
          pathname === '/dashboard/incomes/create' ||
          isIncomeEdit) && (
          <>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink asChild>
                <BreadcrumbPage>
                  <Link to="incomes">Incomes</Link>
                </BreadcrumbPage>
              </BreadcrumbLink>
            </BreadcrumbItem>
          </>
        )}
        {pathname === '/dashboard/incomes/create' && (
          <>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink asChild>
                <BreadcrumbPage>Create</BreadcrumbPage>
              </BreadcrumbLink>
            </BreadcrumbItem>
          </>
        )}
        {isIncomeEdit && (
          <>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink>
                <BreadcrumbPage>Edit</BreadcrumbPage>
              </BreadcrumbLink>
            </BreadcrumbItem>
          </>
        )}
        {pathname === '/dashboard/category' && (
          <>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink>
                <BreadcrumbPage>Category</BreadcrumbPage>
              </BreadcrumbLink>
            </BreadcrumbItem>
          </>
        )}
        {pathname === '/dashboard/profile' && (
          <>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink>
                <BreadcrumbPage>Profile</BreadcrumbPage>
              </BreadcrumbLink>
            </BreadcrumbItem>
          </>
        )}
      </BreadcrumbList>
    </Breadcrumb>
  );
};

export default BreadCrumb;
