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
    <div className="xs:flex items-center justify-between my-4 shadow-md rounded-[20] py-3 px-4 md-lg:px-6 bg-white">
      <div className="flex items-center md-lg:gap-8 gap-5 ">
        <Image
          src={profileImg}
          alt={`${profileName}Profile Picture`}
          className="w-21 min-w-20"
        />
        <div className="space-y-3">
          <h2 className="heading-font text-[#32575AFF] text-xl mb-4">
            {profileName}
          </h2>
          <p className="flex items-center gap-1 text-[13px] text-gray-800">
            {/* TODO: how to do this in tailwind */}
            <span>
              <BsCircleFill style={{ color: statusColor }} />
            </span>
            <span>{active}</span>
          </p>
          <div className="md-lg:flex md-lg:space-y-0 space-y-2 gap-3 text-[13px]">
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
      <div className="flex xs:block mt-4 xs:mt-0 gap-3 ">
        <RequestButton/>
        <ViewButton  />
      </div>
    </div>
  );
};

function ViewButton() {
  return (
    <Button className="flex-1 bg-[#427174] text-white text-[13px] font-medium xs:font-light hover:bg-slate-700">
      View details
    </Button>
  );
}

function RequestButton() {
  return(

    <Button className="xs:hidden text-[#427174] text-[13px] font-medium bg-transparent border-solid border border-[#427174]">Request Consultation</Button>
  )
}
