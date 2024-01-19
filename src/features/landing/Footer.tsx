import { Radar } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="mx-auto flex flex-col items-center mb-8 gap-3 justify-center max-w-4xl">
      <Link to="/">
        <Radar className="text-red-500/80 w-14 h-14 " />
      </Link>
      <h3>
        &copy; {new Date().getFullYear()} PocketFlow. All Rights Reserved.
      </h3>
      <div>
        <ul className="flex text-sm items-center gap-3">
          <li>
            <Link to="/">Policy</Link>
          </li>
          <li>
            <Link to="/">Terms of Service</Link>
          </li>
          <li>
            <Link to="/">Contact Us</Link>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
