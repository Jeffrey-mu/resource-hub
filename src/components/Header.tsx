import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
} from "@nextui-org/react";
import { appConfig } from "@/lib/constant";
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
  const menuItems = [
    {
      label: "Home",
      path: "/",
    },
    {
      label: "Game",
      path: "/game",
    },
    {
      label: "About",
      path: "/about",
    },
  ];

  return (
    <Navbar isBordered onMenuOpenChange={setIsMenuOpen}>
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
            <Link
              color={pathname === item.path ? "success" : "foreground"}
              className="w-full"
              href={item.path}
              size="md"
            >
              {item.label}
            </Link>
          </NavbarItem>
        ))}
      </NavbarContent>
      <NavbarContent justify="end">
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
            <Link
              color={pathname === item.path ? "success" : "foreground"}
              className="w-full"
              href={item.path}
              size="md"
            >
              {item.label}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}
