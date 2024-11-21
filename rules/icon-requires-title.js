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
        'Icon component "{{ name }}" must have a `title` attribute if used in isolation. Use `title={undefined}` to intentionally omit the title',
    },
    schema: [], // no options
  },
  create(context) {
    const importedIcons = new Set();
    const internalIconComponent = "Icon"; // Internal Icon component to check

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

        // Check if it's an imported StyledIcon or the internal Icon component
        if (
          !importedIcons.has(componentName) &&
          componentName !== internalIconComponent
        ) {
          return;
        }

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
