import { defineDocumentType, makeSource, defineNestedType } from 'contentlayer/source-files'


export const LocationRef = defineNestedType(() => ({
    name: 'LocationRef',
    fields: {
        location: {
            type: 'reference',
            of: Location,
            embedDocument: true
        },
    }
}));

export const Location = defineDocumentType(() => ({
    name: 'Location',
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