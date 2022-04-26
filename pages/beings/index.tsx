import Link from "next/link";
import { allBeings, Being } from "contentlayer/generated";
import { Heading, ListItem, UnorderedList } from "@chakra-ui/react";
import BeingLink from "components/BeingLink";

export async function getStaticProps() {
  return { props: { beings: allBeings } };
}

type Props = {
  beings: Being[];
};

export default function ListBeings({ beings }: Props) {
  return (
    <>
      <Heading marginBottom={5}>Beings</Heading>

      <UnorderedList>
        {beings.map((being, idx) => (
          <ListItem key={idx}>
            <BeingLink name={being.name} />
          </ListItem>
        ))}
      </UnorderedList>
    </>
  );
}
