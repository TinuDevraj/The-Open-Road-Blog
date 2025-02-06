module.exports = {
    "env": {
      "browser": true,
      "es2021": true,
      "node": true,
      "jest": true
    },
    "extends": [
      "eslint:recommended",
      "plugin:@typescript-eslint/recommended",
      "plugin:react/recommended",
      "plugin:react-hooks/recommended"
    ],
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
      "ecmaVersion": "latest",
      "sourceType": "module",
      "ecmaFeatures": {
        "jsx": true
      },
      "project": "./tsconfig.json"  // Point to your TypeScript config
    },
    "plugins": [
      "react",
      "react-hooks",
      "@typescript-eslint"
    ],
    "settings": {
      "react": {
        "version": "detect"
      }
    },
    "rules": {
      // TypeScript specific rules
      "@typescript-eslint/explicit-function-return-type": "off",
      "@typescript-eslint/explicit-module-boundary-types": "off",
      "@typescript-eslint/no-explicit-any": "warn",
      "@typescript-eslint/no-unused-vars": ["warn", {
        "argsIgnorePattern": "^_",
        "varsIgnorePattern": "^_"
      }],
      "@typescript-eslint/no-non-null-assertion": "warn",
  
      // React specific rules
      "react/react-in-jsx-scope": "off", // Not needed in React 17+
      "react/prop-types": "off", // Not needed when using TypeScript
      "react-hooks/rules-of-hooks": "error",
      "react-hooks/exhaustive-deps": "warn",
  
      // Code Style
      "indent": "off", // Use TypeScript's indent rule instead
      "@typescript-eslint/indent": ["error", 2],
      "quotes": ["error", "single"],
      "semi": "off",
      "@typescript-eslint/semi": ["error", "always"],
      "no-multiple-empty-lines": ["error", { "max": 1 }],
      "no-trailing-spaces": "error",
  
      // Best Practices
      "no-console": ["warn", { "allow": ["warn", "error"] }],
      "no-var": "error",
      "prefer-const": "error",
      "no-duplicate-imports": "off", // Use TypeScript's rule instead
      "@typescript-eslint/no-duplicate-imports": "error",
  
      // Modern JavaScript/TypeScript
      "arrow-body-style": ["error", "as-needed"],
      "arrow-parens": ["error", "always"],
      "prefer-template": "error",
      "template-curly-spacing": ["error", "never"],
  
      // Import ordering
      "import/order": ["error", {
        "groups": ["builtin", "external", "internal"],
        "pathGroups": [
          {
            "pattern": "react",
            "group": "external",
            "position": "before"
          }
        ],
        "pathGroupsExcludedImportTypes": ["react"],
        "newlines-between": "always",
        "alphabetize": {
          "order": "asc",
          "caseInsensitive": true
        }
      }]
    }
  }
  