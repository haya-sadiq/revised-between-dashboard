import { BirthworkerTabs } from "../components/birth-worker-tabs";
import { WorkercardList } from "../components/worker-card-list";

export const DashboardTemplate = () => {
  return (
    <main className="mx-3 xs:mx-5 flex-1 overflow-y-auto">
      <BirthworkerTabs />
      <WorkercardList />
    </main>
  );
};
