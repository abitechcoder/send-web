import NewsletterCard from "./NewsLetterCard";
import { Newsletters } from "../constants";
const NewsLetterList = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-10 md:gap-x-10 mt-8">
      {Newsletters.map((newsletter) => (
        <NewsletterCard
          key={newsletter.id}
          title={newsletter.title}
          image={newsletter.image}
          url={newsletter.url}
        />
      ))}
    </div>
  );
};

export default NewsLetterList;
