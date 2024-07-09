import { ProfileManuals } from "../constants";
import ManualProfileCard from "./ManualProfileCard";

const ProfileManualsList = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-10 md:gap-x-10 mt-8">
      {ProfileManuals.map((manual) => (
        <ManualProfileCard
          key={manual.id}
          image={manual.image}
          link_url={manual.link_url}
        />
      ))}
    </div>
  );
};

export default ProfileManualsList;
