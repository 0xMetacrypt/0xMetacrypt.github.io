import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";

import { SectionHeader } from "@/components/atoms/SectionHeader";
import { Container } from "@/components/layout/Container";

interface ISingleProduct {
  link: string;
  logo: string;
  title: string;
  description: string;
  tags: string[];
  soon?: boolean;
}

const productsList: ISingleProduct[] = [
  {
    link: "https://www.createmytoken.com/",
    logo: "/images/products/createmytoken.png",
    title: "CreateMyToken",
    description: "No-code token creation platform for Solana, Ethereum, BNB Smart Chain and more.",
    tags: ["no-code", "free"],
  },
  {
    link: "/tools/uniswap-v3-calculator-simulator/",
    logo: "/images/products/uniswap-v3-calculator.png",
    title: "Uniswap V3 Calculator",
    description: "Easily calculate and simulate any V3 position with essential stats such as earnings, volume and APR.",
    tags: ["hobbyist", "free"],
  },
  {
    link: "https://unispark.metacrypt.org/",
    logo: "/images/products/unispark.png",
    title: "Unispark",
    description: "Fully featured Uniswap V3 Analysis, Optimization and Simulation Tool with advanced features.",
    tags: ["pro", "grant"],
  },
  {
    link: "https://www.metavisor.app/",
    logo: "/images/products/metavisor.png",
    title: "Metavisor",
    description: "Liquidity Automation, Management and Optimization platform for Uniswap V3 compatible AMMs.",
    tags: ["institutional"],
  },
  {
    link: "https://www.peerswap.xyz/",
    logo: "/images/products/peerswap.png",
    title: "PeerSwap",
    description: "Trustless peer-to-peer exchange for any ERC20, ERC721 and ERC1155 assets.",
    tags: ["discontinued"],
  },
  {
    link: "#",
    logo: "/logo-mark.png",
    title: "Artifact",
    description: "Deployment Automation and Management platform for EVM compatible chains.",
    tags: ["soon"],
    soon: true,
  },
];

function SingleProduct({ link, logo, title, description, tags, soon = false }: ISingleProduct) {
  return (
    <Link
      href={link}
      target="_blank"
    >
      <div className="relative block rounded-xl bg-white p-4 ring-1 ring-slate-500/20 transition-all hover:ring-2 hover:ring-blue-600/30">
        {soon && (
          <div className="absolute -m-4 grid h-full w-full items-center justify-center">
            <p className="text-blue-600">WIP</p>
          </div>
        )}
        <div className={clsx("flex flex-col gap-2", soon && "blur-md")}>
          <Image
            className="h-16 w-16 flex-none"
            width={512}
            height={512}
            src={logo}
            alt={title}
          />
          <h2 className="text-lg font-semibold">{title}</h2>
          <div className="-mt-1 text-sm text-slate-900">{description}</div>
          <div className="mt-2 space-x-2 text-xs capitalize text-blue-500">
            {tags.map((e) => (
              <p
                key={e}
                className="inline-block rounded-full bg-blue-100 px-3 py-1"
              >
                {e}
              </p>
            ))}
          </div>
        </div>
      </div>
    </Link>
  );
}

export function Products() {
  return (
    <section className="relative w-full py-24 text-center lg:py-36">
      <Container>
        <div className="mx-auto">
          <SectionHeader
            subtext="Flagship"
            title="Products & Services"
            description="Select list of products and services that we've built and maintain. We're always looking to expand our offerings and provide more value to the community."
          />
        </div>
        <div className="mt-16 grid grid-cols-1 gap-4 text-left md:grid-cols-2 lg:grid-cols-3">
          {productsList.map((e) => (
            <SingleProduct
              key={e.title}
              {...e}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}
