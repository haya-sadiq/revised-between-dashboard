import Image, { StaticImageData } from "next/image";
import { BsCircleFill } from "react-icons/bs";
import { FaChevronCircleDown } from "react-icons/fa";
import { Button } from "@/components/ui/button";


interface WorkerCardProps {
  profileImg: StaticImageData;
  profileName: string;
  active: string;
  statusColor: string;
}

export const WorkerCard = (props: WorkerCardProps) => {
  const { profileImg, profileName, active, statusColor } = props;
  return (
    // <div className="flex justify-between items-center my-4 shadow-md rounded-[20] py-3 px-6">
      <div className="flex flex-wrap items-center justify-between gap-4 my-4 shadow-md rounded-[20] py-3 px-6">

      <div className="flex items-center gap-8 ">
        <Image
          src={profileImg}
          alt={`${profileName}Profile Picture`}
          className="w-22"
        />
        <div className="space-y-3">
          <h2 className="heading-font text-[#32575AFF] text-xl mb-4">
            {profileName}
          </h2>
          <p className="flex items-center gap-1 text-[13px]">
            {/* TODO: how to do this in tailwind */}
            <span>
              <BsCircleFill style={{ color: statusColor }} />
            </span>
            <span>{active}</span>
          </p>
          <div className="flex gap-3 text-[13px] max-md-lg:justify-between max-md-lg:w-66.5">
            <p className="flex items-center gap-1">
              <FaChevronCircleDown className="text-[#427174]" />
              Birth support
            </p>
            <p className="flex items-center gap-1">
              <FaChevronCircleDown className="text-[#427174]" />
              Lactation consultation
            </p>
          </div>
        </div>
      </div>
      <ViewButton />
    </div>
  );
};


function ViewButton() {
  return (
    <Button className="bg-[#427174] text-white text-[13px] font-light hover:bg-slate-700">
      View details
    </Button>
  );
}