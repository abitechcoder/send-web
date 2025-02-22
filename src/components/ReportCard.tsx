const ReportCard = ({
  image,
  title,
  report_url,
}: {
  title: string;
  image: string;
  report_url: string;
}) => {
  return (
    <div className="bg-white p-4 lg:p-6 flex flex-col gap-4 items-start shadow-lg relative">
      {/* <div className="bg-lightgrey px-4 py-2 absolute top-3 right-3">
        <p className={`uppercase ${styles.paragraph3} font-bold`}>on going</p>
      </div> */}
      <img
        src={image}
        className="object-cover object-center h-[250px] w-full"
        alt=""
      />
      <div>
        <p className="font-bold">{title}</p>
      </div>
      <a className="w-full" href={report_url} target="_blank">
        <div className="p-3 bg-secondary text-white flex items-center justify-between w-full rounded-sm">
          <p>Read More</p>
          <svg
            width="8"
            height="12"
            viewBox="0 0 8 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1 0L7 6L1 12"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </a>
    </div>
  );
};

export default ReportCard;
