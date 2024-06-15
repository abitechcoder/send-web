import { styles, layout } from "../styles";
import { VisionIcon } from "../assets";

const VisionAndMission = () => {
  return (
    <section className={`${layout.section} bg-white`}>
      {/* <div className="hidden md:block col-span-2 bg-[url('/src/assets/corporate-identity-image.png')] bg-center bg-cover w-full h-[350px]"></div>     */}
      <div className="flex flex-col gap-4">
        <div>
          <h2
            className={`${styles.heading3} text-secondary text-center lg:text-left`}
          >
            Who We Are
          </h2>
          <h2
            className={`${styles.heading1} md:leading-relaxed lg:leading-[70px] text-center lg:text-left text-black uppercase`}
          >
            Vision & Mission
          </h2>
        </div>
        <div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 py-6">
            <div className="flex items-center gap-4">
              <img src={VisionIcon} className="h-[50px] w-[50px]" alt="" />
              <div className="grid gap-2">
                <h3 className="font-bold text-lg font-barlow">Our Vision</h3>
                <svg
                  width="45"
                  height="38"
                  viewBox="0 0 45 38"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <mask
                    id="path-1-outside-1_39_16"
                    maskUnits="userSpaceOnUse"
                    x="-1"
                    y="-1"
                    width="47"
                    height="40"
                    fill="black"
                  >
                    <rect fill="white" x="-1" y="-1" width="47" height="40" />
                    <path d="M13.05 37.75C10.6 37.75 8.43333 37.2167 6.55 36.15C4.66667 35.0667 3.18333 33.5833 2.1 31.7C1.03333 29.8167 0.5 27.65 0.5 25.2V12.8C0.5 10.35 1.03333 8.18333 2.1 6.3C3.18333 4.41666 4.66667 2.94166 6.55 1.875C8.43333 0.791665 10.6 0.249999 13.05 0.249999C15.5 0.249999 17.6667 0.791665 19.55 1.875C21.4333 2.94166 22.9083 4.41666 23.975 6.3C25.0583 8.18333 25.6 10.35 25.6 12.8V25.2C25.6 27.65 25.0583 29.8167 23.975 31.7C22.9083 33.5833 21.4333 35.0667 19.55 36.15C17.6667 37.2167 15.5 37.75 13.05 37.75ZM13.05 32.75C14.3833 32.75 15.5917 32.4333 16.675 31.8C17.775 31.15 18.65 30.2833 19.3 29.2C19.95 28.1 20.275 26.875 20.275 25.525V12.425C20.275 11.0917 19.95 9.88333 19.3 8.8C18.65 7.7 17.775 6.83333 16.675 6.2C15.5917 5.55 14.3833 5.225 13.05 5.225C11.7167 5.225 10.5 5.55 9.4 6.2C8.31667 6.83333 7.45 7.7 6.8 8.8C6.15 9.88333 5.825 11.0917 5.825 12.425V25.525C5.825 26.875 6.15 28.1 6.8 29.2C7.45 30.2833 8.31667 31.15 9.4 31.8C10.5 32.4333 11.7167 32.75 13.05 32.75ZM38.8551 37V6.75L32.0801 10.875V5.05L38.8551 0.999999H44.1801V37H38.8551Z" />
                  </mask>
                  <path
                    d="M6.55 36.15L6.05137 37.0168L6.05718 37.0201L6.55 36.15ZM2.1 31.7L1.22985 32.1928L1.23318 32.1986L2.1 31.7ZM2.1 6.3L1.23316 5.80137L1.22987 5.80718L2.1 6.3ZM6.55 1.875L7.04283 2.74515L7.04862 2.74182L6.55 1.875ZM19.55 1.875L19.0514 2.74184L19.0572 2.74513L19.55 1.875ZM23.975 6.3L23.1048 6.79283L23.1082 6.79861L23.975 6.3ZM23.975 31.7L23.1082 31.2014L23.1049 31.2072L23.975 31.7ZM19.55 36.15L20.0428 37.0202L20.0486 37.0168L19.55 36.15ZM16.675 31.8L17.1797 32.6633L17.1837 32.6609L16.675 31.8ZM19.3 29.2L20.1575 29.7145L20.1609 29.7087L19.3 29.2ZM19.3 8.8L18.4391 9.30874L18.4425 9.3145L19.3 8.8ZM16.675 6.2L16.1605 7.05749L16.1682 7.06212L16.176 7.06662L16.675 6.2ZM9.4 6.2L9.9047 7.0633L9.90873 7.06092L9.4 6.2ZM6.8 8.8L7.65751 9.31451L7.66093 9.30873L6.8 8.8ZM6.8 29.2L5.93905 29.7087L5.94251 29.7145L6.8 29.2ZM9.4 31.8L8.8855 32.6575L8.89323 32.6621L8.90104 32.6666L9.4 31.8ZM13.05 36.75C10.7496 36.75 8.75689 36.2507 7.04282 35.2799L6.05718 37.0201C8.10977 38.1827 10.4504 38.75 13.05 38.75V36.75ZM7.04862 35.2832C5.31838 34.2879 3.96209 32.9316 2.96682 31.2014L1.23318 32.1986C2.40458 34.235 4.01495 35.8454 6.05139 37.0168L7.04862 35.2832ZM2.97013 31.2072C1.99933 29.4931 1.5 27.5004 1.5 25.2H-0.5C-0.5 27.7996 0.0673378 30.1402 1.22987 32.1928L2.97013 31.2072ZM1.5 25.2V12.8H-0.5V25.2H1.5ZM1.5 12.8C1.5 10.4996 1.99933 8.50689 2.97013 6.79282L1.22987 5.80718C0.067338 7.85977 -0.5 10.2004 -0.5 12.8H1.5ZM2.96682 6.79861C3.96132 5.06972 5.31576 3.72328 7.04282 2.74513L6.05718 1.00487C4.01757 2.16004 2.40535 3.76361 1.23318 5.80138L2.96682 6.79861ZM7.04862 2.74182C8.76167 1.75644 10.7522 1.25 13.05 1.25V-0.750001C10.4478 -0.750001 8.105 -0.173107 6.05139 1.00817L7.04862 2.74182ZM13.05 1.25C15.3478 1.25 17.3383 1.75644 19.0514 2.74182L20.0486 1.00817C17.995 -0.173107 15.6522 -0.750001 13.05 -0.750001V1.25ZM19.0572 2.74513C20.7829 3.72252 22.1275 5.06711 23.1049 6.79282L24.8451 5.80718C23.6892 3.76622 22.0838 2.16081 20.0428 1.00487L19.0572 2.74513ZM23.1082 6.79861C24.0936 8.51167 24.6 10.5022 24.6 12.8H26.6C26.6 10.1978 26.0231 7.855 24.8418 5.80138L23.1082 6.79861ZM24.6 12.8V25.2H26.6V12.8H24.6ZM24.6 25.2C24.6 27.4978 24.0936 29.4883 23.1082 31.2014L24.8418 32.1986C26.0231 30.145 26.6 27.8022 26.6 25.2H24.6ZM23.1049 31.2072C22.1267 32.9342 20.7803 34.2887 19.0514 35.2832L20.0486 37.0168C22.0864 35.8447 23.69 34.2324 24.8451 32.1928L23.1049 31.2072ZM19.0572 35.2799C17.3431 36.2507 15.3504 36.75 13.05 36.75V38.75C15.6496 38.75 17.9902 38.1827 20.0428 37.0201L19.0572 35.2799ZM13.05 33.75C14.5492 33.75 15.9336 33.3918 17.1797 32.6633L16.1703 30.9367C15.2497 31.4749 14.2175 31.75 13.05 31.75V33.75ZM17.1837 32.6609C18.4253 31.9273 19.4209 30.9422 20.1575 29.7145L18.4425 28.6855C17.8791 29.6245 17.1247 30.3727 16.1663 30.9391L17.1837 32.6609ZM20.1609 29.7087C20.9072 28.4458 21.275 27.0434 21.275 25.525H19.275C19.275 26.7066 18.9928 27.7542 18.4391 28.6913L20.1609 29.7087ZM21.275 25.525V12.425H19.275V25.525H21.275ZM21.275 12.425C21.275 10.9209 20.906 9.53298 20.1575 8.2855L18.4425 9.3145C18.994 10.2337 19.275 11.2624 19.275 12.425H21.275ZM20.1609 8.29127C19.4238 7.04378 18.4245 6.05339 17.174 5.33338L16.176 7.06662C17.1255 7.61328 17.8762 8.35622 18.4391 9.30873L20.1609 8.29127ZM17.1895 5.3425C15.942 4.59402 14.5541 4.225 13.05 4.225V6.225C14.2126 6.225 15.2413 6.50598 16.1605 7.05749L17.1895 5.3425ZM13.05 4.225C11.5458 4.225 10.1522 4.59397 8.89127 5.33907L9.90873 7.06092C10.8478 6.50602 11.8875 6.225 13.05 6.225V4.225ZM8.8953 5.3367C7.66221 6.05759 6.67405 7.04747 5.93907 8.29127L7.66093 9.30873C8.22595 8.35253 8.97113 7.60908 9.9047 7.06329L8.8953 5.3367ZM5.94251 8.2855C5.19402 9.53299 4.825 10.9209 4.825 12.425H6.825C6.825 11.2624 7.10598 10.2337 7.65749 9.3145L5.94251 8.2855ZM4.825 12.425V25.525H6.825V12.425H4.825ZM4.825 25.525C4.825 27.0434 5.19281 28.4458 5.93907 29.7087L7.66093 28.6913C7.10719 27.7542 6.825 26.7066 6.825 25.525H4.825ZM5.94251 29.7145C6.67696 30.9386 7.66142 31.923 8.8855 32.6575L9.9145 30.9425C8.97191 30.377 8.22304 29.6281 7.65749 28.6855L5.94251 29.7145ZM8.90104 32.6666C10.1606 33.3918 11.5507 33.75 13.05 33.75V31.75C11.8826 31.75 10.8394 31.4749 9.89896 30.9334L8.90104 32.6666ZM38.8551 37H37.8551V38H38.8551V37ZM38.8551 6.75H39.8551V4.97037L38.335 5.89586L38.8551 6.75ZM32.0801 10.875H31.0801V12.6546L32.6001 11.7291L32.0801 10.875ZM32.0801 5.05L31.567 4.19167L31.0801 4.48273V5.05H32.0801ZM38.8551 0.999999V-1.43051e-06H38.579L38.342 0.141668L38.8551 0.999999ZM44.1801 0.999999H45.1801V-1.43051e-06H44.1801V0.999999ZM44.1801 37V38H45.1801V37H44.1801ZM39.8551 37V6.75H37.8551V37H39.8551ZM38.335 5.89586L31.56 10.0209L32.6001 11.7291L39.3751 7.60414L38.335 5.89586ZM33.0801 10.875V5.05H31.0801V10.875H33.0801ZM32.5932 5.90833L39.3682 1.85833L38.342 0.141668L31.567 4.19167L32.5932 5.90833ZM38.8551 2H44.1801V-1.43051e-06H38.8551V2ZM43.1801 0.999999V37H45.1801V0.999999H43.1801ZM44.1801 36H38.8551V38H44.1801V36Z"
                    fill="#141414"
                    mask="url(#path-1-outside-1_39_16)"
                  />
                </svg>
              </div>
            </div>
            <p
              className={`w-full text-left mx-auto text-black ${styles.paragraph2}`}
            >
              A Sierra Leone where people’s rights and well-being are
              guaranteed.
            </p>
          </div>
            <hr />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 py-6">
            <div className="flex items-center gap-4">
              <img src={VisionIcon} className="h-[50px] w-[50px]" alt="" />
              <div className="grid gap-2">
                <h3 className="font-bold text-lg font-barlow">Our Mission</h3>
                <svg
                  width="60"
                  height="37"
                  viewBox="0 0 60 37"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <mask
                    id="path-1-outside-1_39_24"
                    maskUnits="userSpaceOnUse"
                    x="-1"
                    y="-1"
                    width="62"
                    height="39"
                    fill="black"
                  >
                    <rect fill="white" x="-1" y="-1" width="62" height="39" />
                    <path d="M14.8 36.5C12.0333 36.5 9.53333 35.8 7.3 34.4C5.1 33 3.36667 30.9667 2.1 28.3C0.833333 25.6 0.2 22.3333 0.2 18.5C0.2 14.6667 0.833333 11.4167 2.1 8.75C3.36667 6.05 5.1 4 7.3 2.6C9.53333 1.2 12.0333 0.499998 14.8 0.499998C17.6 0.499998 20.1 1.2 22.3 2.6C24.5 4 26.2333 6.05 27.5 8.75C28.8 11.4167 29.45 14.6667 29.45 18.5C29.45 22.3333 28.8 25.6 27.5 28.3C26.2333 30.9667 24.5 33 22.3 34.4C20.1 35.8 17.6 36.5 14.8 36.5ZM14.8 30.85C16.4333 30.85 17.85 30.4167 19.05 29.55C20.25 28.65 21.1833 27.2833 21.85 25.45C22.55 23.6167 22.9 21.3 22.9 18.5C22.9 15.6667 22.55 13.35 21.85 11.55C21.1833 9.71667 20.25 8.36666 19.05 7.5C17.85 6.6 16.4333 6.15 14.8 6.15C13.2333 6.15 11.8333 6.6 10.6 7.5C9.4 8.36666 8.45 9.71667 7.75 11.55C7.08333 13.35 6.75 15.6667 6.75 18.5C6.75 21.3 7.08333 23.6167 7.75 25.45C8.45 27.2833 9.4 28.65 10.6 29.55C11.8333 30.4167 13.2333 30.85 14.8 30.85ZM33.3438 36V31.65L47.2438 18.45C48.4104 17.35 49.2771 16.3833 49.8438 15.55C50.4104 14.7167 50.7771 13.95 50.9438 13.25C51.1438 12.5167 51.2438 11.8333 51.2438 11.2C51.2438 9.6 50.6938 8.36666 49.5938 7.5C48.4938 6.6 46.8771 6.15 44.7438 6.15C43.0438 6.15 41.4938 6.45 40.0938 7.05C38.7271 7.65 37.5438 8.56666 36.5438 9.8L31.9938 6.3C33.3604 4.46666 35.1938 3.05 37.4938 2.05C39.8271 1.01667 42.4271 0.499998 45.2938 0.499998C47.8271 0.499998 50.0271 0.916664 51.8938 1.75C53.7938 2.55 55.2438 3.7 56.2438 5.2C57.2771 6.7 57.7938 8.48333 57.7938 10.55C57.7938 11.6833 57.6438 12.8167 57.3438 13.95C57.0438 15.05 56.4771 16.2167 55.6438 17.45C54.8104 18.6833 53.5938 20.0667 51.9938 21.6L40.0438 32.95L38.6938 30.5H59.1437V36H33.3438Z" />
                  </mask>
                  <path
                    d="M7.3 34.4L6.76311 35.2437L6.76886 35.2473L7.3 34.4ZM2.1 28.3L1.19466 28.7247L1.19672 28.7291L2.1 28.3ZM2.1 8.75L3.00329 9.17906L3.00532 9.17472L2.1 8.75ZM7.3 2.6L6.76885 1.75269L6.76312 1.75634L7.3 2.6ZM27.5 8.75L26.5947 9.17472L26.5979 9.18148L26.6011 9.1882L27.5 8.75ZM27.5 28.3L26.599 27.8662L26.5967 27.8709L27.5 28.3ZM22.3 34.4L21.7631 33.5563L22.3 34.4ZM19.05 29.55L19.6355 30.3607L19.6428 30.3554L19.65 30.35L19.05 29.55ZM21.85 25.45L20.9158 25.0933L20.9129 25.1008L20.9102 25.1083L21.85 25.45ZM21.85 11.55L20.9102 11.8917L20.914 11.9021L20.918 11.9124L21.85 11.55ZM19.05 7.5L18.45 8.3L18.4572 8.3054L18.4645 8.31068L19.05 7.5ZM10.6 7.5L11.1855 8.31069L11.1895 8.30779L10.6 7.5ZM7.75 11.55L6.81573 11.1933L6.81225 11.2027L7.75 11.55ZM7.75 25.45L6.81021 25.7917L6.81293 25.7992L6.81578 25.8067L7.75 25.45ZM10.6 29.55L10 30.35L10.0124 30.3593L10.0251 30.3682L10.6 29.55ZM14.8 35.5C12.2114 35.5 9.8972 34.8479 7.83114 33.5527L6.76886 35.2473C9.16947 36.7521 11.8552 37.5 14.8 37.5V35.5ZM7.83688 33.5563C5.81581 32.2702 4.20018 30.3907 3.00328 27.8709L1.19672 28.7291C2.53315 31.5426 4.38419 33.7298 6.76312 35.2437L7.83688 33.5563ZM3.00532 27.8753C1.81614 25.3404 1.2 22.2269 1.2 18.5H-0.8C-0.8 22.4398 -0.149477 25.8596 1.19468 28.7247L3.00532 27.8753ZM1.2 18.5C1.2 14.7725 1.81634 11.6779 3.00328 9.17906L1.19672 8.32094C-0.149672 11.1555 -0.8 14.5608 -0.8 18.5H1.2ZM3.00532 9.17472C4.20327 6.6212 5.81899 4.72777 7.83688 3.44366L6.76312 1.75634C4.38101 3.27223 2.53006 5.47879 1.19468 8.32528L3.00532 9.17472ZM7.83114 3.44729C9.8972 2.15214 12.2114 1.5 14.8 1.5V-0.500002C11.8552 -0.500002 9.16947 0.247856 6.76887 1.75271L7.83114 3.44729ZM14.8 1.5C17.4245 1.5 19.7355 2.15335 21.7631 3.44366L22.8369 1.75634C20.4645 0.246648 17.7755 -0.500002 14.8 -0.500002V1.5ZM21.7631 3.44366C23.781 4.72777 25.3967 6.6212 26.5947 9.17472L28.4053 8.32528C27.0699 5.47879 25.219 3.27223 22.8369 1.75634L21.7631 3.44366ZM26.6011 9.1882C27.8181 11.6845 28.45 14.7757 28.45 18.5H30.45C30.45 14.5576 29.7819 11.1488 28.3989 8.3118L26.6011 9.1882ZM28.45 18.5C28.45 22.2237 27.8183 25.3338 26.599 27.8662L28.401 28.7338C29.7817 25.8662 30.45 22.443 30.45 18.5H28.45ZM26.5967 27.8709C25.3998 30.3907 23.7842 32.2702 21.7631 33.5563L22.8369 35.2437C25.2158 33.7298 27.0669 31.5426 28.4033 28.7291L26.5967 27.8709ZM21.7631 33.5563C19.7355 34.8466 17.4245 35.5 14.8 35.5V37.5C17.7755 37.5 20.4645 36.7533 22.8369 35.2437L21.7631 33.5563ZM14.8 31.85C16.6207 31.85 18.2475 31.3631 19.6355 30.3607L18.4645 28.7393C17.4525 29.4702 16.2459 29.85 14.8 29.85V31.85ZM19.65 30.35C21.0458 29.3032 22.0764 27.7535 22.7898 25.7917L20.9102 25.1083C20.2902 26.8132 19.4542 27.9968 18.45 28.75L19.65 30.35ZM22.7842 25.8067C23.542 23.822 23.9 21.3741 23.9 18.5H21.9C21.9 21.2259 21.558 23.4113 20.9158 25.0933L22.7842 25.8067ZM23.9 18.5C23.9 15.5954 23.5427 13.1437 22.782 11.1876L20.918 11.9124C21.5573 13.5563 21.9 15.7379 21.9 18.5H23.9ZM22.7898 11.2083C22.0761 9.24566 21.0423 7.70533 19.6355 6.68932L18.4645 8.31068C19.4577 9.028 20.2905 10.1877 20.9102 11.8917L22.7898 11.2083ZM19.65 6.7C18.2613 5.65847 16.6293 5.15 14.8 5.15V7.15C16.2373 7.15 17.4387 7.54153 18.45 8.3L19.65 6.7ZM14.8 5.15C13.0274 5.15 11.4198 5.66385 10.0105 6.69221L11.1895 8.30779C12.2469 7.53615 13.4393 7.15 14.8 7.15V5.15ZM10.0145 6.68932C8.61265 7.70177 7.5631 9.23604 6.81578 11.1933L8.68422 11.9067C9.3369 10.1973 10.1873 9.03156 11.1855 8.31068L10.0145 6.68932ZM6.81225 11.2027C6.08977 13.1534 5.75 15.5993 5.75 18.5H7.75C7.75 15.7341 8.0769 13.5466 8.68775 11.8973L6.81225 11.2027ZM5.75 18.5C5.75 21.3701 6.09045 23.8124 6.81021 25.7917L8.68979 25.1083C8.07622 23.4209 7.75 21.2299 7.75 18.5H5.75ZM6.81578 25.8067C7.56275 27.763 8.60903 29.3068 10 30.35L11.2 28.75C10.191 27.9932 9.33725 26.8036 8.68422 25.0933L6.81578 25.8067ZM10.0251 30.3682C11.4337 31.358 13.0362 31.85 14.8 31.85V29.85C13.4305 29.85 12.233 29.4753 11.1749 28.7318L10.0251 30.3682ZM33.3438 36H32.3438V37H33.3438V36ZM33.3438 31.65L32.6551 30.9249L32.3438 31.2206V31.65H33.3438ZM47.2438 18.45L46.5577 17.7224L46.5551 17.7249L47.2438 18.45ZM49.8438 15.55L49.0168 14.9877V14.9877L49.8438 15.55ZM50.9438 13.25L49.979 12.9869L49.9747 13.0026L49.9709 13.0184L50.9438 13.25ZM49.5938 7.5L48.9605 8.27396L48.9676 8.27979L48.9749 8.28549L49.5938 7.5ZM40.0938 7.05L39.6998 6.13082L39.6918 6.13435L40.0938 7.05ZM36.5438 9.8L35.934 10.5926L36.7066 11.1869L37.3205 10.4298L36.5438 9.8ZM31.9938 6.3L31.192 5.70233L30.6033 6.49206L31.384 7.09262L31.9938 6.3ZM37.4938 2.05L37.8925 2.96709L37.8987 2.96435L37.4938 2.05ZM51.8937 1.75L51.4861 2.66313L51.4958 2.66749L51.5057 2.67163L51.8937 1.75ZM56.2438 5.2L55.4117 5.7547L55.4159 5.76103L55.4202 5.7673L56.2438 5.2ZM57.3438 13.95L58.3085 14.2131L58.3105 14.2059L57.3438 13.95ZM51.9938 21.6L52.6824 22.3251L52.6857 22.322L51.9938 21.6ZM40.0438 32.95L39.1679 33.4326L39.7931 34.5672L40.7324 33.6751L40.0438 32.95ZM38.6937 30.5V29.5H37.001L37.8179 30.9826L38.6937 30.5ZM59.1437 30.5H60.1437V29.5H59.1437V30.5ZM59.1437 36V37H60.1437V36H59.1437ZM34.3438 36V31.65H32.3438V36H34.3438ZM34.0324 32.3751L47.9324 19.1751L46.5551 17.7249L32.6551 30.9249L34.0324 32.3751ZM47.9298 19.1776C49.1222 18.0533 50.0465 17.0302 50.6707 16.1123L49.0168 14.9877C48.5076 15.7365 47.6987 16.6467 46.5577 17.7224L47.9298 19.1776ZM50.6707 16.1123C51.2803 15.2157 51.7129 14.3368 51.9166 13.4816L49.9709 13.0184C49.8412 13.5632 49.5405 14.2176 49.0168 14.9877L50.6707 16.1123ZM51.9085 13.5131C52.1274 12.7106 52.2438 11.9379 52.2438 11.2H50.2438C50.2438 11.7288 50.1601 12.3228 49.979 12.9869L51.9085 13.5131ZM52.2438 11.2C52.2438 9.34301 51.5896 7.7994 50.2126 6.71451L48.9749 8.28549C49.7979 8.93393 50.2438 9.85699 50.2438 11.2H52.2438ZM50.227 6.72604C48.878 5.62232 46.9968 5.15 44.7438 5.15V7.15C46.7573 7.15 48.1095 7.57768 48.9605 8.27396L50.227 6.72604ZM44.7438 5.15C42.9241 5.15 41.238 5.47163 39.6998 6.13085L40.4877 7.96914C41.7495 7.42836 43.1634 7.15 44.7438 7.15V5.15ZM39.6918 6.13435C38.1699 6.80248 36.8608 7.82119 35.767 9.1702L37.3205 10.4298C38.2267 9.31213 39.2843 8.49751 40.4957 7.96564L39.6918 6.13435ZM37.1535 9.00737L32.6035 5.50737L31.384 7.09262L35.934 10.5926L37.1535 9.00737ZM32.7955 6.89766C34.0481 5.21738 35.7365 3.90446 37.8925 2.96707L37.095 1.13293C34.651 2.19553 32.6728 3.71595 31.192 5.70233L32.7955 6.89766ZM37.8987 2.96435C40.0896 1.99407 42.5493 1.5 45.2938 1.5V-0.500002C42.3048 -0.500002 39.5645 0.039257 37.0888 1.13565L37.8987 2.96435ZM45.2938 1.5C47.7193 1.5 49.7745 1.89904 51.4861 2.66313L52.3014 0.836859C50.2796 -0.0657125 47.9349 -0.500002 45.2938 -0.500002V1.5ZM51.5057 2.67163C53.2516 3.40676 54.5355 4.44045 55.4117 5.7547L57.0758 4.6453C55.952 2.95954 54.3359 1.69324 52.2818 0.828362L51.5057 2.67163ZM55.4202 5.7673C56.3236 7.0786 56.7938 8.65769 56.7938 10.55H58.7938C58.7938 8.30897 58.2306 6.32139 57.0673 4.63269L55.4202 5.7673ZM56.7938 10.55C56.7938 11.594 56.6557 12.6414 56.377 13.6941L58.3105 14.2059C58.6318 12.9919 58.7938 11.7726 58.7938 10.55H56.7938ZM56.379 13.6869C56.1151 14.6545 55.6048 15.7214 54.8152 16.8901L56.4723 18.0099C57.3493 16.7119 57.9724 15.4455 58.3085 14.2131L56.379 13.6869ZM54.8152 16.8901C54.0357 18.0438 52.8729 19.3724 51.3018 20.878L52.6857 22.322C54.3146 20.7609 55.5851 19.3229 56.4723 18.0099L54.8152 16.8901ZM51.3051 20.8749L39.3551 32.2249L40.7324 33.6751L52.6824 22.3251L51.3051 20.8749ZM40.9196 32.4674L39.5696 30.0174L37.8179 30.9826L39.1679 33.4326L40.9196 32.4674ZM38.6937 31.5H59.1437V29.5H38.6937V31.5ZM58.1437 30.5V36H60.1437V30.5H58.1437ZM59.1437 35H33.3438V37H59.1437V35Z"
                    fill="#141414"
                    mask="url(#path-1-outside-1_39_24)"
                  />
                </svg>
              </div>
            </div>
            <p
              className={`w-full text-left mx-auto text-black ${styles.paragraph2}`}
            >
              Promotion of good governance, voice, accountably basic services
              and equality for women and men in Sierra Leone.
            </p>
          </div>
          <hr />
        </div>
      </div>
    </section>
  );
};

export default VisionAndMission;
