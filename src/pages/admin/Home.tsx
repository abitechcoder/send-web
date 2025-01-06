import { home } from "@/src/assets";
import styles from "../../styles";
import { ChangeEvent, FormEvent, useState } from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import { HomePageProps } from "@/src/types";
import { getHomeData, updateHomeData } from "@/src/data";
import { toast } from "react-toastify";
import { AxiosError } from "axios";
import { NavHeader } from "@/src/components";

export async function loader() {
  const homeData = await getHomeData(1);
  return { homeData };
}

const Home = () => {
  const { homeData }: any = useLoaderData();

  const [formData, setFormData] = useState<HomePageProps>(homeData);
  const navigate = useNavigate();

  const handleInputChange = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const data = {
      title: formData?.title,
      subtitle: formData?.subtitle,
      text: formData?.text,
    };

    // Submit Data to the Server
    try {
      const response = await updateHomeData(formData.id, data);
      if (response) {
        toast.success("Data updated successfully!!!");
        navigate("/admin");
      }
    } catch (error) {
      toast.error("Error occurred while saving changes");
      console.error("Error:", error as AxiosError);
    }
  };

  return (
    <div className="w-full bg-[#FAFAFA] h-full grid grid-rows-[240px_1fr] lg:grid-rows-[100px_1fr]">
      <div className="p-3 lg:px-8 lg:py-4 bg-white mb-5">
        <NavHeader title="Homepage" />
      </div>

      <div className="p-3 lg:px-8 lg:py-4 overflow-y-scroll">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          <div className="lg:col-span-2">
            <div className="relative">
              <img
                src={home}
                alt="Homepage"
                className="w-full h-[350px] border-1 border-[#D8DDE4]"
              />
              <div className="absolute top-0 left-8 w-[45%] translate-y-2/4 space-y-2">
                <h3
                  className={`text-xs text-secondary text-center md:text-left font-bold`}
                >
                  {formData.title}
                </h3>
                <h1
                  className={
                    "text-center md:text-left font-manrope text-xl leading-tight font-bold w-[200px]"
                  }
                >
                  {formData.subtitle}
                </h1>
                <p className={`text-sm text-left`}>{formData.text}</p>
              </div>
            </div>
          </div>
          <div className="bg-white p-5 rounded-md md:col-span-1">
            <h6 className={`${styles.heading5}`}>Homepage Detail:</h6>
            <form onSubmit={handleSubmit} className="flex flex-1 flex-col py-4">
              <label
                htmlFor="title"
                className={`${styles.paragraph4} text-[#30354E]`}
              >
                Title
              </label>
              <input
                id="title"
                name="title"
                onChange={handleInputChange}
                className="my-3 p-2 border-[1px] border-[#D8DDE4] rounded-2xl outline-none text-sm"
                value={formData.title}
              />

              <label
                htmlFor="subtitle"
                className={`${styles.paragraph4} text-[#30354E]`}
              >
                Subtitle
              </label>
              <input
                id="subtitle"
                name="subtitle"
                onChange={handleInputChange}
                className="my-3 p-2 border-[1px] border-[#D8DDE4] rounded-2xl outline-none text-sm"
                value={formData.subtitle}
              />

              <textarea
                id="text"
                name="text"
                className={`w-full h-[150px] max-h-[150px] p-2 border-[1px] mt-3 rounded-xl outline-none text-sm`}
                value={formData.text}
                onChange={handleInputChange}
              ></textarea>
              <button
                type="submit"
                className="bg-[#1B43C6] p-4 rounded-lg mt-4 text-white"
              >
                Save Changes
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
