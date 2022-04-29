import { Box, Flex } from "@chakra-ui/react";

export type ArticleProps = {
  main: React.ReactNode;
  side?: React.ReactNode;
};

export function Article({ main, side }: ArticleProps) {
  return (
    <article>
      <Flex>
        <Box py={3} flexGrow={4}>
          {main}
        </Box>

        {side && (
          <Box py={3} mx={5} flexGrow={1}>
            {side}
          </Box>
        )}
      </Flex>
    </article>
  );
}
