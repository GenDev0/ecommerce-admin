"use client";

import { useParams, usePathname } from "next/navigation";

import { cn } from "@/lib/utils";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Menu } from "lucide-react";

const MainNav = ({
  className,
  ...props
}: React.HtmlHTMLAttributes<HTMLAnchorElement>) => {
  const pathname = usePathname();
  const params = useParams();
  const routes = [
    {
      href: `/${params.storeId}`,
      label: "Overview",
      active: pathname === `/${params.storeId}`,
    },
    {
      href: `/${params.storeId}/billboards`,
      label: "Billboards",
      active: pathname === `/${params.storeId}/billboards`,
    },
    {
      href: `/${params.storeId}/categories`,
      label: "Categories",
      active: pathname === `/${params.storeId}/categories`,
    },
    {
      href: `/${params.storeId}/sizes`,
      label: "Sizes",
      active: pathname === `/${params.storeId}/sizes`,
    },
    {
      href: `/${params.storeId}/colors`,
      label: "Colors",
      active: pathname === `/${params.storeId}/colors`,
    },
    {
      href: `/${params.storeId}/products`,
      label: "Products",
      active: pathname === `/${params.storeId}/products`,
    },
    {
      href: `/${params.storeId}/orders`,
      label: "Orders",
      active: pathname === `/${params.storeId}/orders`,
    },
    {
      href: `/${params.storeId}/settings`,
      label: "Settings",
      active: pathname === `/${params.storeId}/settings`,
    },
  ];

  return (
    <nav
      className={cn(
        "flex items-center space-x-1 md:space-x-4 lg:space-x-6",
        className
      )}
    >
      <div className='md:hidden relative'>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant='outline'>
              <Menu />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className='w-56'>
            <DropdownMenuGroup>
              {routes.map((route) => (
                <Link key={route.href} href={route.href}>
                  <DropdownMenuItem
                    className={cn(
                      " w-fulltext-sm font-medium transition-colors",
                      route.active
                        ? "text-black dark:text-white bg-gray-300"
                        : "text-gray-500",
                      "px-2 py-3 cursor-pointer w-full"
                    )}
                    key={route.href}
                  >
                    {route.label}
                  </DropdownMenuItem>
                </Link>
              ))}
            </DropdownMenuGroup>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      {/* Rest of the code for larger screens */}
      <div className='hidden  md:relative  md:flex items-center space-x-1 md:space-x-4 lg:space-x-6'>
        {routes.map((route) => (
          <Link
            key={route.href}
            href={route.href}
            className={cn(
              "text-sm font-medium transition-colors hover:text-primary",
              route.active
                ? "text-black dark:text-white"
                : "text-muted-foreground"
            )}
          >
            {route.label}
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default MainNav;

// <nav
// className={cn(
//   "flex items-center space-x-1 md:space-x-4 lg:space-x-6",
//   className
// )}
// >
// {routes.map((route) => (
//   <Link
//     key={route.href}
//     href={route.href}
//     className={cn(
//       "text-sm font-medium transition-colors hover:text-primary",
//       route.active
//         ? "text-black dark:text-white"
//         : "text-muted-foreground"
//     )}
//   >
//     {route.label}
//   </Link>
// ))}
// </nav>
