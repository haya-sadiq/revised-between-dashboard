import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";

export const BirthworkerTabs = () => {
  return (
    <div className="p-6 mt-6 shadow-md rounded-[20] bg-white">
      <h2 className="heading-font text-[#32575A] text-2xl font-medium mb-3">
        My Birthworkers
      </h2>

      <Tabs defaultValue="my-birthworker" className="w-full border-b">
        <TabsList className="bg-transparent rounded-none gap-6">
          <div className="">
            <TabsTrigger
              value="my-birthworker"
              className="rounded-none text-sm font-medium data-[state=active]:text-[#427174] hover:text-[#427174] data-[state=active]:shadow-none! border-0   border-transparent border-b-2  data-[state=active]:border-[#427174]"
            >
              My Birthworker
            </TabsTrigger>
            <TabsTrigger
              value="search-birthworker"
              className="rounded-none text-sm font-medium data-[state=active]:text-[#427174] hover:text-[#427174]  data-[state=active]:shadow-none! border-0   border-transparent border-b-2  data-[state=active]:border-[#427174]"
            >
              Search Birthworker
            </TabsTrigger>
          </div>
        </TabsList>

        {/* <TabsContent value="my-birthworker">
              <p className="text-sm text-gray-600">
            List of my birthworkers will appear here
          </p>
        </TabsContent>
         <TabsContent value="search-birthworker" className="mt-6">
          <p className="text-sm text-gray-600">
            Search birthworkers UI will appear here
          </p>
        </TabsContent> */}
      </Tabs>
    </div>
  );
};
