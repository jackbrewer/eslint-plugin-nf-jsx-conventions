module.exports = {
  meta: {
    type: "problem",
    docs: {
      description: "Require `title` attribute on all icon components",
      category: "Best Practices",
      recommended: true,
    },
    messages: {
      missingTitle:
        'Icon component "{{ name }}" must have a `title` attribute.',
    },
    schema: [], // no options
  },
  create(context) {
    const importedIcons = new Set();

    return {
      ImportDeclaration(node) {
        if (node.source.value.startsWith("@styled-icons/")) {
          node.specifiers.forEach((specifier) => {
            if (specifier.type === "ImportSpecifier") {
              importedIcons.add(specifier.local.name);
            }
          });
        }
      },
      JSXOpeningElement(node) {
        const componentName = node.name.name;

        // Skip if it's not one of the imported icons
        if (!importedIcons.has(componentName)) return;

        const hasTitleAttribute = node.attributes.some(
          (attr) => attr.type === "JSXAttribute" && attr.name.name === "title"
        );

        if (!hasTitleAttribute) {
          context.report({
            node,
            messageId: "missingTitle",
            data: { name: componentName },
          });
        }
      },
    };
  },
};
