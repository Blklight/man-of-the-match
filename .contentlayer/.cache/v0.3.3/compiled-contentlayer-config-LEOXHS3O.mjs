// contentlayer.config.ts
import {
  defineDocumentType,
  defineNestedType,
  makeSource
} from "contentlayer/source-files";
var championships = defineNestedType(() => ({
  name: "ChampionQuote",
  fields: {
    period: {
      type: "string",
      required: true
    },
    quote: {
      type: "string",
      required: true
    }
  }
}));
var Champions = defineDocumentType(() => ({
  name: "Champions",
  filePathPattern: `champions/**/*.(md|mdx)`,
  contentType: "mdx",
  fields: {
    name: {
      type: "string",
      description: "The name of the champion",
      required: true
    },
    avatar: {
      type: "string",
      required: false
    },
    championships: {
      type: "list",
      of: championships,
      required: true
    }
  }
}));
var contentlayer_config_default = makeSource({
  contentDirPath: "data",
  documentTypes: [Champions]
});
export {
  Champions,
  championships,
  contentlayer_config_default as default
};
//# sourceMappingURL=compiled-contentlayer-config-LEOXHS3O.mjs.map
