import Link from "next/link";
import Head from "next/head";
import {
  Box,
  Container,
  Heading,
  HStack,
  Input,
  ListItem,
  Tag,
  Text,
  UnorderedList,
} from "@chakra-ui/react";
import { useState } from "react";
import { useEffect } from "react";
import { allDocuments, DocumentTypes } from "contentlayer/generated";

export default function Layout({ children }) {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const onChange = (e) => setSearchQuery(e.target.value);

  const onClick = (e: any) => {
    debugger;
    setSearchQuery("");
    setSearchResults([]);
  };

  useEffect(() => {
    const results = allDocuments.filter((doc) =>
      doc.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    setSearchResults(results);
  }, [searchQuery]);

  return (
    <>
      <Head>
        <title>Codex</title>
      </Head>

      <Container>
        <section>
          <Heading as="h1">
            <Link href="/">
              <a>Codex</a>
            </Link>
          </Heading>

          <Box my={3}>
            <HStack>
              <Box>
                <Link href="/beings">
                  <a>Beings</a>
                </Link>
              </Box>
              <Box>
                <Link href="/locations">
                  <a>Locations</a>
                </Link>
              </Box>
              <Box>
                <Link href="/things">
                  <a>Things</a>
                </Link>
              </Box>
              <Box>
                <Link href="/events">
                  <a>Events</a>
                </Link>
              </Box>
            </HStack>
          </Box>
        </section>

        <Box>
          <Input
            value={searchQuery}
            onChange={onChange}
            placeholder="Search"
            mt={1}
            mb={5}
          />
        </Box>

        {searchQuery ? (
          <SearchResults results={searchResults} onClick={onClick} />
        ) : (
          <Box>{children}</Box>
        )}
      </Container>
    </>
  );
}

type SearchResultProps = {
  results: DocumentTypes[];
  onClick: any;
};

function SearchResults({ results, onClick }: SearchResultProps) {
  return (
    <UnorderedList>
      {results.map((result) => {
        return (
          <ListItem>
            <Link href={result.url}>
              <a onClick={onClick}>
                {result.name} <Tag>{result.type}</Tag>
              </a>
            </Link>
          </ListItem>
        );
      })}
    </UnorderedList>
  );
}
