"use client";
import { cn } from "@/lib/utils";
import { cva } from "class-variance-authority";
import { PROOF_OF_FUNDS } from "@/utils/constants";
import { useRouter } from "next/navigation";
import useProofOfFounds from "@/store/useProofOfFounds";
import { useEffect } from "react";

const proofOfFundsVariants = cva(`p-6 rounded-lg`, {
  variants: {
    status: {
      [PROOF_OF_FUNDS.PENDING]: "bg-orange-1",
      [PROOF_OF_FUNDS.ERROR]: "bg-[#FBECEC]",
      [PROOF_OF_FUNDS.SUCCESS]: "bg-[#3EAF3F]/10",
      not_uploaded: "bg-[#FBECEC]",
    },
  },
  defaultVariants: {
    variant: "default",
  },
});

const DashboardProofOfFoundsWrapper = ({ children, files, status }) => {
  const router = useRouter();
  const { setProofOfFound } = useProofOfFounds();

  useEffect(() => {
    setProofOfFound({ files, status });
  }, [files, status]);

  const handleNavigate = async () => {
    router.push("/dashboard/proof-of-founds");
  };

  const statusValue =
    !files.length && status === PROOF_OF_FUNDS.PENDING
      ? "not_uploaded"
      : status;

  return (
    <div
      className={cn(proofOfFundsVariants({ status: statusValue }))}
      onClick={handleNavigate}
    >
      {children}
    </div>
  );
};

export default DashboardProofOfFoundsWrapper;
