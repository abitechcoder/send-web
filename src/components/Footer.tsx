import { useQuery } from "@tanstack/react-query";
import { LogoWhite, YoutubeLogo } from "../assets";
import { Link } from "react-router-dom";
import { fetchProgramAreas } from "../api";
import { ProgramType } from "../types";

const Footer = () => {
  const { data: programs }: any = useQuery(["programAreas"], fetchProgramAreas);
  return (
    <section>
      <div className="bg-dark bg-[url('/src/assets/footer-art.png')] bg-no-repeat  py-[40px] px-4 lg:px-[80px] lg:py-[80px] relative">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-y-8 md:gap-8">
          <div className="w-full grid place-items-center place-content-start md:place-items-start gap-4 lg:gap-8">
            <Link to={"/"}>
              <img
                src={LogoWhite}
                className="h-[50px] lg:h-[70px]"
                alt="Logo Image"
              />
            </Link>
            <p
              className={`text-lightgrey text-center md:text-left text-xs lg:text-sm font-manrope `}
            >
              SEND-Sierra Leone is a non-governmental organization officially
              registered with the Ministry of Finance and Economic Development
              of the Republic of Sierra Leone.
            </p>
            <div className="flex items-center gap-4">
              <div className="bg-[#FFFFFF1A] h-[30px] w-[30px] flex justify-center items-center rounded-full">
                <svg
                  width="16"
                  height="14"
                  viewBox="0 0 16 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M15.9983 2.13599C15.3984 2.39715 14.7652 2.56037 14.0987 2.65831C14.7652 2.26657 15.2984 1.64633 15.5317 0.895504C14.8985 1.25459 14.1987 1.51575 13.4321 1.67897C12.8323 1.05873 11.9658 0.666992 11.0326 0.666992C9.23297 0.666992 7.7666 2.10335 7.7666 3.86615C7.7666 4.12731 7.79992 4.35582 7.86658 4.58433C5.16711 4.45375 2.73426 3.18062 1.10125 1.22195C0.834633 1.71162 0.668 2.23393 0.668 2.82153C0.668 3.93144 1.23455 4.91078 2.13438 5.49838C1.60115 5.46573 1.10125 5.33516 0.634673 5.10664V5.13929C0.634673 6.70622 1.76778 8.012 3.26749 8.3058C3.00087 8.37109 2.70093 8.40374 2.40099 8.40374C2.20103 8.40374 1.96774 8.37109 1.76778 8.33845C2.20103 9.61158 3.40079 10.5583 4.83384 10.5583C3.70073 11.407 2.30101 11.9293 0.76798 11.9293C0.501366 11.9293 0.234752 11.9293 0.00146484 11.8967C1.46784 12.8107 3.16751 13.3331 5.0338 13.3331C11.0659 13.3331 14.3653 8.43638 14.3653 4.1926C14.3653 4.06202 14.3653 3.8988 14.3653 3.76822C14.9985 3.34384 15.5651 2.78888 15.9983 2.13599Z"
                    fill="white"
                  />
                </svg>
              </div>
              <div className="bg-[#FFFFFF1A] h-[30px] w-[30px] flex justify-center items-center rounded-full">
                <svg
                  width="10"
                  height="18"
                  viewBox="0 0 10 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M3.14965 17.5369V9.74909H0.474121V6.71402H3.14965V4.47575C3.14965 1.87826 4.76928 0.463867 7.13485 0.463867C8.26798 0.463867 9.24186 0.546505 9.52567 0.583441V3.29798L7.88502 3.29871C6.59848 3.29871 6.34938 3.89753 6.34938 4.77627V6.71402H9.41764L9.01814 9.74909H6.34937V17.5369H3.14965Z"
                    fill="white"
                  />
                </svg>
              </div>

              <div className="bg-[#FFFFFF1A] h-[30px] w-[30px] flex justify-center items-center rounded-full">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9.99984 2.21173C12.5892 2.21173 12.8959 2.22123 13.9188 2.26692C14.5338 2.27429 15.143 2.38491 15.7199 2.59397C16.1382 2.752 16.5181 2.99408 16.8351 3.30463C17.1522 3.61518 17.3993 3.98731 17.5607 4.39708C17.7741 4.96213 17.887 5.55884 17.8945 6.16128C17.9407 7.16325 17.9509 7.46362 17.9509 10C17.9509 12.5364 17.9412 12.8367 17.8945 13.8387C17.887 14.4412 17.7741 15.0379 17.5607 15.6029C17.3993 16.0127 17.1522 16.3848 16.8351 16.6954C16.5181 17.0059 16.1382 17.248 15.7199 17.406C15.143 17.6151 14.5338 17.7257 13.9188 17.7331C12.8963 17.7783 12.5897 17.7883 9.99984 17.7883C7.40999 17.7883 7.10335 17.7788 6.08089 17.7331C5.46586 17.7257 4.85668 17.6151 4.27982 17.406C3.86149 17.248 3.48158 17.0059 3.16454 16.6954C2.8475 16.3848 2.60036 16.0127 2.43903 15.6029C2.2256 15.0379 2.11267 14.4412 2.10514 13.8387C2.05896 12.8367 2.0488 12.5364 2.0488 10C2.0488 7.46362 2.0585 7.16325 2.10514 6.16128C2.11267 5.55884 2.2256 4.96213 2.43903 4.39708C2.60036 3.98731 2.8475 3.61518 3.16454 3.30463C3.48158 2.99408 3.86149 2.752 4.27982 2.59397C4.85668 2.38491 5.46586 2.27429 6.08089 2.26692C7.10381 2.22168 7.41045 2.21173 9.99984 2.21173ZM9.99984 0.5C7.36751 0.5 7.03592 0.510857 6.00146 0.556997C5.19654 0.57268 4.40017 0.721964 3.64621 0.9985C2.99944 1.23719 2.41363 1.61125 1.92965 2.09457C1.43579 2.56881 1.05359 3.14295 0.809753 3.77689C0.527437 4.51541 0.375033 5.29548 0.359023 6.08392C0.312841 7.09631 0.301758 7.4211 0.301758 9.99955C0.301758 12.578 0.312841 12.9028 0.359946 13.9161C0.375956 14.7045 0.528361 15.4846 0.810676 16.2231C1.05424 16.857 1.43612 17.4311 1.92965 17.9054C2.4139 18.3889 3.00003 18.7629 3.64714 19.0015C4.40109 19.278 5.19747 19.4273 6.00238 19.443C7.03685 19.4882 7.36704 19.5 10.0008 19.5C12.6345 19.5 12.9647 19.4891 13.9991 19.443C14.8041 19.4273 15.6004 19.278 16.3544 19.0015C16.9984 18.757 17.5833 18.3835 18.0715 17.9049C18.5598 17.4263 18.9407 16.8532 19.1899 16.2222C19.4722 15.4837 19.6247 14.7036 19.6407 13.9152C19.6868 12.9028 19.6979 12.578 19.6979 9.99955C19.6979 7.4211 19.6868 7.09631 19.6397 6.08302C19.6237 5.29458 19.4713 4.51451 19.189 3.77599C18.9454 3.14213 18.5636 2.56799 18.07 2.09366C17.5858 1.61024 16.9997 1.23617 16.3526 0.997595C15.5986 0.721059 14.8022 0.571775 13.9973 0.556093C12.9638 0.510857 12.6322 0.5 9.99984 0.5Z"
                    fill="white"
                  />
                  <path
                    d="M9.99875 5.12109C9.01376 5.12109 8.05089 5.4072 7.2319 5.94323C6.41292 6.47925 5.77459 7.24113 5.39765 8.13252C5.02071 9.0239 4.92209 10.0047 5.11425 10.951C5.30641 11.8973 5.78073 12.7665 6.47722 13.4488C7.17372 14.131 8.0611 14.5956 9.02717 14.7838C9.99323 14.9721 10.9946 14.8755 11.9046 14.5062C12.8146 14.137 13.5924 13.5118 14.1396 12.7095C14.6869 11.9073 14.979 10.9642 14.979 9.99934C14.979 8.70555 14.4543 7.46475 13.5203 6.5499C12.5863 5.63505 11.3196 5.12109 9.99875 5.12109ZM9.99875 13.1659C9.35939 13.1659 8.73438 12.9801 8.20276 12.6322C7.67115 12.2843 7.25681 11.7897 7.01213 11.2111C6.76746 10.6325 6.70344 9.99583 6.82817 9.38158C6.95291 8.76734 7.26079 8.20312 7.71289 7.76027C8.16499 7.31743 8.741 7.01585 9.36809 6.89367C9.99517 6.77148 10.6452 6.83419 11.2359 7.07386C11.8266 7.31352 12.3314 7.71939 12.6866 8.24012C13.0419 8.76085 13.2314 9.37306 13.2314 9.99934C13.2314 10.8392 12.8909 11.6446 12.2846 12.2384C11.6784 12.8322 10.8561 13.1659 9.99875 13.1659Z"
                    fill="white"
                  />
                  <path
                    d="M15.1765 6.06895C15.8192 6.06895 16.3402 5.55858 16.3402 4.92901C16.3402 4.29943 15.8192 3.78906 15.1765 3.78906C14.5337 3.78906 14.0127 4.29943 14.0127 4.92901C14.0127 5.55858 14.5337 6.06895 15.1765 6.06895Z"
                    fill="white"
                  />
                </svg>
              </div>

              <a
                href="http://www.youtube.com/@sendsierraleone9509"
                target="_blank"
              >
                <div className="bg-[#FFFFFF1A] h-[30px] w-[30px] flex justify-center items-center rounded-full">
                  <img
                    src={YoutubeLogo}
                    alt="Youtube Logo"
                    className="w-[24px]"
                  />
                </div>
              </a>
            </div>
          </div>
          <div className="col-span-3">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 lg:gap-8 font-manrope text-white">
              <div className="grid gap-3 place-content-start md:justify-center">
                <h3 className="font-bold">Who We Are</h3>
                <Link
                  to="/whoweare/corporate-identity"
                  className="text-lightgrey lg:text-sm text-xs"
                >
                  Corporate Identity
                </Link>
                {/* <Link to="/whoweare/evolution-of-send" className="text-lightgrey lg:text-sm text-xs">
                  Evolution of Send
                </Link> */}
                <Link
                  to="/whoweare/org-structure"
                  className="text-lightgrey lg:text-sm text-xs"
                >
                  Organization Structure
                </Link>
                <Link
                  to="/whoweare/mgt-team"
                  className="text-lightgrey lg:text-sm text-xs"
                >
                  Sen. Management Team
                </Link>
                <Link
                  to="/whoweare/board-of-directors"
                  className="text-lightgrey lg:text-sm text-xs"
                >
                  Board of Directors
                </Link>
                {/* <Link to="/whoweare/sierra-leone" className="text-lightgrey lg:text-sm text-xs">
                  Sierra Leone
                </Link> */}
              </div>
              <div className="grid gap-3 place-content-start md:justify-center md:hidden lg:grid">
                <h3 className="font-bold">Program Areas</h3>
                {programs?.map((program: ProgramType) => (
                  <Link
                  key={program?.id}
                    to={`/program-areas/${program?.id}`}
                    className="text-lightgrey lg:text-sm text-xs"
                  >
                    {program.title}
                  </Link>
                ))}
              </div>

              <div className="grid gap-3 place-content-start md:justify-center">
                <h3 className="font-bold">Resources</h3>
                <Link
                  to="/publications/project-reports"
                  className="text-lightgrey lg:text-sm text-xs"
                >
                  Reports on Projects
                </Link>
                <Link
                  to="/publications/newsletter"
                  className="text-lightgrey lg:text-sm text-xs"
                >
                  Newsletters
                </Link>
                <Link
                  to="/publications/manual-and-profiles"
                  className="text-lightgrey lg:text-sm text-xs"
                >
                  Manual & Profiles
                </Link>
                <Link
                  to="/publications/case-stories"
                  className="text-lightgrey lg:text-sm text-xs"
                >
                  Case Stories
                </Link>
                <Link
                  to="/gallery"
                  className="text-lightgrey lg:text-sm text-xs"
                >
                  Gallery
                </Link>
              </div>
              <div className="grid gap-3 place-content-start md:justify-center md:hidden lg:block">
                <h3 className="font-bold lg:mb-3">District Offices</h3>
                <div className="mt-3">
                  <div>
                    <h5 className="font-bold text-sm">Head Office:</h5>
                    <p className="text-xs text-lightgrey">
                      3 Amie-Jay Drive, Reservation Road, Kenema
                    </p>
                  </div>
                  <div className="grid gap-3 mt-3">
                    <div>
                      <h5 className="font-bold text-xs">
                        Bonthe District Program Office:
                      </h5>
                      <p className="text-xs text-lightgrey">
                        Main Prison Road, Mattru Jong, Bonthe District
                      </p>
                    </div>
                    <div>
                      <h5 className="font-bold text-xs">
                        Freetown, Western Area Districts Program Office:
                      </h5>
                      <p className="text-xs text-lightgrey">
                        38A Spur Road, Blue Bell Junction, Freetown
                      </p>
                    </div>
                    <div>
                      <h5 className="font-bold text-xs">
                        Kailahun District Program Office:
                      </h5>
                      <p className="text-xs text-lightgrey">
                        71 A Buedu Road, Kissi Town Section, Kailahun District
                      </p>
                    </div>
                    <div>
                      <h5 className="font-bold text-xs">
                        Kono District Program Office:
                      </h5>
                      <p className="text-xs text-lightgrey">
                        64 Bona Street, Koidu City, Kono District
                      </p>
                    </div>
                    <div>
                      <h5 className="font-bold text-xs">
                        Port-Loko District Program Office:
                      </h5>
                      <p className="text-xs text-lightgrey">
                        4 Barracks Road, Port Loko City, Port Loko District
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <footer className="py-4 flex justify-center bg-[#1B213F]">
        <p className="text-white text-sm md:text-base font-manrope">
          All rights reserved. Copyright © 2024
        </p>
      </footer>
    </section>
  );
};

export default Footer;
