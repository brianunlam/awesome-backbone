---
to: <%= name %>/tsconfig.json
---
{
  "extends": "../../tsconfig.json",
  "compilerOptions": {
      "outDir": "lib"
  },
  "include": [
    "./src"
  ],
  "exclude": ["node_modules", "lib"]
}




