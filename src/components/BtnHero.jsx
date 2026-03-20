const BtnHero = ({ src, label }) => {
  return (
    <a
      href='#'
      className='flex items-center gap-3 bg-white border border-slate-200 px-6 py-3 rounded-lg shadow-sm hover:shadow-md transition-all w-full sm:w-auto'
    >
      <img src={src} alt={label} className='h-5' />
      <div className='text-left'>
        <p className='text-base md:text-lg font-semibold text-slate-800 leading-tight min-w-max'>
          {label}
        </p>
      </div>
    </a>
  );
};

export default BtnHero;
