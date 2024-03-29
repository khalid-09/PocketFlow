import { Link } from 'react-router-dom';
import { ColumnDef } from '@tanstack/react-table';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import ConfirmDialogBox from '@/components/ConfirmDialogBox';
import { Dialog, DialogTrigger } from '@/components/ui/dialog';
import { FaTrashAlt } from 'react-icons/fa';
import { FaPen } from 'react-icons/fa6';
import { ArrowUpDown, MoreHorizontal } from 'lucide-react';

export type Payment = {
  id: string;
  amount: number;
  // status: 'pending' | 'processing' | 'success' | 'failed';
  title: string;
  date: string;
  type: 'income' | 'expense';
};

export const columns: ColumnDef<Payment>[] = [
  // {
  //   accessorKey: 'status',
  //   header: '',
  // },
  {
    accessorKey: 'title',
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
        >
          Title
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
  },
  {
    accessorKey: 'date',
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
        >
          Date
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
  },
  {
    accessorKey: 'amount',
    header: () => <div className="text-right">Amount</div>,
    cell: ({ row }) => {
      const amount = parseFloat(row.getValue('amount'));
      const formatted = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'INR',
      }).format(amount);

      return <div className="text-right font-medium">{formatted}</div>;
    },
  },
  {
    id: 'actions',
    cell: ({ row }) => {
      const expenseOrIncome = row.original;

      return (
        <Dialog>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="h-8 w-8 p-0">
                <span className="sr-only">Open menu</span>
                <MoreHorizontal className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel className="text-center font-rub">
                Actions
              </DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <DialogTrigger className="flex items-center">
                  <FaTrashAlt className="mr-2 flex text-red-500" /> Delete
                </DialogTrigger>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link
                  to={`${expenseOrIncome.id}/edit`}
                  className="flex items-center"
                  state={expenseOrIncome}
                >
                  <FaPen className="mr-2 font-rub text-blue-500" /> Edit
                </Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <ConfirmDialogBox
            type={expenseOrIncome.type}
            id={expenseOrIncome.id}
          />
        </Dialog>
      );
    },
  },
];
