"use client";

import React, { useEffect, useState } from "react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import Link from "next/link";
import Icon from "@/components/ui/icon";
import Typography from "@/components/ui/typography";
import { Button } from "@/components/ui/button";
import SelectField from "@/components/form/Select";
import useGetOfferList from "@/queries/useGetOfferList";
import { useRouter } from "next/navigation";
import DeleteAccountDialog from "@/components/dashboard/settings/deleteAccount/DeleteAccountDialog";
import useDeleteAccount from "@/store/useDeleteAccount";

const statusOptions = [
  {
    value: 1,
    title: "Option 1",
  },
  {
    value: 2,
    title: "Option 2",
  },
  {
    value: 3,
    title: "Option 3",
  },
  {
    value: 4,
    title: "Option 4",
  },
];

export default function () {
  const [reason, setReason] = useState();
  const router = useRouter();
  const { data } = useGetOfferList();
  const offers = (data?.data?.data || []).filter(({ status }) => status !== 2);

  const { changeFields } = useDeleteAccount();

  useEffect(() => {
    if (offers.length) {
      router.push("/dashboard/settings");
    }
  }, [offers.length]);
  return (
    <>
      <DeleteAccountDialog />
      <div className={"flex flex-col h-full"}>
        <div className={"dashboard-padding"}>
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink asChild>
                  <Link href="/dashboard">Dashboard</Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator>
                <Icon
                  name={"arrow-right"}
                  className={"text-base leading-[18px] text-gray-11"}
                />
              </BreadcrumbSeparator>
              <BreadcrumbItem>
                <BreadcrumbLink asChild>
                  <Link href="/dashboard/settings">Settings</Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator>
                <Icon
                  name={"arrow-right"}
                  className={"text-base leading-[18px] text-gray-11"}
                />
              </BreadcrumbSeparator>
              <BreadcrumbItem>
                <BreadcrumbPage>Delete account</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>

          <div className={"flex items-center gap-x-2 my-6"}>
            <Icon
              name={"arrow-right"}
              className={
                " leading-[18px] text-gray-11 inline-block rotate-180 text-2xl"
              }
            />

            <Typography
              variant={"h5"}
              className={"text-black dark:text-white normal-case"}
            >
              Delete account
            </Typography>
          </div>

          <div
            className={
              "p-6 border border-gray-6 rounded-[16px] max-w-[600px] bg-background"
            }
          >
            <Typography variant={"subtitle1"}>
              About account deletion requests
            </Typography>

            {/*<ul className={"flex flex-col gap-y-3 mt-6 mb-8"}>*/}
            {/*  <li>*/}
            {/*    <Typography variant={"body4"}>*/}
            {/*      Lorem ipsum dolor sit amet consectetur. Et nisl aliquet*/}
            {/*      sagittis id ipsum aliquam. Semper sed vel neque sagittis diam.*/}
            {/*      Eu enim et condimentum tincidunt. Amet vel volutpat diam*/}
            {/*      interdum ornare et vulputate.*/}
            {/*    </Typography>*/}
            {/*  </li>*/}
            {/*  <li>*/}
            {/*    <Typography variant={"body4"}>*/}
            {/*      Lorem ipsum dolor sit amet consectetur. Et nisl aliquet*/}
            {/*      sagittis id ipsum aliquam. Semper sed vel neque sagittis diam.*/}
            {/*      Eu enim et condimentum tincidunt. Amet vel volutpat diam*/}
            {/*      interdum ornare et vulputate.*/}
            {/*    </Typography>*/}
            {/*  </li>*/}
            {/*  <li>*/}
            {/*    <Typography variant={"body4"}>*/}
            {/*      Lorem ipsum dolor sit amet consectetur. Et nisl aliquet*/}
            {/*      sagittis id ipsum aliquam. Semper sed vel neque sagittis diam.*/}
            {/*      Eu enim et condimentum tincidunt. Amet vel volutpat diam*/}
            {/*      interdum ornare et vulputate.*/}
            {/*    </Typography>*/}
            {/*  </li>*/}
            {/*</ul>*/}

            <Typography variant={"subtitle3"} className={"mb-2"}>
              Why are you deleting your account?
            </Typography>

            <SelectField
              placeholder={"Choose the reason"}
              onChange={(value) => setReason(value)}
              value={reason}
              options={statusOptions}
              triggerClassname={"px-4 py-2 text-sm"}
              optionItemClassname={
                "py-2 px-4 rounded-sm text-sm cursor-pointer"
              }
            />
          </div>
        </div>
        <div
          className={
            "flex justify-end py-5 px-8 border-t border-t-gray-7 bg-background"
          }
        >
          <Button
            className={"uppercase"}
            onClick={() => changeFields({ showDialog: true, reason })}
          >
            Next
          </Button>
        </div>
      </div>
    </>
  );
}
