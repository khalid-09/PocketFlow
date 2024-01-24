import { MailIcon } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';

const MainFooter = () => {
  return (
    <footer>
      <Card>
        <CardContent className="flex px-4 py-6 items-center gap-3 font-rub justify-between">
          <p className="text-gray-600">
            &copy; {new Date().getFullYear()} Pocket FLow. All Rights Reserved.
          </p>
          <ul className="gap-2 text-gray-600 items-center flex">
            <li className="flex items-center gap-1">
              <MailIcon /> Mail
            </li>
            <li>Twitter</li>
            <li>Github</li>
          </ul>
        </CardContent>
      </Card>
    </footer>
  );
};

export default MainFooter;
