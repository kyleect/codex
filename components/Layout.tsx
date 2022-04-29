import Link from "next/link";
import Head from "next/head";
import { Box, Container, Heading, HStack, Input } from "@chakra-ui/react";
import { useCallback, useState } from "react";
import { useEffect } from "react";
import { allDocuments, DocumentTypes } from "contentlayer/generated";
import { SearchModal } from "./SearchModal";

export default function Layout({ children }) {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState<DocumentTypes[]>([]);
  const [displaySearch, setDisplaySearch] = useState<boolean>(false);

  const onChange = useCallback((e) => setSearchQuery(e.target.value), []);
  const onSearchFocus = useCallback((e) => setDisplaySearch(true), []);

  const resetSearchModal = useCallback(() => {
    setDisplaySearch(false);
    setSearchQuery("");
    setSearchResults([]);
  }, []);

  useEffect(() => {
    if (searchQuery.length > 0) {
      const results = allDocuments.filter((doc) =>
        doc.name.toLowerCase().includes(searchQuery.toLowerCase())
      );

      setSearchResults(results);
    } else {
      setSearchResults([]);
    }
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

        <Input placeholder="Search" mt={1} mb={5} onFocus={onSearchFocus} />

        <Box>{children}</Box>

        <SearchModal
          isOpen={displaySearch}
          value={searchQuery}
          onChange={onChange}
          onClose={resetSearchModal}
          onClickSearchResult={resetSearchModal}
          searchResults={searchResults}
        />
      </Container>
    </>
  );
}
