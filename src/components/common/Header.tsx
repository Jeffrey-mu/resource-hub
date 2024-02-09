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
  Divider,
  Accordion,
  AccordionItem,
} from "@nextui-org/react";
import { appConfig, menuItems } from "@/lib/constant";
import { ThemeSwitcher } from "@/components/ThemeSwitcher/Index.tsx";
import { Github } from "@/components/svg/Github";
import Logo from "./Logo";
export default function App() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [isopenTooltip, setIsopenTooltip] = React.useState(false);
  const location = useLocation();
  const [pathname, setPathname] = React.useState("/");
  React.useEffect(() => {
    setPathname(location.pathname);
  });
  return (
    <Navbar
      isBordered
      maxWidth="2xl"
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={setIsMenuOpen}
    >
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Open menu" : "Open menu"}
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
                  closeDelay={200}
                  isOpen={isopenTooltip}
                  onOpenChange={(open) => setIsopenTooltip(open)}
                  content={
                    <>
                      <Listbox aria-label="Actions" className="">
                        {item.childen?.map((child) => (
                          <ListboxItem key={child.path}>
                            <NavLink
                              className={cn(
                                "hover:text-green-500 h-6 w-full block text-sm",
                                `${pathname === child.path ? "text-green-500" : ""}`,
                              )}
                              to={child.path}
                            >
                              {child.label}
                            </NavLink>
                          </ListboxItem>
                        ))}
                      </Listbox>
                      <Divider />

                      <p className="p-2 text-right rtl:text-left text-gray-500 dark:text-gray-400">
                        {" "}
                        {item.des}
                      </p>
                    </>
                  }
                  showArrow
                >
                  <span
                    className={cn(
                      "hover:text-green-500 group cursor-pointer flex items-center text-sm",
                      `${pathname.includes("awesome") ? "text-green-500" : ""}`,
                    )}
                  >
                    {item.label}{" "}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="1.5em"
                      height="1.5em"
                      viewBox="0 0 24 24"
                      className={cn(`${isopenTooltip ? "rotate-180" : ""}`)}
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
                  "w-full hover:text-green-500 text-sm",
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
        <NavbarItem className="lg:flex">
          <ThemeSwitcher />
        </NavbarItem>
      </NavbarContent>
      <NavbarMenu>
        {menuItems.map((item, index) =>
          item?.childen?.length ? (
            <Accordion selectedKeys="all">
              <AccordionItem
                className="py-0"
                key="1"
                aria-label={item.label}
                title={item.label}
              >
                {item.childen.map((child) => {
                  return (
                    <NavbarMenuItem
                      className="px-2"
                      key={`${child}-${index}`}
                      onClick={(_) => setIsMenuOpen(false)}
                    >
                      <NavLink
                        className={cn(
                          `w-full py-2 before:mr-4 before:content-[''] before:block before:bg-default-300 before:w-1 before:h-1 before:rounded-full flex items-center`,
                          `${pathname === child.path ? "text-green-500" : "text-gray-400"}`,
                        )}
                        to={child.path}
                      >
                        {child.label}
                      </NavLink>
                    </NavbarMenuItem>
                  );
                })}
              </AccordionItem>
            </Accordion>
          ) : (
            <NavbarMenuItem
              className="px-2"
              key={`${item}-${index}`}
              onClick={(_) => setIsMenuOpen(false)}
            >
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
          ),
        )}
      </NavbarMenu>
    </Navbar>
  );
}
