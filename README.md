# eslint-plugin-nf-jsx-conventions

Tested against ESLint 8.

## What it does

## Installation

To use this plugin, you’ll need to have `eslint` and this plugin installed in your project.

```bash
npm install eslint-plugin-nf-jsx-conventions --save-dev
```

## Usage

### **Add the plugin to your ESLint configuration:**

To use the recommended error status, add the plugin’s recommended setup to your ESLint `extends`:

```javascript
// .eslintrc.js
module.exports = {
  extends: ["plugin:nf-jsx-conventions/recommended"],
};
```

To use errors instead of warnings, you can tweak rules manually:

```javascript
// .eslintrc.js
module.exports = {
  plugins: ["nf-jsx-conventions"],
  rules: {
    "nf-jsx-conventions/text-requires-as": "error",
    "nf-jsx-conventions/no-button-inside-link": "error",
    "nf-jsx-conventions/icon-requires-title": "error",
  },
};
```

## Testing the plugin

This plugin includes unit tests to verify its functionality. The tests use vitest, with eslint’s RuleTester for ESLint rule-specific testing.

```bash
npm install
npm run test
```
