const NewsletterCard = ({ image }: { image?: string }) => {
  return (
    <div className={`w-full relative bg-white`}>
      <img
        src={`/src/assets/${image}`}
        className="object-contain object-center h-[450px] w-full"
        alt=""
      />
    </div>
  );
};

export default NewsletterCard;
