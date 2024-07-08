const NewsletterCard = ({ image, link_url }: { image?: string, link_url: string }) => {
  return (
    <div className={`w-full relative bg-white`}>
      <a href={link_url} target="_blank">
      <img
        src={`/src/assets/${image}`}
        className="object-contain object-center h-[450px] w-full"
        alt=""
      />
      </a>
    </div>
  );
};

export default NewsletterCard;
