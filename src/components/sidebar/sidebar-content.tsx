import Link from "next/link";
import { usePathname } from "next/navigation";

const menuItems = [
  "My profile",
  "Appointments",
  "Birthworkers",
  "Services",
  "Payments",
  "Settings",
  "Help",
  "FAQs",
];

const navItems = [
  {
    label: "My profile",
    href: "/profile",
  },
  {
    label: "Appointments",
    href: "/appointments",
  },
   {
    label: "Birthworkers",
    href: "/birthworkers",
  },
   {
    label: "Services",
    href: "/services",
  },
   {
    label: "Payments",
    href: "/payments",
  },
   {
    label: "Settings",
    href: "/settings",
  },
   {
    label: "Help",
    href: "/help",
  },
   {
    label: "Faq",
    href: "/faq",
  },
];

export const SidebarContent = () => {
const pathname = usePathname();
  return (
    <nav className="flex flex-col h-full">
      <ul className="space-y-1 flex-1 overflow-y-auto">
        {navItems.map((item, index) => {
          const isActive = item.href === pathname;
          // href = /profile , pathname = birthworkers false
          // href = /birhtworks, pathname = birhtworkers true
          return (
            <Link key={index} href={item.href}>
              <li
                className={`block py-3 pl-4 text-sm font-medium cursor-pointer
                ${isActive ? "bg-[#427174] text-white" : "text-gray-800"}
                 
                `}
              >
                {item.label}
              </li>
            </Link>
          );
        })}
      </ul>
      <div className="mt-auto p-3 ">
        <button className="cursor-pointer rounded-md  w-full p-2 font-semibold border border-[#427174] text-[#427174]  hover:text-white hover:bg-[#427174]">
          Log out
        </button>
      </div>
    </nav>
  );
};
