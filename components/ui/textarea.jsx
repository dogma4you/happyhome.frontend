import * as React from "react";

import { cn } from "@/lib/utils";

const Textarea = React.forwardRef(({ className, ...props }, ref) => {
  return (
    <textarea
      className={cn(
        `flex min-h-[192px] w-full rounded-md border 
                border-gray-9 bg-background p-6 text-base placeholder:text-gray-9
                outline-none focus:ring-2 focus:border-blue-4 text-gray-11
                ring-blue-4 ring-offset-blue-4`,
        className,
      )}
      ref={ref}
      {...props}
    />
  );
});
Textarea.displayName = "Textarea";

export { Textarea };
