import React from "react";
import { cn } from "@/lib/utils";
import DocIcon from "@/public/assets/icons/doc";
import { useSession } from "next-auth/react";
import Cookies from "js-cookie";
import { BASE_URL } from "@/lib/axios";

const AggrementsItem = ({ title, file }) => {
  const { data: session } = useSession();
  const token = session?.user?.accessToken || Cookies.get("accessToken");

  const handleOpen = () => {
    window.open(
      `${BASE_URL}/files/${file}?token=${token}`,
      "_blank",
      "noopener,noreferrer",
    );
  };

  return (
    <div className={"aggrements-item"} onClick={handleOpen}>
      <DocIcon className={"stroke-gray-11"} />
      <p className={"text-gray-12 text-sm leading-[18px]"}>{title}</p>
    </div>
  );
};

const Aggrements = ({
  locked,
  className,
  asignmentContract,
  realEstatePurchseAgreement,
  competitiveMarketAnalisys,
  scopeOfWork,
}) => {
  return (
    <div
      className={cn(
        "md:flex justify-end gap-x-2 hidden ",
        locked && "opacity-70",
        className,
      )}
    >
      {asignmentContract && (
        <AggrementsItem
          title={"Assignment Contract"}
          file={asignmentContract}
        />
      )}

      {realEstatePurchseAgreement && (
        <AggrementsItem
          title={"Real Estate Purchase Agreement"}
          file={realEstatePurchseAgreement}
        />
      )}

      {competitiveMarketAnalisys && (
        <AggrementsItem
          title={"Competitive Market Analysis"}
          file={competitiveMarketAnalisys}
        />
      )}

      {scopeOfWork && (
        <AggrementsItem title={"Scope of work"} file={scopeOfWork} />
      )}
    </div>
  );
};

export default Aggrements;
