import React from "react";
import Typography from "@/components/ui/typography";
import { Button } from "@/components/ui/button";

const ListingUnlockModalContent = ({
  icon = () => {},
  title,
  description,
  buttonTitle,
  onSubmit = () => {},
}) => {
  return (
    <>
      <div className={"mx-auto mt-3"}>{icon()}</div>
      <Typography
        variant={"h4"}
        mobileVariant={"subtitle1"}
        className={"mt-10 text-center"}
      >
        {title}
      </Typography>
      <Typography
        variant={"body2"}
        mobileVariant={"body3"}
        className={"mt-1 text-center"}
      >
        {description}
      </Typography>
      <div className={"flex items-center justify-center mt-10"}>
        <Button onClick={onSubmit} size={"lg"} className={"uppercase"}>
          {buttonTitle}
        </Button>
      </div>
    </>
  );
};

export default ListingUnlockModalContent;
