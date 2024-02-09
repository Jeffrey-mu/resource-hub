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
import { appConfig, menuItems, MenuItem } from "@/lib/constant";
import { ThemeSwitcher } from "@/components/ThemeSwitcher/Index.tsx";
import { Github } from "@/components/svg/Github";
import Logo from "./Logo";
import DownArrow from "../svg/DownArrow";

const navMenuItems = menuItems
  .map(({ label, path, des = "", hide, children = [], params = [] }) => {
    return { label, path, children, des, hide, params };
  })
  .filter((item) => !item?.hide);
export default function App() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [isopenTooltip, setIsopenTooltip] = React.useState(false);
  const location = useLocation();
  const [pathname, setPathname] = React.useState("/");
  React.useEffect(() => {
    setPathname(location.pathname);
  });
  function sub_menu(item: MenuItem, type: "params" | "children") {
    const sub_menus = item[type] || []; // 如果item[type]不存在，则默认为空数组
    return (
      <>
        <Tooltip
          delay={0}
          closeDelay={200}
          isOpen={isopenTooltip}
          onOpenChange={(open) => setIsopenTooltip(open)}
          content={
            <>
              <Listbox aria-label="Actions">
                {sub_menus.map((child) => (
                  <ListboxItem key={child.path}>
                    <NavLink
                      className={cn(
                        "hover:text-blue-500 h-6 block text-sm w-full",
                        `${
                          type === "params"
                            ? pathname ===
                              item.path.replace(/:(\w+)/, "") + child.label
                              ? "text-blue-500"
                              : ""
                            : pathname === child.path
                              ? "text-blue-500"
                              : ""
                        }`,
                      )}
                      to={`${
                        type === "params"
                          ? item.path.replace(/:(\w+)/, "") + child.label
                          : child.path
                      }`}
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
              "hover:text-blue-500 group cursor-pointer flex items-center text-sm",
              `${pathname.includes(item.label) ? "text-blue-500" : ""}`,
            )}
          >
            {item.label}
            <DownArrow rotate={isopenTooltip} />
          </span>
        </Tooltip>
      </>
    );
  }

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
        {navMenuItems.map((item, index) => (
          <NavbarItem key={`${item}-${index}pc`}>
            {item.params.length ? (
              sub_menu(item, "params")
            ) : item.children.length ? (
              sub_menu(item, "children")
            ) : (
              <NavLink
                className={cn(
                  "w-full hover:text-blue-500 text-sm",
                  `${pathname === item.path ? "text-blue-500" : ""}`,
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
        {navMenuItems.map((item, index) =>
          item?.children?.length ? (
            <Accordion selectedKeys="all" key={index + item.path}>
              <AccordionItem
                className="py-0"
                key="1"
                aria-label={item.label}
                title={item.label}
              >
                {item.children.map((child) => {
                  return (
                    <NavbarMenuItem
                      className="px-2"
                      key={`${child}-${index}`}
                      onClick={(_) => setIsMenuOpen(false)}
                    >
                      <NavLink
                        className={cn(
                          `w-full py-2 before:mr-4 before:content-[''] before:block before:bg-default-300 before:w-1 before:h-1 before:rounded-full flex items-center`,
                          `${pathname === child.path ? "text-blue-500" : "text-gray-600"}`,
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
                  `${pathname === item.path ? "text-blue-500" : ""}`,
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
