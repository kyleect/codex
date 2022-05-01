import {
  Box,
  Input,
  ListItem,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Tag,
  Text,
  UnorderedList,
} from "@chakra-ui/react";
import { DocumentTypes } from "contentlayer/generated";
import Link from "next/link";

export type SearchModalProps = {
  value: string;
  onChange: (e: any) => void;
  isOpen: boolean;
  searchResults: DocumentTypes[];
  onClose: () => void;
  onClickSearchResult: () => void;
};

export function SearchModal({
  isOpen,
  onClose,
  onClickSearchResult,
  value,
  onChange,
  searchResults,
}: SearchModalProps) {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Search</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Input
            value={value}
            onChange={onChange}
            placeholder="Search"
            autoFocus={true}
            mt={1}
            mb={5}
          />

          <SearchResults
            results={searchResults}
            onClickResult={onClickSearchResult}
          />
        </ModalBody>

        <ModalFooter>
          {value.length > 0 && <Text>Results: {searchResults.length}</Text>}
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}

type SearchResultProps = {
  results: DocumentTypes[];
  onClickResult: (e: any) => void;
};

function SearchResults({ results, onClickResult }: SearchResultProps) {
  return (
    <UnorderedList listStyleType="none" m={0}>
      {results.map((result, i) => {
        return (
          <ListItem key={i} p={2}>
            <Link href={result.url}>
              <a onClick={onClickResult}>
                <Text fontSize={"lg"} display="inline">
                  {result.name}
                </Text>{" "}
                <Tag>{result.type}</Tag>
              </a>
            </Link>
          </ListItem>
        );
      })}
    </UnorderedList>
  );
}
