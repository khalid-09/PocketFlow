import {
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Button } from './ui/button';
import { useDeleteExpense } from '@/features/expenses/useDeleteExpense';
import { useDelteIncome } from '@/features/incomes/useDeleteIncome';

type ConfirmDialogBoxProps = {
  id: string;
  type: string;
};

const ConfirmDialogBox = ({ id, type }: ConfirmDialogBoxProps) => {
  const { mutate: deleteExpense } = useDeleteExpense();
  const { mutate: deleteIncome } = useDelteIncome();

  const handleClick = () => {
    if (type === 'expense') deleteExpense(id);
    if (type === 'income') deleteIncome(id);
  };

  return (
    <>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Are you absolutely sure?</DialogTitle>
          <DialogDescription>
            This action cannot be undone. This will permanently delete your
            account and remove your data from our servers.
          </DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <DialogClose asChild>
            <Button type="button" onClick={handleClick} variant="destructive">
              Delete
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </>
  );
};

export default ConfirmDialogBox;
