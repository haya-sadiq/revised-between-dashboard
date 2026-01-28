import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { SidebarContent } from "./sidebar-content";

export const MobileSidebar = () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <button
          className="p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 
               text-gray-900 dark:text-gray-100 md:hidden"
          aria-label="Open menu"
        >
          <Menu />
        </button>
      </SheetTrigger>
      <SheetContent side="left" className="p-0 w-64">
        <SidebarContent />
      </SheetContent>
    </Sheet>
  );
};
