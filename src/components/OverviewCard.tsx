import { Overview } from "../types"

const OverviewCard = ({name, value, number, imgURL, color}: Overview) => {
  return (
    <div className={`rounded-lg p-5 `} style={{ backgroundColor: color }}>
      <p className="font-nunito text-[12px] font-light leading-normal mb-5">{name}</p>
      <div className="flex items-center justify-between ">
        <p className="text-[14px] font-medium leading-normal">{value}</p>
        <div className="flex items-center justify-center gap-1">
          <p className="text-[8px]">{number}</p>
          <img src={imgURL} />

        </div>
      </div>


    </div>
  )
}

export default OverviewCard




