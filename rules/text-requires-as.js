module.exports = {
  meta: {
    type: "problem",
    docs: {
      description: "Require `as` attribute for the `Text` component",
      category: "Best Practices",
      recommended: true,
    },
    messages: {
      missingAs:
        "The `Text` component should use an `as` attribute to specify the intended element.",
    },
    schema: [], // no options
  },
  create(context) {
    return {
      JSXOpeningElement(node) {
        const isTextComponent = node.name.name === "Text";
        if (!isTextComponent) return;

        const hasAsAttribute = node.attributes.some(
          (attr) => attr.type === "JSXAttribute" && attr.name.name === "as"
        );

        if (!hasAsAttribute) {
          context.report({
            node,
            messageId: "missingAs",
          });
        }
      },
    };
  },
};
