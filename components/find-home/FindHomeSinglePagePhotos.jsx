"use client";
import { PhotoProvider, PhotoView } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";
import cn from "classnames";
import Typography from "@/components/ui/typography";
import Cookies from "js-cookie";
import { useSession } from "next-auth/react";
import { BASE_URL } from "@/lib/axios";
import useWindowSize from "@/hooks/useWindowSize";

const FindHomeSinglePagePhotos = ({ images }) => {
  const { data: session } = useSession();
  const token = session?.user?.accessToken || Cookies.get("accessToken");
  const { width } = useWindowSize();
  return (
    <PhotoProvider>
      <div className="grid xl:grid-cols-4 grid-cols-2 grid-rows-[171px_171px] md:grid-rows-[272px_272px] gap-3 mt-7">
        {images.map((image, index, arr) => {
          const imageSrc = `${BASE_URL}/files/${image}?token=${token}`;
          const maxShowCount = width <= 1280 ? 3 : 4;
          if (index > maxShowCount) return null;
          return (
            <PhotoView src={imageSrc}>
              <div
                className={cn(
                  "relative",
                  index === 0 && "xl:col-span-2 xl:row-span-2",
                )}
              >
                {index === maxShowCount && (
                  <div
                    className={
                      "absolute top-0 left-0 w-full h-full z-10 flex items-center justify-center"
                    }
                  >
                    <div
                      className={
                        "absolute top-0 left-0 w-full h-full bg-black opacity-50 "
                      }
                    />
                    <Typography variant={"h3"} className={"z-20 text-white"}>
                      + {arr.length - index}
                    </Typography>
                  </div>
                )}
                <img
                  src={imageSrc}
                  alt="single page"
                  className={"image-cover"}
                />
              </div>
            </PhotoView>
          );
        })}
      </div>
    </PhotoProvider>
  );
};

export default FindHomeSinglePagePhotos;
