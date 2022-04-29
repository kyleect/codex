import Link from "next/link";
import Head from "next/head";
import {
  Box,
  Container,
  Heading,
  HStack
} from "@chakra-ui/react";

export default function Layout({ children }) {
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

        <Box>{children}</Box>
      </Container>
    </>
  );
}
