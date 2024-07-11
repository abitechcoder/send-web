import RecentDonationCard from './RecentDonationCard'

const RecentDonation = () => {
  return (
    <div >
      <p className='font-nunito font-normal text-[12px] leading-normal my-3 md:mx-2 text-[#343C6A]'>Recent Donations</p>
    <div className='bg-white rounded-lg p-3 -mt-[6px] md:mx-3 '>
        <RecentDonationCard />
        <RecentDonationCard />
        <RecentDonationCard />

    </div>
    </div>
  )
}

export default RecentDonation