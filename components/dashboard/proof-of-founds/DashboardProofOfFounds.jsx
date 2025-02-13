"use client";

import { cn } from "@/lib/utils";
import Typography from "@/components/ui/typography";
import toast from "react-hot-toast";
import { PROOF_OF_FOUND_CONTENT, PROOF_OF_FUNDS } from "@/utils/constants";
import DashboardProofOfFoundsWrapper from "@/components/dashboard/proof-of-founds/DashboardProofOfFoundsWrapper";
import { cva } from "class-variance-authority";
import useGetProofOfFounds from "@/queries/useGetProofOfFounds";
import { Skeleton } from "@/components/ui/skeleton";

const proofOfFundsTitleVariants = cva(`normal-case`, {
  variants: {
    status: {
      [PROOF_OF_FUNDS.PENDING]: "text-[#1C2024]",
      [PROOF_OF_FUNDS.ERROR]: "text-[#1C2024]",
      [PROOF_OF_FUNDS.SUCCESS]: "dark:text-white text-[#1C2024]",
    },
  },
  defaultVariants: {
    variant: "default",
  },
});

const proofOfFundsDescriptionVariants = cva(`text-xs leading-[18px]`, {
  variants: {
    status: {
      [PROOF_OF_FUNDS.PENDING]: "text-[#3B3E44]",
      [PROOF_OF_FUNDS.ERROR]: "text-[#3B3E44]",
      [PROOF_OF_FUNDS.SUCCESS]: "dark:text-white text-[#3B3E44]",
    },
  },
  defaultVariants: {
    variant: "default",
  },
});

const DashboardProofOfFounds = () => {
  const { data, error, isLoading } = useGetProofOfFounds();

  if (isLoading) {
    return <Skeleton className="h-[132px] w-[182px]" />;
  }

  if (error) {
    toast.error("Proof Of Funds Error", error.response?.data?.message);
    return null;
  }

  let status = data.data?.status;
  const files = data.data?.files;

  let indicatorColor = "bg-[#E14942]";

  if (files.length) {
    switch (status) {
      case PROOF_OF_FUNDS.PENDING: {
        indicatorColor = "bg-orange-6";
        break;
      }
      case PROOF_OF_FUNDS.ERROR: {
        indicatorColor = "bg-[#E14942]";
        break;
      }
      case PROOF_OF_FUNDS.SUCCESS: {
        indicatorColor = "bg-[#3EAF3F]";
        break;
      }
    }
  }

  const statusValue = status === 1 && !files.length ? "not_uploaded" : status;

  const { title, description } = PROOF_OF_FOUND_CONTENT[statusValue];

  return (
    <DashboardProofOfFoundsWrapper status={status} files={files}>
      <div className={"flex gap-x-2 mb-1"}>
        <Typography
          variant={"subtitle3"}
          className={cn(proofOfFundsTitleVariants({ status }))}
        >
          {title}
        </Typography>
        <div
          className={cn(
            "size-3 rounded-full min-w-3  blur-[1px]",
            indicatorColor,
          )}
        ></div>
      </div>

      <p className={cn(proofOfFundsDescriptionVariants({ status }))}>
        {description}
      </p>
    </DashboardProofOfFoundsWrapper>
  );
};

export default DashboardProofOfFounds;
