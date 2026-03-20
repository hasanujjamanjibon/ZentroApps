import React from 'react';

const StatisticsSection = () => {
  const statisticsData = [
    {
      label: 'Total Downloads',
      value: '29.6M',
      subtext: '21% More Than Last Month',
    },
    {
      label: 'Total Reviews',
      value: '906K',
      subtext: '46% More Than Last Month',
    },
    {
      label: 'Active Apps',
      value: '132+',
      subtext: '31 More Will Launch',
    },
  ];

  return (
    <section className='w-full py-16 px-6 bg-gradient-to-r from-[#7c3aed] to-[#a78bfa] text-white'>
      <div className='max-w-4xl mx-auto text-center'>
        {/* Title */}
        <h2 className='text-3xl md:text-4xl lg:text-5xl font-bold mb-16 tracking-tight'>
          Trusted By Millions, Built For You
        </h2>

        {/* Stats Grid */}
        <div className='grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8'>
          {statisticsData?.map((statistic, index) => (
            <div key={index} className='flex flex-col items-center'>
              {/* Stat Label */}
              <p className='text-sm md:text-base opacity-80 font-medium mb-3'>
                {statistic?.label}
              </p>

              {/* Stat Value */}
              <h3 className='text-5xl md:text-6xl lg:text-7xl font-extrabold mb-4'>
                {statistic?.value}
              </h3>

              {/* Stat Subtext */}
              <p className='text-xs md:text-sm opacity-70 font-light'>
                {statistic?.subtext}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatisticsSection;
