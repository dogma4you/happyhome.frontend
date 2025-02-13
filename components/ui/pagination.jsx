import * as React from "react";
import { MoreHorizontal } from "lucide-react";

import { cn } from "@/lib/utils";
import Icon from "@/components/ui/icon";
import Typography from "@/components/ui/typography";

const Pagination = ({ className, ...props }) => (
  <nav
    role="navigation"
    aria-label="pagination"
    className={cn("mx-auto flex w-full justify-end", className)}
    {...props}
  />
);
Pagination.displayName = "Pagination";

const PaginationContent = React.forwardRef(({ className, ...props }, ref) => (
  <ul
    ref={ref}
    className={cn("flex flex-row items-center gap-1", className)}
    {...props}
  />
));
PaginationContent.displayName = "PaginationContent";

const PaginationItem = React.forwardRef(({ className, ...props }, ref) => (
  <li ref={ref} className={cn("", className)} {...props} />
));
PaginationItem.displayName = "PaginationItem";

const PaginationLink = ({
  className,
  isActive,
  size = "icon",
  disabled,
  children,
  ...props
}) => (
  <a
    aria-current={isActive ? "page" : undefined}
    className={cn(
      "w-8 h-8 rounded-full flex items-center justify-center bg-background p-0 cursor-pointer text-gray-12",
      isActive && "bg-blue-6",
      className,
    )}
    {...props}
  >
    <Typography
      variant={"body4"}
      className={cn(disabled && "opacity-70", isActive && "text-white")}
    >
      {children}
    </Typography>
  </a>
);
PaginationLink.displayName = "PaginationLink";

const PaginationPrevious = ({ className, disabled, ...props }) => (
  <PaginationLink
    aria-label="Go to previous page"
    size="default"
    className={cn(
      "w-8 h-8 rounded-full flex items-center justify-center bg-background p-0 cursor-pointer",
      className,
    )}
    disabled={disabled}
    {...props}
  >
    <Icon
      name={"double-arrow"}
      className={cn("text-lg text-gray-11", disabled && "opacity-70")}
    />
  </PaginationLink>
);
PaginationPrevious.displayName = "PaginationPrevious";

const PaginationNext = ({ className, disabled, ...props }) => (
  <PaginationLink aria-label="Go to next page" size="default" {...props}>
    <Icon
      name={"double-arrow"}
      className={"text-lg text-gray-11 rotate-180 block"}
    />
  </PaginationLink>
);
PaginationNext.displayName = "PaginationNext";

const PaginationEllipsis = ({ className, ...props }) => (
  <span
    aria-hidden
    className={cn("flex h-9 w-9 items-center justify-center", className)}
    {...props}
  >
    <MoreHorizontal className="h-4 w-4" />
    <span className="sr-only">More pages</span>
  </span>
);
PaginationEllipsis.displayName = "PaginationEllipsis";

export {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
};
