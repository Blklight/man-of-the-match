import {
  defineDocumentType,
  defineNestedType,
  makeSource,
} from "contentlayer/source-files";

export const championships = defineNestedType(() => ({
  name: "ChampionQuote",
  fields: {
    period: {
      type: "string",
      required: true,
    },
    quote: {
      type: "string",
      required: true,
    },
  },
}));

export const Champions = defineDocumentType(() => ({
  name: "Champions",
  filePathPattern: `champions/**/*.(md|mdx)`,
  contentType: "mdx",
  fields: {
    name: {
      type: "string",
      description: "The name of the champion",
      required: true,
    },
    avatar: {
      type: "string",
      required: false,
    },
    championships: {
      type: "list",
      of: championships,
      required: true,
    },
  },
}));

export default makeSource({
  contentDirPath: "data",
  documentTypes: [Champions],
});
