import { Heading } from "@chakra-ui/react";
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
      <Heading marginBottom={5}>Events</Heading>

      <article>
        <Heading as="h3" marginBottom={5}>
          {event.name}
        </Heading>

        <MDX components={mdxComponents} />
      </article>
    </>
  );
};

export default ViewEvent;
