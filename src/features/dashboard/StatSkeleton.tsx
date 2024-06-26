import { Card } from '@/components/ui/card';
import { Skeleton } from '@/components/ui/skeleton';

const StatSkeleton = () => {
  return (
    <Card className="flex h-40 p-7 w-full md:w-1/3 items-center space-x-4">
      <Skeleton className="h-16 w-16 rounded-full" />
      <div className="space-y-2">
        <Skeleton className="h-4 w-[250px]" />
        <Skeleton className="h-4 w-[200px]" />
      </div>
    </Card>
  );
};

export default StatSkeleton;
