import { ModeToggle } from '@/components/mode-toggle';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const LandingLayout = () => {
  return (
    <div className="hidden justify-between md:flex font-inter m-4 gap-2">
      <Link to="/">Logo</Link>
      <div className="flex gap-2">
        <Button variant="ghost">Login</Button>
        <Button className="px-10" variant="outline">
          Sign up
        </Button>
        <ModeToggle />
      </div>
    </div>
  );
};

export default LandingLayout;
