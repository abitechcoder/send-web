import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "../../index.css";
import Button from "./Button";
import { PhotoCard } from "@/src/components";
import styles from "@/src/styles";

const TabLists = () => {
  return (
    <div>
      <Tabs className="bg-white">
        <TabList className="custom-tab-list">
          <Tab className="custom-tab" selectedClassName="active">
            Overview
          </Tab>
          <Tab className="custom-tab" selectedClassName="active">
            Project
          </Tab>
        </TabList>
        <TabPanel className="mt-10 px-5" id="custom-tab-panel">
          <form action="">
            <label>Program Overview</label>
            <div
              id="text-area"
              className={`${styles.paragraph4} p-5 border-[1px] mt-5 rounded-xl outline-none `}
              contentEditable="true"
            >
              <p>
                In Sierra Leone, women and the girl child suffer from high
                levels of discrimination and marginalization based on societal
                stereotypes. SEND Sierra Leone is committed to ensuring that the
                girl child is able to have access to quality education without
                limitations. With education programs and projects tailored to
                empower the girl child, SEND Sierra Leone aims to help many
                girls achieve their dream of having an education and giving back
                to their community. With several models and projects running by
                SEND Sierra Leone, we continue to empower hundreds of women to
                be self-sufficient and independent of their husbands. This leads
                to increase livelihood security for their families as the women
                contribute to the household. We are not only committed to
                empowering women to be financially independent but also to take
                positions in governance on the national and local level to
                promote gender equity.
              </p>
            </div>
            <Button name="Save Changes" py={2} px={3} />
          </form>
        </TabPanel>
        <TabPanel>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3 p-3 bg-white">
            <PhotoCard
              title="Project"
              subtitle="Strengthening Community Led Accountability to ..."
            />
            <PhotoCard
              title="Project"
              subtitle="Strengthening Community Led Accountability to ..."
            />
            <PhotoCard
              title="Project"
              subtitle="Strengthening Community Led Accountability to ..."
            />
          </div>
        </TabPanel>
          
      </Tabs>
    </div>
  );
};

export default TabLists;
