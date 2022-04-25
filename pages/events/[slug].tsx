import { allEvents, Event } from "contentlayer/generated";
import { useMDXComponent } from "next-contentlayer/hooks";
import { mdxComponents } from "src";

export async function getStaticPaths() {
  const paths = allEvents.map((event) => event.url);
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const event = allEvents.find((event) => event.name === params.slug);
  return {
    props: {
      event,
    },
  };
}

type Props = {
  event: Event;
};

const ViewEvent = ({ event }: Props) => {
  const MDX = useMDXComponent(event.body.code);

  return (
    <>
      <h2>Events</h2>

      <article className="mx-auto max-w-2xl py-16">
        <div className="mb-6 text-center">
          <h3 className="mb-1 text-3xl font-bold">{event.name}</h3>
        </div>
        <p>
          {event.start}--{event.end}
        </p>
        <MDX components={mdxComponents} />
      </article>
    </>
  );
};

export default ViewEvent;
