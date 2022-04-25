import { defineDocumentType, makeSource } from 'contentlayer/source-files'

export const Location = defineDocumentType(() => ({
    name: 'Location',
    contentType: 'mdx',
    filePathPattern: `**/*.location.md`,
    fields: {
        name: {
            type: 'string',
            description: 'Name of location',
            required: true,
        },
    },
    computedFields: {
        url: {
            type: 'string',
            resolve: (location) => `/locations/${location.name}`,
        },
    },
}))

export const Being = defineDocumentType(() => ({
    name: 'Being',
    contentType: 'mdx',
    filePathPattern: `**/*.being.md`,
    fields: {
        name: {
            type: 'string',
            description: 'Name of being',
            required: true,
        },
        age: {
            type: 'string',
            description: 'Age of being',
        },
        eyes: {
            type: 'string',
            description: 'Eye color',
        },
        hair: {
            type: 'string',
            description: 'Hair color',
        },
        skin: {
            type: 'string',
            description: 'Skin color',
        },
    },
    computedFields: {
        url: {
            type: 'string',
            resolve: (being) => `/beings/${being.name}`,
        },
    },
}))

export default makeSource({
    contentDirPath: 'data',
    documentTypes: [Location, Being],
})