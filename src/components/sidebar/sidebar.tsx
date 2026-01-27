import { SidebarContent } from "./sidebar-content";

export const Sidebar = () => {
  return (
    <aside className="hidden md:block w-64 pt-2  bg-white shadow-md border-r min-h-[calc(100vh-68px)] overflow-y-auto">
      <SidebarContent />
    </aside>
  );
};
