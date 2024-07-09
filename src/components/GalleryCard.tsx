import styles from "../styles";

const GalleryCard = ({
  title,
  image,
  link_url,
}: {
  title: string;
  image?: string;
  link_url: string;
}) => {
  return (
    <a href={link_url} className={`h-[350px] w-full relative`} target="_blank">
      <img
        src={`/src/assets/${image}`}
        className="absolute top-0 left-0 object-cover object-center h-full w-full"
        alt=""
      />
      <div className="absolute -bottom-[60px] left-0 w-[90%] h-[120px] z-10 bg-white">
        <div className="grid grid-cols-1 place-content-center px-4 h-full relative">
          <div className="absolute top-0 right-0 h-full w-[50%]">
            <img
              src="/src/assets/program-card-art.png"
              className="h-full w-full"
              alt=""
            />
          </div>
          <div className="z-30">
            <h3 className={`${styles.paragraph3} text-secondary`}>Gallery</h3>
            <h2 className={`${styles.paragraph} text-black font-bold`}>
              {title}
            </h2>
          </div>
          <div className="bg-secondary w-[50px] h-[50px] grid place-items-center z-20 absolute -top-[25px] right-8">
            <svg
              width="28"
              height="18"
              viewBox="0 0 28 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M0.875 8.99996C0.875 8.75132 0.973772 8.51287 1.14959 8.33705C1.3254 8.16124 1.56386 8.06246 1.8125 8.06246H23.9244L18.0238 2.16371C17.8477 1.98768 17.7488 1.74892 17.7488 1.49996C17.7488 1.25101 17.8477 1.01225 18.0238 0.836213C18.1998 0.660176 18.4385 0.561279 18.6875 0.561279C18.9365 0.561279 19.1752 0.660176 19.3513 0.836213L26.8513 8.33621C26.9386 8.4233 27.0078 8.52675 27.0551 8.64065C27.1024 8.75455 27.1267 8.87665 27.1267 8.99996C27.1267 9.12328 27.1024 9.24538 27.0551 9.35928C27.0078 9.47317 26.9386 9.57663 26.8513 9.66371L19.3513 17.1637C19.1752 17.3398 18.9365 17.4386 18.6875 17.4386C18.4385 17.4386 18.1998 17.3398 18.0238 17.1637C17.8477 16.9877 17.7488 16.7489 17.7488 16.5C17.7488 16.251 17.8477 16.0122 18.0238 15.8362L23.9244 9.93746H1.8125C1.56386 9.93746 1.3254 9.83869 1.14959 9.66288C0.973772 9.48706 0.875 9.2486 0.875 8.99996Z"
                fill="white"
              />
            </svg>
          </div>
        </div>
      </div>
    </a>
  );
};

export default GalleryCard;
