import BtnHero from '../BtnHero';

const HeroSection = () => {
  return (
    <section className='max-w-4xl mx-auto bg-[#f8f9fa] flex flex-col items-center justify-center  text-center px-4 md:px-8 pt-8'>
      {/* Main Heading */}
      <h1 className='text-4xl md:text-5xl lg:text-6xl font-bold text-[#1e293b] leading-tight tracking-tight'>
        We Build <br />
        <span className='text-[#9b6dff]'>Productive</span> Apps
      </h1>
      {/* Description Text */}
      <p className='mt-4 max-w-4xl text-slate-500 text-sm md:text-base lg:text-lg leading-relaxed'>
        At ZentroApps , we craft innovative apps designed to make everyday life
        simpler, smarter, and more exciting. Our goal is to turn your ideas into
        digital experiences that truly make an impact.
      </p>

      {/* App Store Buttons */}
      <div className='mt-6 flex  gap-4 items-center justify-center'>
        {/* Google Play Button */}
        <BtnHero src='/assets/play-icon.png' label='Google Play' />
        {/* App Store Button */}
        <BtnHero src='/assets/app-store.png' label='App Store' />
      </div>

      <img src='/assets/hero.png' alt='' className='mt-12' />
    </section>
  );
};

export default HeroSection;
