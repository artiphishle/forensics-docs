---
sidebar_position: 1
---

# Hooks

## useCytoscape

Adds a CytoscapeJs Graph

### Usage

```typescript
const {cyRef, cyInstance} = useCytoscape(
  elements: ElementsDefinition | null,
  currentPackage: string,
  setCurrentPackage: (currentPackage: string) => void
);
```
