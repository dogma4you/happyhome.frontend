import Image from "next/image";
import mainFooter from "@/public/assets/main_footer.jpg";
import Footer from "@/components/footer/Footer";
import { cn } from "@/lib/utils";

const HomeFooter = ({ children, className }) => {
  return (
    <div
      className={cn(
        "mt-[150px] pt-[44.6%] home-footer-gradient-white dark:home-footer-gradient-black relative flex flex-col justify-end",
        className,
      )}
    >
      <div className={"absolute -top-[60px] w-full"}>{children}</div>
      <Image
        src={mainFooter}
        alt={"Happy home footer"}
        className={
          "w-full h-full absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-[calc(50%_-_1px)] object-cover"
        }
      />

      <Footer />
    </div>
  );
};

export default HomeFooter;
