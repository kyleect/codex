import Link from "next/link";
import { allThings, Thing } from "contentlayer/generated";
import { Heading, ListItem, UnorderedList } from "@chakra-ui/react";

export async function getStaticProps() {
  return { props: { things: allThings } };
}

type Props = {
  things: Thing[];
};

export default function ListBeings({ things }: Props) {
  return (
    <>
      <Heading marginBottom={5}>Things</Heading>

      <UnorderedList>
        {things.map((thing, idx) => (
          <ListItem key={idx}>
            <Link href={thing.url}>
              <a>{thing.name}</a>
            </Link>
          </ListItem>
        ))}
      </UnorderedList>
    </>
  );
}
