// lib/rules/no-button-inside-link.js
module.exports = {
  meta: {
    type: "problem",
    docs: {
      description: "Disallow nesting <Button> inside <Link>",
      category: "Best Practices",
      recommended: true,
    },
    messages: {
      noButtonInsideLink:
        "<Button> should not be nested inside a <Link>. Add the `to` attribute directly to the <Button>",
    },
    schema: [], // no options
  },
  create(context) {
    const buttonName = "Button";
    const linkName = "Link";

    return {
      JSXElement(node) {
        const isLink = node.openingElement.name.name === linkName;

        if (!isLink) return;

        node.children.forEach((child) => {
          if (
            child.type === "JSXElement" &&
            child.openingElement.name.name === buttonName
          ) {
            context.report({
              node: child,
              messageId: "noButtonInsideLink",
            });
          }
        });
      },
    };
  },
};
