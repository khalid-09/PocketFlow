import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';

const BreadCrumbVariants = {
  hidden: { y: -200 },
  visible: {
    y: 0,
    transition: {
      delay: 0.1,
      type: 'spring',
      ease: 'easeInOut',
      stiffness: 75,
    },
  },
};

const BreadCrumb = () => {
  const { pathname } = useLocation();

  const isExpenseEdit =
    pathname.includes('/dashboard/expenses') &&
    pathname.split('/').includes('edit');

  const isIncomeEdit =
    pathname.includes('/dashboard/incomes') &&
    pathname.split('/').includes('edit');

  return (
    <motion.div
      variants={BreadCrumbVariants}
      initial="hidden"
      animate="visible"
    >
      <Breadcrumb className="font-rub sm:hidden font-medium block">
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink asChild>
              <Link to="/dashboard">Dashboard</Link>
            </BreadcrumbLink>
          </BreadcrumbItem>
          {(pathname === '/dashboard/expenses' ||
            pathname === '/dashboard/expenses/create' ||
            isExpenseEdit) && (
            <motion.div
              variants={BreadCrumbVariants}
              className="flex items-center gap-2"
            >
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink asChild>
                  <BreadcrumbPage>
                    <Link to="expenses">Expenses</Link>
                  </BreadcrumbPage>
                </BreadcrumbLink>
              </BreadcrumbItem>
            </motion.div>
          )}
          {pathname === '/dashboard/expenses/create' && (
            <motion.div
              variants={BreadCrumbVariants}
              className="flex items-center gap-2"
            >
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink asChild>
                  <BreadcrumbPage>Create</BreadcrumbPage>
                </BreadcrumbLink>
              </BreadcrumbItem>
            </motion.div>
          )}
          {isExpenseEdit && (
            <motion.div
              variants={BreadCrumbVariants}
              className="flex items-center gap-2"
            >
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink>
                  <BreadcrumbPage>Edit</BreadcrumbPage>
                </BreadcrumbLink>
              </BreadcrumbItem>
            </motion.div>
          )}
          {(pathname === '/dashboard/incomes' ||
            pathname === '/dashboard/incomes/create' ||
            isIncomeEdit) && (
            <motion.div
              variants={BreadCrumbVariants}
              className="flex items-center gap-2"
            >
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink asChild>
                  <BreadcrumbPage>
                    <Link to="incomes">Incomes</Link>
                  </BreadcrumbPage>
                </BreadcrumbLink>
              </BreadcrumbItem>
            </motion.div>
          )}
          {pathname === '/dashboard/incomes/create' && (
            <motion.div
              variants={BreadCrumbVariants}
              className="flex items-center gap-2"
            >
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink asChild>
                  <BreadcrumbPage>Create</BreadcrumbPage>
                </BreadcrumbLink>
              </BreadcrumbItem>
            </motion.div>
          )}
          {isIncomeEdit && (
            <motion.div
              variants={BreadCrumbVariants}
              className="flex items-center gap-2"
            >
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink>
                  <BreadcrumbPage>Edit</BreadcrumbPage>
                </BreadcrumbLink>
              </BreadcrumbItem>
            </motion.div>
          )}
          {pathname === '/dashboard/category' && (
            <motion.div
              variants={BreadCrumbVariants}
              className="flex items-center gap-2"
            >
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink>
                  <BreadcrumbPage>Category</BreadcrumbPage>
                </BreadcrumbLink>
              </BreadcrumbItem>
            </motion.div>
          )}
          {pathname === '/dashboard/profile' && (
            <motion.div
              variants={BreadCrumbVariants}
              className="flex items-center gap-2"
            >
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink>
                  <BreadcrumbPage>Profile</BreadcrumbPage>
                </BreadcrumbLink>
              </BreadcrumbItem>
            </motion.div>
          )}
        </BreadcrumbList>
      </Breadcrumb>
    </motion.div>
  );
};

export default BreadCrumb;
