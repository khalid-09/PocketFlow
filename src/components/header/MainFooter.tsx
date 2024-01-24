import { MailIcon } from 'lucide-react';
import { Card, CardContent } from '../ui/card';
import { GitHubLogoIcon, TwitterLogoIcon } from '@radix-ui/react-icons';

const MainFooter = () => {
  return (
    <footer>
      <Card className="mt-12 mb-6">
        <CardContent className="flex flex-col sm:flex-row  px-4 py-6 items-center gap-3 font-rub justify-between">
          <p className="text-gray-600">
            &copy; {new Date().getFullYear()} Pocket FLow. All Rights Reserved.
          </p>
          <ul className="gap-4 text-gray-600 items-center flex">
            <li>
              <a href="mailto:khaliljpc@gmail.com">
                <MailIcon className="h-5" />
              </a>
            </li>
            <li>
              <a href="https://twitter.com/stan8783" target="_">
                <TwitterLogoIcon className="h-7 w-6" />
              </a>
            </li>
            <li>
              <a href="https://github.com/khalid-09/" target="_">
                <GitHubLogoIcon className="h-6 w-6" />
              </a>
            </li>
          </ul>
        </CardContent>
      </Card>
    </footer>
  );
};

export default MainFooter;
