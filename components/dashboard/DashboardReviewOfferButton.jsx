import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const DashboardReviewOfferButton = ({
  status,
  estimatedLowerPrice,
  estimatedHigherPrice,
  price,
  onClick = () => {},
  className,
}) => {
  const isInProcess = status === 1 || status === 4;
  const isReviewButtonDisabled =
    (isInProcess && price) || !estimatedLowerPrice || !estimatedHigherPrice;
  return (
    <div>
      <Button
        className={cn("uppercase py-2", className)}
        size={"sm"}
        disabled={isReviewButtonDisabled}
        onClick={onClick}
      >
        Review offer
      </Button>
    </div>
  );
};

export default DashboardReviewOfferButton;
