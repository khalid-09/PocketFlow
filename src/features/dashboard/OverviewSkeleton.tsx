import { CardContent } from '@/components/ui/card';
import { Skeleton } from '@/components/ui/skeleton';

const OverviewSkeleton = () => {
  return (
    <CardContent className="space-y-4">
      {Array.from({ length: 5 }).map((_, i) => (
        <div key={i} className="flex items-center space-x-4">
          <Skeleton className="h-12 w-12 rounded-full" />
          <div className="space-y-2">
            <Skeleton className="h-4 w-[250px]" />
            <Skeleton className="h-4 w-[200px]" />
          </div>
        </div>
      ))}
    </CardContent>
  );
};

export default OverviewSkeleton;
