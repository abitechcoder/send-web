import { chart } from '../assets'
const Donation = () => {
  return (
    <div className='md:px-3  mb-5'>
      <p className='mb-4 font-nunito font-normal text-[14px] leading-normal text-[#343C6A]'> Donation Amount (Monthly)</p>
      <img src={chart} alt="Donations"  width={680} height={400} />


    </div>
  )
}

export default Donation