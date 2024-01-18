import hero from '../assets/hero-main.svg';
import hero2 from '../assets/hero-second.gif';
import hero3 from '../assets/hero-third.gif';

const Landing = () => {
  return (
    <div className=" flex h-dvh justify-center gap-36 flex-wrap items-center">
      <h1>PocketFlow</h1>
      <img src={hero} alt="hero-img" width={350} />
      {/* Illustration by{' '}
      <a href="https://icons8.com/illustrations/author/mNCLibjicqSz">
        Julia K
      </a>{' '}
      from <a href="https://icons8.com/illustrations">Ouch!</a> */}
    </div>
  );
};

export default Landing;
