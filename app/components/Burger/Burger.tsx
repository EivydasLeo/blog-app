"use client";
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetClose,
} from "@/app/components/ui/sheet";
import { Button } from "@/app/components/ui/button";
import { Link } from "@/i18n/routing";
import styles from "@/app/styles/components/Burger/burger.module.scss";
import { LocalesData, LogoData } from "@/app/utils/dummyData/data";
import { useTranslations } from "next-intl";
import { usePathname } from "next/navigation";

export default function Burger() {
  const pathname = usePathname();
  const { headerLogo } = LogoData;
  const t = useTranslations("HomePage");
  const navigationKeys = Object.keys(t.raw("navigation"));

  const handleLinkActive = (path: string) => {
    const currentPath = pathname.split("/")[2] || "";
    return currentPath === path ? styles.active : "";
  };

  return (
    <nav className="items-center px-4 md:px-6 lg:hidden">
      <Sheet>
        <SheetTrigger asChild>
          <Button
            variant="outline"
            size="icon"
            className="lg:hidden border-[#be7c68] bg-[#be7c68] text-white rounded-full"
          >
            <MenuIcon className="!h-5 !w-5" />
          </Button>
        </SheetTrigger>
        <SheetContent side="top">
          <Link href="/" prefetch={false} className={styles.logo}>
            {headerLogo}
          </Link>

          <div className="grid gap-4 py-6">
            <ul className={styles.container}>
              {navigationKeys.map((key) => (
                <li className={styles.links} key={key}>
                  <SheetClose asChild>
                    <Link
                      href={`/${key}`}
                      className={`${styles.link} ${handleLinkActive(key)}`}
                    >
                      {t(`navigation.${key}`).toUpperCase()}
                    </Link>
                  </SheetClose>
                </li>
              ))}
            </ul>

            <ul className="flex gap-2">
              {LocalesData.map((locale) => (
                <li key={locale}>
                  <SheetClose asChild>
                    <Link
                      href="/"
                      locale={locale}
                      className={`locale-link locale-link-${locale}`}
                    >
                      {locale.toUpperCase()}
                    </Link>
                  </SheetClose>
                </li>
              ))}
            </ul>
          </div>
        </SheetContent>
      </Sheet>
    </nav>
  );
}

function MenuIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="6" y2="6" />
      <line x1="4" x2="20" y1="18" y2="18" />
    </svg>
  );
}
