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

export const SidebarContent = () => {
  return (
    <nav className="flex flex-col h-full">
      <ul className="space-y-1">
        {menuItems.map((item,index) => {
          return (
            <li
              key={index}
              className="py-3 pl-4 text-sm cursor-pointer text-gray-800 hover:bg-[#427174] hover:text-white font-medium"
            >
              {item}
            </li>
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
