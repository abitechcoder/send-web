import { arrowfall, arrowrise } from "../assets"
import OverviewCard from "./OverviewCard"


const Overview = () => {

  return (
    <div className="my-3 flex-1">
      <p className="font-nunito font-normal text-[12px] leading-normal text-[#343C6A]">Overview</p>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-3  ">
      <OverviewCard 
      name="  Views"
      number="7,265"
      value="+11.2%"
      imgURL= {arrowrise}
      color = "#E3F5FF"
      
      />
      <OverviewCard
       name="Visit"
       number="3,671"
       value="-0.03%"
       imgURL= {arrowfall}
       color = "#E5ECF6"
        />
        <OverviewCard
       name="User Donation"
       number="156"
       value="+15.03%"
       imgURL= {arrowrise}
       color = "#E3F5FF"
        />

    </div>
    </div>
  )
}

export default Overview