import React from "react";
import { cn } from "@/lib/utils";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Icon from "@/components/ui/icon";

const WhoLeSellerUploadImageItem = ({
  file,
  index,
  handleCoverImage,
  onDelete,
}) => {
  return (
    <div
      className={cn(
        "rounded-sm overflow-hidden relative",
        index === 0 && "col-span-2 row-span-2",
      )}
    >
      {index === 0 && (
        <div
          className={
            "absolute top-4 left-4 z-20 bg-white rounded-[4px] p-2 font-bold text-sm"
          }
        >
          Cover Photo
        </div>
      )}

      <div className={"absolute top-4 right-4 z-20"}>
        <DropdownMenu>
          <DropdownMenuTrigger>
            <div
              className={
                "size-8 rounded-full bg-white flex items-center justify-center border border-[#EBEBEF] cursor-pointer"
              }
            >
              <Icon name={"dots"} />
            </div>
          </DropdownMenuTrigger>
          <DropdownMenuContent
            align={"end"}
            className={"border-[#EBEBEF] bg-white flex-col gap-y-2 p-2"}
          >
            {index !== 0 && (
              <DropdownMenuItem className={"p-0"}>
                <div
                  className={
                    "px-4 py-2 hover:bg-blue-1 w-full rounded-[4px] cursor-pointer"
                  }
                  onClick={handleCoverImage}
                >
                  Make a cover
                </div>
              </DropdownMenuItem>
            )}

            <DropdownMenuItem className={"p-0"}>
              <div
                className={
                  "px-4 py-2 hover:bg-blue-1 w-full rounded-[4px] cursor-pointer"
                }
                onClick={onDelete}
              >
                Delete
              </div>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      <div
        className={"w-full h-full absolute top-0 right-0 bg-black/10 z-10"}
      />
      <img
        width={200}
        height={150}
        className={"image-cover"}
        src={file.preview}
        alt={"Happy home"}
      />
    </div>
  );
};

export default WhoLeSellerUploadImageItem;
