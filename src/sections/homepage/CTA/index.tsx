import { SectionHeader } from "@/components/atoms/SectionHeader";
import { Container } from "@/components/layout/Container";

export function CTA() {
  return (
    <section className="relative w-full overflow-hidden py-24 text-center lg:py-36">
      <div
        className="absolute inset-x-0 top-1/2 -z-10 flex -translate-y-1/2 transform-gpu justify-center overflow-hidden blur-3xl sm:bottom-0 sm:right-[calc(50%-6rem)] sm:top-auto sm:translate-y-0 sm:transform-gpu sm:justify-end"
        aria-hidden="true"
      >
        <div
          className="aspect-[1108/632] w-[69.25rem] flex-none bg-gradient-to-r from-blue-400 to-blue-600 opacity-25"
          style={{
            clipPath:
              "polygon(73.6% 48.6%, 91.7% 88.5%, 100% 53.9%, 97.4% 18.1%, 92.5% 15.4%, 75.7% 36.3%, 55.3% 52.8%, 46.5% 50.9%, 45% 37.4%, 50.3% 13.1%, 21.3% 36.2%, 0.1% 0.1%, 5.4% 49.1%, 21.4% 36.4%, 58.9% 100%, 73.6% 48.6%)",
          }}
        />
      </div>
      <Container>
        <div className="mx-auto text-center">
          <SectionHeader
            subtext="Contact"
            title="Let's turn your vision into reality."
            description="We work with teams like yours to architect, analyze, research, design and build experiences that last. It all starts with a conversation."
          />
          <div className="mt-16 flex items-center justify-center gap-x-6">
            <a
              href="mailto:hi@metacrypt.org"
              className="rounded-xl bg-blue-600 px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-blue-500"
            >
              hi@metacrypt.org
            </a>
          </div>
        </div>
      </Container>
      <div
        className="absolute left-1/2 right-0 top-full -z-10 hidden -translate-y-1/2 transform-gpu overflow-hidden blur-3xl sm:block"
        aria-hidden="true"
      >
        <div
          className="aspect-[1155/678] w-[72.1875rem] bg-gradient-to-tr from-blue-400 to-blue-600 opacity-25"
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
        />
      </div>
    </section>
  );
}
