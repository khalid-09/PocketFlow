import { Button } from '@/components/ui/button';
import hero from '../../assets/hero-main.svg';
import { Link } from 'react-router-dom';
import { PlayCircle } from 'lucide-react';

const Hero = () => {
  return (
    <div className="min-h-screen justify-center items-center flex">
      <main className="flex md:flex-row items-center justify-center flex-col gap-10 mt-[100px] md:m-0 px-12 md:gap-40">
        <div className="text-center  flex flex-col font-rub gap-1 md:gap-2 md:text-left">
          <h1 className="md:text-5xl font-bold text-2xl text-center md:text-left">
            Pocket <span className="text-red-400">Flow</span>
          </h1>
          <p className="font-semibold mt-2 md:text-base text-sm">
            Effortlessy manage your expenses with PocketFlow
          </p>
          <div className="flex rounded-md gap-2 items-center justify-center md:justify-start mt-6 md:mt-8">
            <PlayCircle />
            <Button
              variant="outline"
              className="border font-rub border-red-400"
              asChild
            >
              <Link to="/Login">Get Started Now</Link>
            </Button>
          </div>
        </div>
        <div className="mt-12 md:mt-0">
          <img src={hero} alt="hero-img" className="w-64  md:h-64 h-52 " />
        </div>
      </main>
    </div>
  );
};

export default Hero;
