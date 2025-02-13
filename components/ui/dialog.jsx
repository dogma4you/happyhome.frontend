"use client";

import * as React from "react";
import * as DialogPrimitive from "@radix-ui/react-dialog";

import { cn } from "@/lib/utils";
import Typography from "@/components/ui/typography";

const Dialog = DialogPrimitive.Root;

const DialogTrigger = DialogPrimitive.Trigger;

const DialogPortal = DialogPrimitive.Portal;

const DialogClose = DialogPrimitive.Close;

const DialogOverlay = React.forwardRef(({ className, ...props }, ref) => (
  <DialogPrimitive.Overlay
    ref={ref}
    className={cn(
      "black-window active z-50 flex items-start justify-center md:py-5 md:overflow-y-auto",
      className,
    )}
    {...props}
  >
    {props.children}
  </DialogPrimitive.Overlay>
));
DialogOverlay.displayName = DialogPrimitive.Overlay.displayName;

const DialogContent = React.forwardRef(
  (
    { className, overlayClassName, children, disableOutsideClick, ...props },
    ref,
  ) => (
    <DialogPortal>
      <DialogOverlay className={overlayClassName}>
        <DialogPrimitive.Content
          ref={ref}
          className={cn(
            "z-50 flex flex-col w-full h-full md:h-auto px-4 md:px-10 pt-10 pb-6 bg-background shadow-lg duration-200 data-[store=open]:animate-in data-[store=closed]:animate-out data-[store=closed]:fade-out-0 data-[store=open]:fade-in-0 data-[store=closed]:zoom-out-95 data-[store=open]:zoom-in-95 data-[store=closed]:slide-out-to-left-1/2 data-[store=closed]:slide-out-to-top-[48%] data-[store=open]:slide-in-from-left-1/2 data-[store=open]:slide-in-from-top-[48%] sm:rounded-lg overflow-y-auto",
            className,
          )}
          onInteractOutside={(event) =>
            disableOutsideClick && event.preventDefault()
          }
          {...props}
        >
          {children}
        </DialogPrimitive.Content>
      </DialogOverlay>
    </DialogPortal>
  ),
);
DialogContent.displayName = DialogPrimitive.Content.displayName;

const DialogHeader = ({ className, ...props }) => (
  <div
    className={cn(
      "flex flex-col space-y-1.5 text-center sm:text-left max-w-[438px] mx-auto",
      className,
    )}
    {...props}
  />
);
DialogHeader.displayName = "DialogHeader";

const DialogFooter = ({ className, ...props }) => (
  <div
    className={cn("flex items-center justify-between", className)}
    {...props}
  />
);
DialogFooter.displayName = "DialogFooter";

const DialogTitle = React.forwardRef(({ className, ...props }, ref) => (
  <DialogPrimitive.Title
    ref={ref}
    className={cn(
      "md:text-[32px] text-2xl font-bold text-center uppercase text-black dark:text-white",
      className,
    )}
    {...props}
  />
));
DialogTitle.displayName = DialogPrimitive.Title.displayName;

const DialogDescription = React.forwardRef(({ className, ...props }, ref) => (
  <DialogPrimitive.Description ref={ref} {...props}>
    <Typography
      variant={"body2"}
      className={cn("text-center text-gray-12", className)}
    >
      {props.children}
    </Typography>
  </DialogPrimitive.Description>
));
DialogDescription.displayName = DialogPrimitive.Description.displayName;

export {
  Dialog,
  DialogPortal,
  DialogOverlay,
  DialogClose,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogFooter,
  DialogTitle,
  DialogDescription,
};
