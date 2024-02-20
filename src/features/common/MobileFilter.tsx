import { Button } from '@/components/ui/button';
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from '@/components/ui/drawer';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';
import { VscSettings } from 'react-icons/vsc';
import Filter from './Filter';
import { toast } from 'sonner';

const MobileFilter = ({ table }: { table: any }) => {
  return (
    <Drawer>
      <DrawerTrigger>
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button variant="outline" className="mr-3 lg:hidden">
                <VscSettings />
              </Button>
            </TooltipTrigger>
            <TooltipContent>
              <p>Filters</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </DrawerTrigger>
      <DrawerContent className="font-rub">
        <DrawerHeader>
          <DrawerTitle>Filters</DrawerTitle>
        </DrawerHeader>
        <div className="px-4">
          <Filter table={table} onMobile={true} />
        </div>
        <DrawerFooter>
          <DrawerClose>
            <Button
              onClick={() => {
                toast('Table filtered 👍');
              }}
              variant="default"
            >
              Filter
            </Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
};

export default MobileFilter;
