import { Progress } from "@/components/ui/progress";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import styles from "../styles";

export interface Project {
  title: string;
}

const ProjectCard = ({ title }: Project) => {
  return (
    <div className="bg-white rounded-lg py-6 px-4 flex flex-col gap-4 shadow-md">
      <div className="flex items-center gap-8">
        <div className="flex items-center gap-2">
          <svg
            width="25"
            height="25"
            viewBox="0 0 25 25"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M3.78381 8.97706H14.5651"
              stroke="#03C9D7"
              stroke-width="1.5"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M7.53491 16.5398H9.40991"
              stroke="#03C9D7"
              stroke-width="1.5"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M11.7542 16.5398H15.5042"
              stroke="#03C9D7"
              stroke-width="1.5"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M22.5338 12.3141V16.1712C22.5338 19.4895 21.6994 20.3214 18.3713 20.3214H7.94631C4.61819 20.3214 3.78381 19.4895 3.78381 16.1712V8.40021C3.78381 5.08193 4.61819 4.25 7.94631 4.25H14.5651"
              stroke="#03C9D7"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M17.3755 6.84977H22.5317"
              stroke="#03C9D7"
              stroke-width="1.5"
              stroke-linecap="round"
            />
            <path
              d="M19.9573 9.44958V4.25"
              stroke="#03C9D7"
              stroke-width="1.5"
              stroke-linecap="round"
            />
          </svg>
          <p className={`${styles.paragraph2} text-primary`}>Kenema Office</p>
        </div>

        <div className="flex items-center gap-2">
          <svg
            width="25"
            height="25"
            viewBox="0 0 25 25"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M15.0333 19.9993V15.4992C15.0333 15.3003 14.9542 15.1095 14.8136 14.9689C14.6729 14.8282 14.4822 14.7492 14.2833 14.7492H11.2833C11.0844 14.7492 10.8936 14.8282 10.7529 14.9689C10.6123 15.1095 10.5333 15.3003 10.5333 15.4992V19.9993C10.5333 20.1982 10.4543 20.389 10.3136 20.5296C10.173 20.6703 9.98225 20.7493 9.78336 20.7493L5.28391 20.7499C5.18541 20.7499 5.08787 20.7305 4.99687 20.6928C4.90586 20.6552 4.82317 20.5999 4.75352 20.5303C4.68386 20.4606 4.62861 20.3779 4.59091 20.2869C4.55322 20.1959 4.53381 20.0984 4.53381 19.9999V11.3317C4.53381 11.2273 4.55565 11.1239 4.59791 11.0284C4.64018 10.9328 4.70195 10.8471 4.77926 10.7768L12.2787 3.95794C12.4168 3.83242 12.5967 3.76286 12.7833 3.76286C12.9699 3.76285 13.1498 3.83239 13.2878 3.95791L20.7883 10.7768C20.8657 10.8471 20.9274 10.9328 20.9697 11.0284C21.012 11.1239 21.0338 11.2273 21.0338 11.3318V19.9999C21.0338 20.0984 21.0144 20.1959 20.9767 20.2869C20.939 20.3779 20.8838 20.4606 20.8141 20.5303C20.7445 20.5999 20.6618 20.6552 20.5708 20.6928C20.4798 20.7305 20.3822 20.7499 20.2837 20.7499L15.7832 20.7493C15.5843 20.7493 15.3935 20.6703 15.2529 20.5296C15.1123 20.389 15.0333 20.1982 15.0333 19.9993V19.9993Z"
              stroke="#03C9D7"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          <p className={`${styles.paragraph2} text-primary`}>
            Finanace Department
          </p>
        </div>
      </div>

      <div className="grid grid-cols-[250px_1fr]">
        <div className="flex items-center gap-2">
          <svg
            width="17"
            height="16"
            viewBox="0 0 17 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M6.78381 3L11.7838 8L6.78381 13"
              stroke="#30354E"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          <h2 className={`${styles.heading3}`}>{title}</h2>
          <svg
            width="12"
            height="3"
            viewBox="0 0 12 3"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M6.03381 2.5C6.72417 2.5 7.28381 1.94036 7.28381 1.25C7.28381 0.559644 6.72417 0 6.03381 0C5.34346 0 4.78381 0.559644 4.78381 1.25C4.78381 1.94036 5.34346 2.5 6.03381 2.5Z"
              fill="#849299"
            />
            <path
              d="M10.0338 2.5C10.7242 2.5 11.2838 1.94036 11.2838 1.25C11.2838 0.559644 10.7242 0 10.0338 0C9.34346 0 8.78381 0.559644 8.78381 1.25C8.78381 1.94036 9.34346 2.5 10.0338 2.5Z"
              fill="#849299"
            />
            <path
              d="M2.03381 2.5C2.72417 2.5 3.28381 1.94036 3.28381 1.25C3.28381 0.559644 2.72417 0 2.03381 0C1.34346 0 0.783813 0.559644 0.783813 1.25C0.783813 1.94036 1.34346 2.5 2.03381 2.5Z"
              fill="#849299"
            />
          </svg>
        </div>
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-10">
            <div className="flex items-center relative">
              <Avatar className="w-5 h-5">
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              <Avatar className="w-5 h-5 absolute left-4">
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              <Avatar className="w-5 h-5 absolute left-8">
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
            </div>
            <p className={`${styles.paragraph3}`}>3 Member</p>
          </div>
          <Progress value={21} className="h-2 w-[100px] bg-tertiary" />
          <p className={`${styles.paragraph3}`}>21% task complete</p>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
