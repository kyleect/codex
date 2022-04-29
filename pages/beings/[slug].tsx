import { Box, Heading, ListItem, Tag, UnorderedList } from "@chakra-ui/react";
import { Article } from "components/Article";
import BeingLink from "components/BeingLink";
import LocationLink from "components/LocationLink";
import { allBeings, Being } from "contentlayer/generated";
import { useMDXComponent } from "next-contentlayer/hooks";
import { mdxComponents } from "src";
import { InfoPanel } from "../../components/InfoPanel";

export async function getStaticPaths() {
  const paths = allBeings.map((being) => being.url);
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const being = allBeings.find((being) => being.name === params.slug);
  return {
    props: {
      being,
    },
  };
}

type Props = {
  being: Being;
};

const ViewBeing = ({ being }: Props) => {
  const MDX = useMDXComponent(being.body.code);

  return (
    <Article
      main={
        <>
          <Heading as="h3" marginBottom={5}>
            {being.name}
          </Heading>

          <Box pb={5}>
            <Tag>Being</Tag>
          </Box>

          <MDX components={mdxComponents} />
        </>
      }
      side={
        <>
          {being.aliases && (
            <InfoPanel as="h4" title="Aliases">
              <UnorderedList>
                {being.aliases.map((alias, i) => {
                  return (
                    <ListItem key={i}>
                      <BeingLink name={alias} />
                    </ListItem>
                  );
                })}
              </UnorderedList>
            </InfoPanel>
          )}

          {being.placeOfOrigin && (
            <InfoPanel as="h4" title="Place Of Origin">
              <LocationLink name={being.placeOfOrigin} />
            </InfoPanel>
          )}

          {being.placeOfResidence && (
            <InfoPanel as="h4" title="Place Of Residence">
              <LocationLink name={being.placeOfResidence} />
            </InfoPanel>
          )}
        </>
      }
    />
  );
};

export default ViewBeing;
