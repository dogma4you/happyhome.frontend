import React, { Fragment } from "react";
import Typography from "@/components/ui/typography";
import Icon from "@/components/ui/icon";
import useFindHome from "@/store/useFindHome";

const MapsContainer = ({ isModal, children }) => {
  const { setMapOpened } = useFindHome();

  if (!isModal) return <Fragment>{children}</Fragment>;

  const handleCloseMap = () => {
    setMapOpened(false);
  };
  return (
    <div className={"xl:static fixed top-0 left-0 z-50 w-full h-full"}>
      <div className={"p-4 flex items-center justify-between bg-background"}>
        <Typography variant={"subtitle1"}>Map</Typography>
        <Icon
          name={"plus"}
          className={"rotate-45 text-gray-12"}
          onClick={handleCloseMap}
        />
      </div>
      {children}
    </div>
  );
};

export default MapsContainer;
