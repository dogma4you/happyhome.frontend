import DashboardOffers from "@/components/dashboard/DashboardOffers";
import DashboardBalance from "@/components/dashboard/DashboardBalance/DashboardBalance";
import DashboardBanner from "@/components/dashboard/DashboardBanner";

const DashboardCards = () => {
  return (
    <div className={"grid grid-cols-1 xl:grid-cols-[1fr_414px] gap-6"}>
      <div>
        <DashboardBalance />
        <DashboardOffers />
      </div>
      <DashboardBanner />
    </div>
  );
};

export default DashboardCards;
