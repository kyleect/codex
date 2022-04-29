import { As, Box, Heading } from "@chakra-ui/react";

export type InfoPanelProps = {
  title: string;
  as: As<any>;
  children: React.ReactNode;
};

export function InfoPanel({ title, as, children }: InfoPanelProps) {
  return (
    <Box mb={5}>
      <Heading as={as} size="lg" pb={5}>
        {title}
      </Heading>

      {children}
    </Box>
  );
}
