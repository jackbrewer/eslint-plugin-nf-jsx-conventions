module.exports = {
  rules: {
    "text-requires-as": require("./rules/text-requires-as.js"),
    "no-button-inside-link": require("./rules/no-button-inside-link.js"),
    "icon-requires-title": require("./rules/icon-requires-title.js"),
  },

  configs: {
    recommended: {
      plugins: ["nf-jsx-conventions"],
      rules: {
        "nf-jsx-conventions/text-requires-as": "warn",
        "nf-jsx-conventions/no-button-inside-link": "warn",
        "nf-jsx-conventions/icon-requires-title": "warn",
      },
    },
  },
};
