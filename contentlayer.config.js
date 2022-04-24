import { defineDocumentType, makeSource } from 'contentlayer/source-files'



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
        birthPlace: {
            type: 'reference',
            of: Location,
            embedDocument: true
        }
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