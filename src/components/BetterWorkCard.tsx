const BetterWorkCard = ({
  title,
  subtitle,
}: {
  title: string;
  subtitle: string;
}) => {
  return (
    <div className="flex items-end gap-3">
      <h1 className={`font-bold font-barlow text-3xl lg:text-5xl`}>{title}</h1>
      <svg
        className="w-[40px] h-[40px] -ml-4"
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M51 1L0.999994 51" stroke="#1B43C6" strokeLinecap="round" />
        <path
          opacity="0.4"
          d="M21.3125 17.083L35.375 31.1455"
          stroke="#1B43C6"
          strokeLinecap="round"
        />
      </svg>
      <p className="font-bold w-[100px] text-sm lg:text-base">{subtitle}</p>
    </div>
  );
};

export default BetterWorkCard;
