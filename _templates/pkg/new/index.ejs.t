---
to: <%= name %>/src/index.ts
---
export * from './<%= locals.isClass ? h.capitalize(name) : name %>';

