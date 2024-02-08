import React from "react";
import cn from "clsx";
import { NavLink, useLocation } from "react-router-dom";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  Tooltip,
  Listbox,
  ListboxItem,
} from "@nextui-org/react";
import { appConfig, menuItems } from "@/lib/constant";
import { ThemeSwitcher } from "@/components/ThemeSwitcher/Index.tsx";
import { Github } from "@/components/svg/Github";
import Logo from "./Logo";
export default function App() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const location = useLocation();
  const [pathname, setPathname] = React.useState("/");
  React.useEffect(() => {
    setPathname(location.pathname);
  });
  return (
    <Navbar isBordered maxWidth="2xl" onMenuOpenChange={setIsMenuOpen}>
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
        <NavbarBrand>
          <Logo />
          <NavLink to="/" className="font-bold text-xl">
            {appConfig.siteName}
          </NavLink>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        {menuItems.map((item, index) => (
          <NavbarItem key={`${item}-${index}`}>
            {item.childen?.length ? (
              <>
                <Tooltip
                  delay={0}
                  closeDelay={0}
                  content={
                    <Listbox aria-label="Actions" className="">
                      {item.childen?.map((child) => (
                        <ListboxItem key={child.path}>
                          <NavLink
                            className={cn(
                              "hover:text-green-500 h-6 w-[150px] block",
                              `${pathname === child.path ? "text-green-500" : ""}`,
                            )}
                            to={child.path}
                          >
                            {child.label}
                          </NavLink>
                        </ListboxItem>
                      ))}
                    </Listbox>
                  }
                  showArrow
                >
                  <span
                    className={cn(
                      "cursor-pointer flex items-center",
                      `${pathname.includes("awesome") ? "text-green-500" : ""}`,
                    )}
                  >
                    {item.label}{" "}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="1em"
                      height="1em"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="m7 10l5 5l5-5"
                      />
                    </svg>
                  </span>
                </Tooltip>
              </>
            ) : (
              <NavLink
                className={cn(
                  "w-full hover:text-green-500",
                  `${pathname === item.path ? "text-green-500" : ""}`,
                )}
                to={item.path}
              >
                {item.label}
              </NavLink>
            )}
          </NavbarItem>
        ))}
      </NavbarContent>
      <NavbarContent justify="end" className="gap-1.5">
        <NavbarItem>
          <NavLink
            to="https://github.com/Jeffrey-mu/developer-tools"
            className="font-black text-2xl"
          >
            <Github />
          </NavLink>
        </NavbarItem>
        <NavbarItem className="hidden lg:flex">
          <ThemeSwitcher />
        </NavbarItem>
      </NavbarContent>
      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <NavLink
              className={cn(
                'w-full"',
                `${pathname === item.path ? "text-green-500" : ""}`,
              )}
              to={item.path}
            >
              {item.label}
            </NavLink>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}
