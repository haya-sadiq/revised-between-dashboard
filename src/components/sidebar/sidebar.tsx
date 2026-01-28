import { SidebarContent } from "./sidebar-content";

export const Sidebar = () => {
  return (
    <aside className="hidden md:block w-64 pt-2 bg-white shadow-md border-r max-h-[calc(100vh-68px)] sticky top-16 ">
      <SidebarContent />
    </aside>
  );
};
