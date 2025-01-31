'use client'

import { avatarPlaceholderUrl, navItems } from "@/constants";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface Props {
  fullName: string;
  email: string;
  avatar: string;
}

const SideBar = ({fullName, email, avatar} : Props) => {
  const pathName = usePathname();
  return (
    <aside className="sidebar">
      <Link href="/">
        <Image
          src={"/assets/icons/logo-full-brand.svg"}
          width={160}
          height={50}
          className="hidden h-auto lg:block"
          alt="logo"
        />
        <Image src="/assets/icons/logo-brand.svg" width={52} height={52} className="lg:hidden" alt="logo-mobile" />
      </Link>

      <nav className="sidebar-nav">
        <ul className="flex flex-1 flex-col gap-6">
          {
            navItems.map(({name, icon, url}) => (
              <Link href={url} key={name} className="lg:h-full">
              <li className={cn("sidebar-nav-item", pathName === url && "shad-active")} >
                <Image src={icon} height={24} width={24} alt={name} className={cn("nav-icon", pathName === url && "nav-icon-active")} />
                <p className="hidden lg:block">{name}</p>
              </li>
              </Link>
            ))
          }
        </ul>
      </nav>

      <Image src="/lanubecita.png" height={506} width={418} className="w-full" alt="file-logo" />

      <div className="sidebar-user-info">
        <Image src={avatarPlaceholderUrl} height={44} width={44} className="sidebar-user-avatar" alt="avatar" />
        <div className="hidden lg:block">
          <p className="subtitle-2 capitalize">{fullName}</p>
          <p className="caption">{email} </p>
        </div>
      </div>
    </aside>
  );
};

export default SideBar;
