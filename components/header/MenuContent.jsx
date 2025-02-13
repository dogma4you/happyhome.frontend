"use client";
import React, { useState } from "react";
import NavLink from "@/components/ui/nav-link";
import cn from "classnames";
import LogoutButton from "@/components/header/LogoutButton";
import { usePathname, useRouter } from "next/navigation";

const menuList = [
  {
    title: "What we do",
    link: "/what-we-do",
  },
  {
    title: "Get an Offer",
    link: false,
  },
  {
    title: "Find a home",
    link: "/find-home",
  },
  {
    title: "FAQ",
    link: "/faq",
  },
];

const dashboardList = [
  {
    title: "Dashboard",
    link: "/dashboard",
  },
  {
    title: "Unlock listing",
    link: "/dashboard/unlock-listing",
  },
  {
    title: "Transactions",
    link: "/dashboard/transactions",
  },
  {
    title: "Settings",
    link: "/dashboard/settings",
  },
];

const MenuContent = ({ isLoggedIn }) => {
  const [menuOpened, setMenuOpened] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  const blackWindowCN = cn({
    "black-window": true,
    active: menuOpened,
  });

  const menuCN = cn({
    menu: true,
    active: menuOpened,
  });

  const handleOpenMenu = () => setMenuOpened((prev) => !prev);
  return (
    <>
      <div className={blackWindowCN} onClick={() => setMenuOpened(false)}></div>
      <div
        className={
          "flex flex-col gap-y-[6px] w-6 md:w-[30px] group/burger cursor-pointer"
        }
        onClick={handleOpenMenu}
      >
        <span className={"burger-button-item"}></span>
        <span className={"burger-button-item"}></span>
        <span className={"burger-button-item"}></span>
      </div>

      <nav className={`${menuCN} w-[374px] max-w-[374px]`}>
        <div
          className={"px-6 xl:px-[120px] pt-6 xl:py-[30px]  overflow-y-auto"}
        >
          <div
            className={
              "size-6 flex flex-col justify-between mb-12 ml-auto group cursor-pointer z-40"
            }
            onClick={() => setMenuOpened(false)}
          >
            <span
              className={
                "burger-button-item-opened rotate-45 translate-y-[12px] "
              }
            ></span>
            <span
              className={
                "burger-button-item-opened -rotate-45 -translate-y-[9px]"
              }
            ></span>
          </div>
          <div className={"flex flex-col gap-y-6 items-center"}>
            {menuList.map(({ title, link }) => {
              if (!link) {
                return (
                  <div
                    key={title}
                    className={"menu-item"}
                    onClick={() => {
                      router.push("/getoffer");
                      setMenuOpened(false);
                    }}
                  >
                    {title}
                  </div>
                );
              }
              return (
                <NavLink
                  className={"menu-item"}
                  activeClassName={"active"}
                  href={link}
                  key={title}
                  onClick={() => setMenuOpened(false)}
                >
                  {title}
                </NavLink>
              );
            })}
          </div>

          {pathname.startsWith("/dashboard") && (
            <div className={"block xl:hidden"}>
              <hr className={"my-12 text-gray-6"} />

              <div className={"flex flex-col gap-y-6 items-center"}>
                {dashboardList.map(({ title, link }) => {
                  if (!link) {
                    return (
                      <div
                        key={title}
                        className={"menu-item"}
                        onClick={() => {
                          router.push("/getoffer");
                          setMenuOpened(false);
                        }}
                      >
                        {title}
                      </div>
                    );
                  }
                  return (
                    <NavLink
                      className={"menu-item"}
                      activeClassName={"active"}
                      href={link}
                      key={title}
                      onClick={() => setMenuOpened(false)}
                    >
                      {title}
                    </NavLink>
                  );
                })}
              </div>
            </div>
          )}
        </div>
        {isLoggedIn && <LogoutButton setMenuOpened={setMenuOpened} />}
      </nav>
    </>
  );
};

export default MenuContent;
