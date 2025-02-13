"use client";
import DashboardBannerCard from "@/components/dashboard/DashboardBannerCard";
import { useRouter } from "next/navigation";

const DashboardBanner = () => {
  const router = useRouter();

  const handleOpenFindHome = () => {
    router.push("/find-home");
  };

  const handleOpenGetAnOffer = () => {
    router.push("/getoffer");
  };

  return (
    <div>
      <DashboardBannerCard
        title={"Want to buy a property"}
        buttonTitle={"Find a home"}
        className={"bg-[#3EAF3F]/10 mb-6"}
        buttonClassName={"text-[#3EAF3F]"}
        image={"/assets/top-section.jpg"}
        onClick={handleOpenFindHome}
      />

      <DashboardBannerCard
        title={"have a property for sale?"}
        buttonTitle={"Get offer"}
        className={"bg-blue-6/10"}
        buttonClassName={"text-blue-6"}
        image={"/assets/top-section.jpg"}
        onClick={handleOpenGetAnOffer}
      />
    </div>
  );
};

export default DashboardBanner;
