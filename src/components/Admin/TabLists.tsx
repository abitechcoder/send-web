import styles from "@/src/styles";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "../../index.css";
import Button from "./Button";

const TabLists = () => {
  return (
    <div>
      <Tabs className>
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
          <div
            id="text-area"
            className={`${styles.paragraph4} p-5 border-[1px] mt-5 rounded-xl outline-none `}
            contentEditable="true"
          >
            We are a non-governmental organisation that is dedicated to creating
            a Sierra Leone where there is respect for human rights ,accountable
            governance ,food and nutrition security as well as equal
            opportunities for men and women to thrive. We liaise with
            communities, traditional authorities, government institutions and
            foreign partners to combine resources that will develop innovative
            solutions to alleviate poverty and enhance quality self-reliance.
            With our strategic approach SEND Sierra Leone has adopted the global
            Sustainable Development Goals (SDGS) to guide national development
            planning and implementation. The pursuit of economic equality and
            social equity are mainstreamed in the SDGs. Our commitment to the
            government is to improve the delivery of social services and
            prioritize the education sector. Through this collaborative
            approach, we hope that our Strategic Plan will enable the target
            beneficiaries and communities to realize the SDGs for the sake of
            empowered people led by responsible Government.
          </div>
          <Button name="Save Changes" py={2} px={3} />
        </TabPanel>
        <TabPanel>
          <form action="">
            <div className="grid">
              <label className={`${styles.paragraph4} text-sm mb-1`}>
                Vision
              </label>
              <div
                id="text-area"
                className={`${styles.paragraph4} rounded-xl py-2 px-3 border-[1px] outline-0 border-[#D8DDE4]  mb-5 `}
                contentEditable="true"
              >
                A Sierra Leone where people’s rights and well-being are
                guaranteed
              </div>
              <label className={`${styles.paragraph4} text-sm mb-1`}>
                Mission
              </label>
              <div
                id="text-area"
                className={`${styles.paragraph4} rounded-xl py-2 px-3 border-[1px] outline-0 border-[#D8DDE4]  mb-5 `}
                contentEditable="true"
              >
                Promotion of good governance, voice, accountably basic services
                and equality for women and men in Sierra Leone
              </div>
            </div>
            <Button name="Save Changes" py={2} px={3} />
          </form>
        </TabPanel>
        <TabPanel>
          <form action="">
            <label>Core Value</label>
            <div
              id="text-area"
              className={`${styles.paragraph4} p-5 border-[1px] mt-5 rounded-xl outline-none `}
              contentEditable="true"
            >
              <p className="mb-3">
                We believe in the potential of PEOPLE to champion their own
                development, characterized by
              </p>
              <ul className="list-disc ms-8">
                <li>Participatory decision-making and development</li>
                <li>Equality of women and men</li>
                <li>Openness and accountability</li>
                <li>Partnership for human development</li>
                <li>Learning, innovation and sharing of knowledge</li>
                <li>Enabling action based on information and evidence</li>
              </ul>
            </div>
            <Button name="Save Changes" py={2} px={3} />
          </form>
        </TabPanel>
        <TabPanel>
          <form action="">
            <label>Principles</label>
            <div
              id="text-area"
              className={`${styles.paragraph4} p-5 border-[1px] mt-5 rounded-xl outline-none `}
              contentEditable="true"
            >
              <ul className="list-disc ms-8">
                <li>
                  Development is a human right that provides men and women with
                  equal opportunity to actively participate in and contribute to
                  the political, economic and social transformation of their
                  communities.
                </li>
                <li>
                   Development is multi-dimensional, involving economic,
                  political and social issues requiring integrated programming
                  approaches to promote community- driven development
                  initiatives, economic literacy and policy advocacy.
                </li>
                <li>
                   Forging strong partnerships with state and non-state actors
                  that are characterized by mutual accountability, openness and
                  effective communication, provide an enabling environment for
                  innovative development programming.
                </li>
                <li>
                  Self-managed, community-based organizations are catalysts for
                  promoting sustainability of development processes and
                  initiatives.
                </li>
              </ul>
            </div>
            <Button name="Save Changes" py={2} px={3} />
          </form>
        </TabPanel>
          
      </Tabs>
    </div>
  );
};

export default TabLists;
