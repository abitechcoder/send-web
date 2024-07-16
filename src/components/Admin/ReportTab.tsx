import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "../../index.css";
import PhotoCard from "./PhotoCard";
import { SelectGallery } from "..";

const ReportTab = () => {
  return (
    <div className="p-3 lg:px-8 lg:py-4 overflow-y-scroll ">
      <Tabs>
        <TabList className="custom-tab-list">
          <Tab className="custom-tab" selectedClassName="active">
            Annual Report
          </Tab>
          <Tab className="custom-tab" selectedClassName="active">
            Newsletters
          </Tab>
          <Tab className="custom-tab" selectedClassName="active">
            Training Manuals
          </Tab>
          <Tab className="custom-tab" selectedClassName="active">
            Project Report
          </Tab>
        </TabList>
        <TabPanel className="mt-5" id="custom-tab-panel">
          <div className="grid lg:grid-cols-4 gap-3 ">
            <div className="lg:col-span-3 ">
              <div className="grid grid-cols-2 p-5 gap-3 lg:grid-cols-4  bg-white ">
                <PhotoCard
                  title="Report"
                  subtitle="Send SL Annual Report 2022"
                />
                <PhotoCard
                  title="Report"
                  subtitle="Send SL Annual Report 2022"
                />
                <PhotoCard
                  title="Report"
                  subtitle="Send SL Annual Report 2022"
                />
                <PhotoCard
                  title="Report"
                  subtitle="Send SL Annual Report 2022"
                />
              </div>
            </div>
            <SelectGallery />
          </div>
        </TabPanel>
        <TabPanel>{/* Tab 2 */}</TabPanel>
        <TabPanel>{/* Tab 3 */}</TabPanel>
        <TabPanel>{/* Tab 4 */}</TabPanel>
          
      </Tabs>
    </div>
  );
};

export default ReportTab;
