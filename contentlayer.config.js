import { defineDocumentType, makeSource } from "contentlayer/source-files";

export const Location = defineDocumentType(() => ({
  name: "Location",
  contentType: "mdx",
  filePathPattern: `**/*.location.md`,
  fields: {
    name: {
      type: "string",
      description: "Name of location",
      required: true,
    },
  },
  computedFields: {
    url: {
      type: "string",
      resolve: (location) => `/locations/${location.name}`,
    },
  },
}));

export const Being = defineDocumentType(() => ({
  name: "Being",
  contentType: "mdx",
  filePathPattern: `**/*.being.md`,
  fields: {
    name: {
      type: "string",
      description: "Name of being",
      required: true,
    },
    aliases: {
      type: "json",
      required: false
    },
    age: {
      type: "string",
      description: "Age of being",
    },
    eyes: {
      type: "string",
      description: "Eye color",
    },
    hair: {
      type: "string",
      description: "Hair color",
    },
    skin: {
      type: "string",
      description: "Skin color",
    },
  },
  computedFields: {
    url: {
      type: "string",
      resolve: (being) => `/beings/${being.name}`,
    },
  },
}));

export const Thing = defineDocumentType(() => ({
  name: "Thing",
  contentType: "mdx",
  filePathPattern: `**/*.thing.md`,
  fields: {
    name: {
      type: "string",
      description: "Name of thing",
      required: true,
    },
  },
  computedFields: {
    url: {
      type: "string",
      resolve: (thing) => `/things/${thing.name}`,
    },
  },
}));

export const Event = defineDocumentType(() => ({
  name: "Event",
  contentType: "mdx",
  filePathPattern: `**/*.event.md`,
  fields: {
    name: {
      type: "string",
      description: "Name of event",
      required: true,
    },
    start: {
      type: "string",
      description: "Start of event",
      required: true,
    },
    end: {
      type: "string",
      description: "End of event",
      required: false,
    },
  },
  computedFields: {
    url: {
      type: "string",
      resolve: (event) => `/events/${event.name}`,
    },
  },
}));

export default makeSource({
  contentDirPath: "data",
  documentTypes: [Location, Being, Thing, Event],
});
