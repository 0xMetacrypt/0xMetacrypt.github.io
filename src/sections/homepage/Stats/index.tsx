import { SectionBackgroundOne } from "@/components/atoms/SectionBackgrounds";
import { SectionHeader } from "@/components/atoms/SectionHeader";
import { Container } from "@/components/layout/Container";

interface IIndividualStat {
  title: string;
  description: string;
}

function IndividualStat({ title, description }: IIndividualStat) {
  return (
    <div className="flex select-none flex-col bg-blue-50 p-8 transition-colors hover:bg-blue-100">
      <dt className="text-sm font-semibold leading-6 text-slate-600">{title}</dt>
      <dd className="order-first text-3xl font-semibold tracking-tight text-slate-900">{description}</dd>
    </div>
  );
}

export function Stats() {
  return (
    <section className="relative w-full py-24 text-center lg:py-36">
      <SectionBackgroundOne withHighlight />
      <Container>
        <div className="mx-auto">
          <SectionHeader
            subtext="Thank you"
            title="Safety & Trust"
            description="Thank you to the thousands of people that trust us to provide the best. All our work collectively has impacted the entire ecosystem in a positive way, and we're extremely grateful for the opportunity to do so."
          />
          <dl className="mt-16 grid grid-cols-1 gap-1 overflow-hidden rounded-2xl text-center sm:grid-cols-2 lg:grid-cols-4">
            <IndividualStat
              title="Projects"
              description="25,000+"
            />
            <IndividualStat
              title="Total Value Created"
              description="$500m+"
            />
            <IndividualStat
              title="Users"
              description="150,000+"
            />
            <IndividualStat
              title="Since"
              description="2019"
            />
          </dl>
          <p className="mt-4 text-xs">Combined stats across our product & services ecosystem.</p>
        </div>
      </Container>
    </section>
  );
}
