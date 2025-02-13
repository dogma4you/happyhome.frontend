import Typography from "@/components/ui/typography";
import DashboardCards from "@/components/dashboard/DashboardCards";
import PurchasedContract from "@/components/dashboard/PurchasedContract";

const DashboardPage = () => {
  return (
    <div className={"dashboard-padding"}>
      <Typography
        variant={"h5"}
        mobileVariant={"subtitle1"}
        className={"normal-case mb-4"}
      >
        Dashboard
      </Typography>

      <DashboardCards />

      <PurchasedContract />
    </div>
  );
};

export default DashboardPage;
