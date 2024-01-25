import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { FaBarsProgress, FaPiggyBank } from 'react-icons/fa6';

const Overview = () => {
  return (
    <Card className="md:w-1/3 w-full">
      <CardHeader>
        <CardTitle>Overview</CardTitle>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="account" className="w-[400px]">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="account">Expenses</TabsTrigger>
            <TabsTrigger value="password">Incomes</TabsTrigger>
          </TabsList>
          <CardDescription className="flex justify-between p-3">
            <CardTitle>Category</CardTitle>
            <CardTitle>Total</CardTitle>
          </CardDescription>
          <TabsContent value="account" className="p-3">
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-3">
                <FaPiggyBank /> <p>Savings</p>
              </div>
              <div className="flex items-center gap-3">
                <p>$200</p>
              </div>
            </div>
          </TabsContent>
          <TabsContent value="password" className="p-3">
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-3">
                <FaBarsProgress /> <p>Investments</p>
              </div>
              <div className="flex items-center gap-3">
                <p>$200</p>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
};

export default Overview;
