import styles from "@/src/styles";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "../../index.css";
import Button from "./Button";
import { IdentityPropsType } from "@/src/types";
import { ChangeEvent, FormEvent, useState } from "react";
import { updateIdentity } from "@/src/data";
import { toast } from "react-toastify";
import { AxiosError } from "axios";
import { useNavigate } from "react-router-dom";

const TabLists = ({ identity }: { identity: IdentityPropsType }) => {
  const [formData, setFormData] = useState<IdentityPropsType>(identity);
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
      text: formData.text,
      mission: formData.mission,
      vision: formData.vision,
      value: formData.value,
      principle: formData.principle,
    };

    //Submit Data to the Server
    try {
      // setIsSaving(true);
      const response = await updateIdentity(formData.id, data);
      console.log("Response:", response);
      toast.success("data updated successfully!!!");
      navigate("/admin/identity");
    } catch (error) {
      toast.error("Error occured while saving changes");
      console.error("Error:", error as AxiosError);
    }
  };

  return (
    <div>
      <Tabs>
        <TabList className="custom-tab-list">
          <Tab className="custom-tab" selectedClassName="active">
            Corporate Identity
          </Tab>
          <Tab className="custom-tab" selectedClassName="active">
            Vision & Mission
          </Tab>
          <Tab className="custom-tab" selectedClassName="active">
            Core Value
          </Tab>
          <Tab className="custom-tab" selectedClassName="active">
            Principle
          </Tab>
        </TabList>
        <TabPanel className="mt-10" id="custom-tab-panel">
          <form onSubmit={handleSubmit}>
            <textarea
              id="text-area"
              name="text"
              className={`${styles.paragraph4} w-full h-[200px] max-h-[200px] p-5 border-[1px] mt-5 rounded-xl outline-none `}
              value={formData.text}
              onChange={handleInputChange}
            ></textarea>
            <Button name="Save Changes" py={2} px={3} />
          </form>
        </TabPanel>
        <TabPanel>
          <form onSubmit={handleSubmit}>
            <div className="grid">
              <label
                htmlFor="vision"
                className={`${styles.paragraph4} text-sm mb-1`}
              >
                Vision
              </label>
              <input
                id="vision"
                name="vision"
                value={formData.vision}
                onChange={handleInputChange}
                className={`${styles.paragraph4} rounded-xl py-2 px-3 border-[1px] outline-0 border-[#D8DDE4] mb-5`}
              />
              <label
                htmlFor="mission"
                className={`${styles.paragraph4} text-sm mb-1`}
              >
                Mission
              </label>
              <input
                id="mission"
                name="mission"
                value={formData.mission}
                onChange={handleInputChange}
                className={`${styles.paragraph4} rounded-xl py-2 px-3 border-[1px] outline-0 border-[#D8DDE4] mb-5`}
              />
            </div>
            <Button name="Save Changes" py={2} px={3} />
          </form>
        </TabPanel>
        <TabPanel>
          <form onSubmit={handleSubmit}>
            <label htmlFor="value">Core Value</label>
            <textarea
              id="value"
              name="value"
              className={`${styles.paragraph4} w-full h-[200px] max-h-[200px] p-5 border-[1px] mt-5 rounded-xl outline-none `}
              value={formData.value}
              onChange={handleInputChange}
            ></textarea>
            <Button name="Save Changes" py={2} px={3} />
          </form>
        </TabPanel>
        <TabPanel>
          <form onSubmit={handleSubmit}>
            <label htmlFor="principle">Principles</label>
            <textarea
              id="principle"
              name="principle"
              className={`${styles.paragraph4} w-full h-[200px] max-h-[200px] p-5 border-[1px] mt-5 rounded-xl outline-none `}
              value={formData.principle}
              onChange={handleInputChange}
            ></textarea>
            <Button name="Save Changes" py={2} px={3} />
          </form>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default TabLists;
