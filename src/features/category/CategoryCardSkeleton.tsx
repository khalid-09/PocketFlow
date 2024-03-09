import { Card } from '@/components/ui/card';
import { Skeleton } from '@/components/ui/skeleton';

const CategoryCardSkeleton = () => {
  return (
    <Card className="flex p-3 h-32 w-full items-center space-x-4">
      <Skeleton className="h-12 w-12 rounded-full" />
      <div className="space-y-2">
        <Skeleton className="h-4 w-[250px]" />
        <Skeleton className="h-4 w-[200px]" />
      </div>
    </Card>
  );
};

export default CategoryCardSkeleton;
