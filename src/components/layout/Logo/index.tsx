import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";

import { AppConfig } from "@/config/appConfig";

export function Logo({ className }: React.ComponentPropsWithoutRef<"div">) {
  return (
    <div className={clsx("", className)}>
      <Link
        href="/"
        className="flex items-center justify-center space-x-3"
      >
        <Image
          src="/logo-mark.png"
          height={128}
          width={128}
          className="h-12 w-12"
          alt={`${AppConfig.title} Logo`}
          priority
        />
        <span className="text-2xl font-bold text-slate-800">{AppConfig.site_name}</span>
      </Link>
    </div>
  );
}
