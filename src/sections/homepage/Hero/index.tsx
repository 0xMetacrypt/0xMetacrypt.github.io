import { SectionBackgroundBeams } from "@/components/atoms/SectionBackgrounds";
import { Container } from "@/components/layout/Container";

export function Hero() {
  return (
    <section className="relative w-full">
      <SectionBackgroundBeams />
      <Container className="z-10 space-y-8 py-36 text-center lg:py-48">
        <div className="mx-auto max-w-4xl text-4xl font-bold tracking-tight lg:text-6xl">
          <h1 className="text-slate-800">Tools &amp; Services</h1>
          <h1 className="special-text">Built for the Decentralized Web</h1>
        </div>
        <h2 className="mx-auto max-w-2xl tracking-tight text-slate-700 lg:text-lg">
          Metacrypt enables the crypto and DeFi community with a suite of powerful decentralized services available on
          several different blockchains. Take your projects to the next level with Metacrypt&apos;s suite of audited and
          verified technologies.
        </h2>
      </Container>
    </section>
  );
}
