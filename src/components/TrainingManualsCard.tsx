const TrainingManualsCard = ({text}: {text: string}) => {
  return (
    <div className="flex items-center justify-between py-2 px-4">
      <div className="flex items-center gap-4">
        <div className="h-[60px] w-[60px] bg-black"></div>
        <p className="font-manrope text-base text-[#4f4f4f]">{text}</p>
      </div>
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M4.1735 12H20.8691" stroke="#849299" stroke-width="2" />
        <path
          d="M20.8691 12C16.2588 12 12.5213 15.9073 12.5213 20.7273"
          stroke="#849299"
          stroke-width="2"
        />
        <path
          d="M20.8691 11.9997C16.2588 11.9997 12.5213 8.0924 12.5213 3.27246"
          stroke="#849299"
          stroke-width="2"
        />
      </svg>
    </div>
  );
};

export default TrainingManualsCard;
