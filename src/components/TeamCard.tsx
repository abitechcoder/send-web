import styles from "../styles";

const TeamCard = ({
  title,
  name,
  image,
}: {
  title: string;
  name: string;
  image?: string;
}) => {
  return (
    <div className={`h-[450px] w-full relative`}>
        <img src={`/src/assets/${image}`} className="absolute top-0 left-0 object-cover object-center h-full w-full" alt="" />
      <div className="grid grid-cols-[60px_1fr] absolute bottom-0 left-0 w-full h-[120px] z-10 bg-lightgrey">
        <div className="grid place-content-center gap-4">
          <div className="bg-white w-[30px] h-[30px] rounded-full grid place-items-center">
            <svg
              width="10"
              height="18"
              viewBox="0 0 10 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M3.15014 17.5365V9.74873H0.474609V6.71366H3.15014V4.47539C3.15014 1.87789 4.76976 0.463501 7.13534 0.463501C8.26847 0.463501 9.24235 0.546138 9.52616 0.583074V3.29761L7.8855 3.29834C6.59897 3.29834 6.34987 3.89717 6.34987 4.7759V6.71366H9.41813L9.01863 9.74873H6.34986V17.5365H3.15014Z"
                fill="#141414"
              />
            </svg>
          </div>
          <div className="bg-white w-[30px] h-[30px] rounded-full grid place-items-center">
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9.99984 2.21173C12.5892 2.21173 12.8959 2.22123 13.9188 2.26692C14.5338 2.27429 15.143 2.38491 15.7199 2.59397C16.1382 2.752 16.5181 2.99408 16.8351 3.30463C17.1522 3.61518 17.3993 3.98731 17.5607 4.39708C17.7741 4.96213 17.887 5.55884 17.8945 6.16128C17.9407 7.16325 17.9509 7.46362 17.9509 10C17.9509 12.5364 17.9412 12.8367 17.8945 13.8387C17.887 14.4412 17.7741 15.0379 17.5607 15.6029C17.3993 16.0127 17.1522 16.3848 16.8351 16.6954C16.5181 17.0059 16.1382 17.248 15.7199 17.406C15.143 17.6151 14.5338 17.7257 13.9188 17.7331C12.8963 17.7783 12.5897 17.7883 9.99984 17.7883C7.40999 17.7883 7.10335 17.7788 6.08089 17.7331C5.46586 17.7257 4.85668 17.6151 4.27982 17.406C3.86149 17.248 3.48158 17.0059 3.16454 16.6954C2.8475 16.3848 2.60036 16.0127 2.43903 15.6029C2.2256 15.0379 2.11267 14.4412 2.10514 13.8387C2.05896 12.8367 2.0488 12.5364 2.0488 10C2.0488 7.46362 2.0585 7.16325 2.10514 6.16128C2.11267 5.55884 2.2256 4.96213 2.43903 4.39708C2.60036 3.98731 2.8475 3.61518 3.16454 3.30463C3.48158 2.99408 3.86149 2.752 4.27982 2.59397C4.85668 2.38491 5.46586 2.27429 6.08089 2.26692C7.10381 2.22168 7.41045 2.21173 9.99984 2.21173ZM9.99984 0.5C7.36751 0.5 7.03592 0.510857 6.00146 0.556997C5.19654 0.57268 4.40017 0.721964 3.64621 0.9985C2.99944 1.23719 2.41363 1.61125 1.92965 2.09457C1.43579 2.56881 1.05359 3.14295 0.809753 3.77689C0.527437 4.51541 0.375033 5.29548 0.359023 6.08392C0.312841 7.09631 0.301758 7.4211 0.301758 9.99955C0.301758 12.578 0.312841 12.9028 0.359946 13.9161C0.375956 14.7045 0.528361 15.4846 0.810676 16.2231C1.05424 16.857 1.43612 17.4311 1.92965 17.9054C2.4139 18.3889 3.00003 18.7629 3.64714 19.0015C4.40109 19.278 5.19747 19.4273 6.00238 19.443C7.03685 19.4882 7.36704 19.5 10.0008 19.5C12.6345 19.5 12.9647 19.4891 13.9991 19.443C14.8041 19.4273 15.6004 19.278 16.3544 19.0015C16.9984 18.757 17.5833 18.3835 18.0715 17.9049C18.5598 17.4263 18.9407 16.8532 19.1899 16.2222C19.4722 15.4837 19.6247 14.7036 19.6407 13.9152C19.6868 12.9028 19.6979 12.578 19.6979 9.99955C19.6979 7.4211 19.6868 7.09631 19.6397 6.08302C19.6237 5.29458 19.4713 4.51451 19.189 3.77599C18.9454 3.14213 18.5636 2.56799 18.07 2.09366C17.5858 1.61024 16.9997 1.23617 16.3526 0.997595C15.5986 0.721059 14.8022 0.571775 13.9973 0.556093C12.9638 0.510857 12.6322 0.5 9.99984 0.5Z"
                fill="#141414"
              />
              <path
                d="M9.99875 5.12109C9.01376 5.12109 8.05089 5.4072 7.2319 5.94323C6.41292 6.47925 5.77459 7.24113 5.39765 8.13252C5.02071 9.0239 4.92209 10.0047 5.11425 10.951C5.30641 11.8973 5.78073 12.7665 6.47722 13.4488C7.17372 14.131 8.0611 14.5956 9.02717 14.7838C9.99323 14.9721 10.9946 14.8755 11.9046 14.5062C12.8146 14.137 13.5924 13.5118 14.1396 12.7095C14.6869 11.9073 14.979 10.9642 14.979 9.99934C14.979 8.70555 14.4543 7.46475 13.5203 6.5499C12.5863 5.63505 11.3196 5.12109 9.99875 5.12109ZM9.99875 13.1659C9.35939 13.1659 8.73438 12.9801 8.20276 12.6322C7.67115 12.2843 7.25681 11.7897 7.01213 11.2111C6.76746 10.6325 6.70344 9.99583 6.82817 9.38158C6.95291 8.76734 7.26079 8.20312 7.71289 7.76027C8.16499 7.31743 8.741 7.01585 9.36809 6.89367C9.99517 6.77148 10.6452 6.83419 11.2359 7.07386C11.8266 7.31352 12.3314 7.71939 12.6866 8.24012C13.0419 8.76085 13.2314 9.37306 13.2314 9.99934C13.2314 10.8392 12.8909 11.6446 12.2846 12.2384C11.6784 12.8322 10.8561 13.1659 9.99875 13.1659Z"
                fill="#141414"
              />
              <path
                d="M15.1765 6.06895C15.8192 6.06895 16.3402 5.55858 16.3402 4.92901C16.3402 4.29943 15.8192 3.78906 15.1765 3.78906C14.5337 3.78906 14.0127 4.29943 14.0127 4.92901C14.0127 5.55858 14.5337 6.06895 15.1765 6.06895Z"
                fill="#141414"
              />
            </svg>
          </div>
        </div>
        <div className="bg-white rounded-bl-[40px] px-8 flex flex-col justify-center">
            <div>
                <h3 className={`${styles.paragraph3} text-secondary`}>{title}</h3>
                <h2 className={`${styles.heading2} text-black`}>{name}</h2>
            </div>
        </div>
      </div>
    </div>
  );
};

export default TeamCard;
