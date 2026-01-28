import Image from "next/image";
import Link from "next/link";
import betweenLogo from "../../public/asset/png/betweenLogo.png";
import { NotificationIcon } from "./icons/notification-icon";
import { MobileSidebar } from "./sidebar/mobile-sidebar";

export const Navbar = () => {
  return (
    <nav className="h-16 flex justify-between items-center xs:pr-8 pr-4 shadow-md bg-white w-full">
      <Link href="/" aria-label="Between Home">
        <Image
          src={betweenLogo}
          alt="Between"
          className="cursor-pointer -ml-8"
          priority
        />
      </Link>

      <div className="flex items-center gap-2">
        <div className="hidden md:block">
          <button
            className="p-2 hover:bg-gray-50 rounded-lg cursor-pointer text-foreground "
            aria-label="View notifications"
          >
            <NotificationIcon />
          </button>
        </div>
        <div className="md:hidden">
          <MobileSidebar/>
        </div>
      </div>
    </nav>
  );
};
