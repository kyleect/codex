import BeingLink from "components/BeingLink";
import EventLink from "components/EventLink";
import LocationLink from "components/LocationLink";
import ThingLink from "components/ThingLink";
import Link from "next/link";

export const mdxComponents = {
  a: ({ href, children, ...props }) => (
    <Link href={href}>
      <a {...props}>{children}</a>
    </Link>
  ),
  Being: ({ children }) => <BeingLink name={children} />,
  Location: ({ children }) => <LocationLink name={children} />,
  Thing: ({ children }) => <ThingLink name={children} />,
  Event: ({ children }) => <EventLink name={children} />,
};
