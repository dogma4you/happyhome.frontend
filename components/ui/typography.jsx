"use client";

import { twMerge } from "tailwind-merge";
import useWindowSize from "@/hooks/useWindowSize";

const H1 = ({ children, className }) => {
  return (
    <h1
      className={twMerge(
        "text-[80px] leading-[100px] font-bold uppercase text-gray-11",
        className,
      )}
    >
      {children}
    </h1>
  );
};

const H2 = ({ children, className }) => {
  return (
    <h2
      className={twMerge(
        "text-[64px] leading-[80px] font-bold uppercase text-gray-11",
        className,
      )}
    >
      {children}
    </h2>
  );
};

const H3 = ({ children, className }) => {
  return (
    <h3
      className={twMerge(
        "text-5xl leading-[64px] font-bold uppercase text-gray-11",
        className,
      )}
    >
      {children}
    </h3>
  );
};

const H4 = ({ children, className }) => {
  return (
    <h4
      className={twMerge(
        "text-[32px] leading-[48px] font-bold uppercase text-gray-11",
        className,
      )}
    >
      {children}
    </h4>
  );
};

const H5 = ({ children, className }) => {
  return (
    <h5
      className={twMerge(
        "text-2xl leading-[36px] font-bold uppercase text-gray-11",
        className,
      )}
    >
      {children}
    </h5>
  );
};

const Subtitle1 = ({ children, className }) => {
  return (
    <h6
      className={twMerge(
        "text-xl leading-[30px] font-semibold uppercase text-gray-11",
        className,
      )}
    >
      {children}
    </h6>
  );
};

const Subtitle2 = ({ children, className }) => {
  return (
    <h6
      className={twMerge(
        "text-lg leading-[27px] font-semibold uppercase text-gray-11",
        className,
      )}
    >
      {children}
    </h6>
  );
};

const Subtitle3 = ({ children, className }) => {
  return (
    <h6
      className={twMerge(
        "text-base leading-[24px] font-semibold uppercase text-gray-11",
        className,
      )}
    >
      {children}
    </h6>
  );
};

const Body1 = ({ children, className }) => {
  return (
    <p
      className={twMerge(
        "text-xl leading-[30px] font-normal text-gray-11",
        className,
      )}
    >
      {children}
    </p>
  );
};

const Body2 = ({ children, className }) => {
  return (
    <p
      className={twMerge(
        "text-lg leading-[27px] font-normal text-gray-11",
        className,
      )}
    >
      {children}
    </p>
  );
};

const Body3 = ({ children, className }) => {
  return (
    <p
      className={twMerge(
        "text-base leading-[24px] font-normal text-gray-11",
        className,
      )}
    >
      {children}
    </p>
  );
};

const Body4 = ({ children, className }) => {
  return (
    <p
      className={twMerge(
        "text-sm leading-[22px] font-normal text-gray-11",
        className,
      )}
    >
      {children}
    </p>
  );
};

const variantMapping = {
  h1: H1,
  h2: H2,
  h3: H3,
  h4: H4,
  h5: H5,
  subtitle1: Subtitle1,
  subtitle2: Subtitle2,
  subtitle3: Subtitle3,
  body1: Body1,
  body2: Body2,
  body3: Body3,
  body4: Body4,
};

const Typography = ({ variant, children, className, mobileVariant }) => {
  const { isMobile } = useWindowSize();
  const currentVariant = isMobile && mobileVariant ? mobileVariant : variant;
  const Component = variantMapping[currentVariant];
  if (!Component) {
    console.error(`Unknown variant: ${variant}`);
    return null;
  }

  return <Component className={className}>{children}</Component>;
};

export default Typography;
