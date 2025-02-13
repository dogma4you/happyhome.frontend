"use client";

import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import Form from "@/components/form/Form";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import Close from "@/public/assets/icons/close";
import * as React from "react";
import Icon from "@/components/ui/icon";
import Typography from "@/components/ui/typography";
import InputField from "@/components/form/InputField";
import { Button } from "@/components/ui/button";
import Arrow from "@/public/assets/icons/arrow";

import * as z from "zod";

function UploadLaterDialog({ children }) {
  const schema = z.object({
    username: z.string({ message: "Username is required" }),
    email: z
      .string({ message: "Email is required" })
      .email({ message: "Invalid email address" }),
    phone_number: z.string({ message: "Phone number is required" }),
  });

  schema.required();
  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className={"w-[600px] px-[56px]"}>
        <div className={"text-right"}>
          <DialogPrimitive.Close className="ml-auto transition-opacity hover:opacity-100 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground">
            <Close
              width={16}
              height={16}
              className={"fill-black dark:fill-white"}
            />
          </DialogPrimitive.Close>
        </div>

        <Icon
          name={"images"}
          className={"text-[80px] leading-[80px] mx-auto text-gray-12"}
        />

        <Typography variant={"h4"} className={"text-center mt-4"}>
          Upload later
        </Typography>

        <Typography variant={"body2"} className={"text-center"}>
          Instructions will be emailed to you for uploading pictures.
        </Typography>

        <Form
          validationSchema={schema}
          className={"mt-6 flex flex-col gap-y-8"}
          onSubmit={(values) => console.log("values", values)}
        >
          <InputField
            label={"Username"}
            name={"username"}
            placeholder={"Enter your name"}
            id={"email"}
            size={"sm"}
          />

          <InputField
            label={"Email"}
            name={"email"}
            placeholder={"Enter your email"}
            id={"email"}
            size={"sm"}
          />

          <InputField
            label={"Phone number"}
            name={"phone_number"}
            placeholder={"Enter your phone number"}
            id={"phone_number"}
            size={"sm"}
          />

          <div className={"flex justify-between items-center mt-4"}>
            <div
              className={
                "px-4 py-[10px] bg-blue-1 rounded-sm flex items-center gap-x-[10px] "
              }
            >
              <Icon name={"info"} className={"text-blue-6"} />
              <Typography variant={"body4"} className={"text-blue-6"}>
                We do not share your information
              </Typography>
            </div>
            <Button className={"uppercase"}>
              Submit
              <Arrow width={16} height={16} className={"stroke-white"} />
            </Button>
          </div>
        </Form>
      </DialogContent>
    </Dialog>
  );
}

export default UploadLaterDialog;
