import { StaticImageData } from "next/image";
import ProfileFirst from "../../../../public/asset/png/ProfileFirst.png";
import ProfileSecond from "../../../../public/asset/png/ProfileSecond.png";
import ProfileThird from "../../../../public/asset/png/ProfileThird.png";
import { WorkerCard } from "./worker-card";

interface WorkerCard {
  profileImg: StaticImageData;
  profileName: string;
  active: string;
  statusColor: string;
}

const WorkerCardData: WorkerCard[] = [
  {
    profileImg: ProfileFirst,
    profileName: "Corrine Dallas",
    active: "Active",
    statusColor: "green",
  },
  {
    profileImg: ProfileSecond,
    profileName: "Amy Miller",
    active: "Cancelled",
    statusColor: "red",
  },
  {
    profileImg: ProfileThird,
    profileName: "Winona Rider",
    active: "Consultation Requested",
    statusColor: "yellow",
  },
];

export const WorkercardList = () => {
  return (
    <div className="xs:rounded-[20] px-4 md-lg:px-6 xs:py-1 xs:shadow-md xs:bg-white mt-4 border border-gray-200">
      {WorkerCardData.map((item, index) => {
        const { profileImg, profileName, active, statusColor } = item;
        return (
          <WorkerCard
            key={index}
            profileImg={profileImg}
            profileName={profileName}
            active={active}
            statusColor={statusColor}
          />
        );
      })}
    </div>
  );
};
