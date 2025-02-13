"use client";
import Typography from "@/components/ui/typography";
import Logo from "@/public/assets/Logo";
import Link from "next/link";
import Icon from "@/components/ui/icon";

const quickLink = [
  {
    title: "Get an Offer",
    link: "/getoffer",
  },
  {
    title: "Find a Home",
    link: "/find-home",
  },
  {
    title: "How it Works",
    link: "/#how-it-works",
  },
  {
    title: "FAQ",
    link: "/faq",
  },
];

const termsAndPrivacy = [
  {
    title: "Terms of use",
    link: "/terms-and-conditions",
  },
  {
    title: "Privacy policy",
    link: "/privacy-policy",
  },
];

const contact = [
  {
    title: "Annapolis, MD",
    link: "/",
  },
  {
    title: "hello@thehhi.com",
    link: "/",
  },
  {
    title: "800-234-HOME",
    link: "/",
  },
];

const FooterItems = ({ title, links }) => {
  return (
    <div>
      <Typography
        variant={"body4"}
        className={"uppercase font-bold text-[#D3D4DB] text-xs mb-3"}
      >
        {title}
      </Typography>
      <ul className={"flex flex-col gap-y-3"}>
        {links.map(({ title, link, onClick }) => {
          if (!link) {
            const handleClick = () => {
              if (onClick) {
                onClick();
              }
            };
            return (
              <li
                key={title}
                className={
                  "menu-item text-sm font-normal text-white text-left cursor-pointer"
                }
                onClick={handleClick}
              >
                {title}
              </li>
            );
          }
          return (
            <li key={title} className={"text-left"}>
              <Link
                className={"menu-item text-sm font-normal text-white"}
                href={link}
                key={title}
              >
                {title}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

const Footer = ({ className }) => {
  return (
    <footer className={className}>
      <div
        className={
          "container py-12 md:flex md:items-start md:justify-between grid grid-cols-2 gap-y-11"
        }
      >
        <Logo
          logoColor={"white"}
          onlyDesktopView
          className={"col-span-2 w-[180px]"}
        />
        <FooterItems title={"Quick Link"} links={quickLink} />
        <FooterItems title={"Terms & privacy"} links={termsAndPrivacy} />
        <FooterItems title={"Contact"} links={contact} />

        <div>
          <Typography
            variant={"body4"}
            className={"uppercase font-bold text-[#D3D4DB] text-xs mb-3"}
          >
            Follow us
          </Typography>
          <ul className={" gap-4 grid grid-cols-4"}>
            <li>
              <Icon
                name={"facebook"}
                className={
                  "text-white text-2xl hover:text-blue-6 cursor-pointer transition"
                }
                onClick={() =>
                  window.open(
                    "https://www.facebook.com/profile.php?id=61559070351204",
                  )
                }
              />
            </li>
            <li>
              <Icon
                name={"twitter"}
                className={
                  "text-white text-lg hover:text-blue-6 cursor-pointer transition"
                }
                onClick={() => window.open("https://x.com/HappyHomeVibe")}
              />
            </li>
            <li>
              <Icon
                name={"youtube"}
                className={
                  "text-white text-lg hover:text-blue-6 cursor-pointer transition"
                }
                onClick={() =>
                  window.open(
                    "https://www.youtube.com/channel/UClxV5l_5BFk9RHiQo4SpOfQ",
                  )
                }
              />
            </li>
            <li>
              <Icon
                name={"instagram"}
                className={
                  "text-white text-2xl hover:text-blue-6 cursor-pointer transition"
                }
                onClick={() =>
                  window.open("https://www.instagram.com/happyhomevibe/")
                }
              />
            </li>
            <li>
              <Icon
                name={"tiktok"}
                className={
                  "text-white text-2xl hover:text-blue-6 cursor-pointer transition"
                }
                onClick={() =>
                  window.open("https://www.tiktok.com/@happyhomevibe?lang=en")
                }
              />
            </li>
            <li>
              <Icon
                name={"threads"}
                className={
                  "text-white text-2xl hover:text-blue-6 cursor-pointer transition"
                }
                onClick={() =>
                  window.open("https://www.threads.net/@happyhomevibe")
                }
              />
            </li>
          </ul>
        </div>
      </div>
      <div className={"border-t border-[#3B3E44]"}>
        <Typography
          variant={"body4"}
          className={"py-5 container text-center md:text-right text-[#DDDDE3]"}
        >
          Copyright © 2024 The Happy Home Initiative, LLC
        </Typography>
      </div>
    </footer>
  );
};

export default Footer;
