---
sidebar_position: 2
---

# Cyclic Dependencies

Cyclic dependencies occur when two or more modules depend on each other directly or indirectly, creating a circular reference. This can lead to several issues:

- Increased coupling between modules
- Harder to maintain and test code
- Potential initialization problems
- Reduced code reusability

## Example

```typescript
// Module A
import { B } from './B';
export class A {
  constructor(private b: B) {}
}

// Module B
import { A } from './A';
export class B {
  constructor(private a: A) {}
}
```

## How Forensics Detects Cyclic Dependencies

Forensics analyzes your codebase to identify cyclic dependencies by:

1. Building a dependency graph of all modules
2. Detecting cycles in the graph
3. Reporting the specific modules involved in each cycle

## Resolution Strategies

To resolve cyclic dependencies, consider:

1. **Dependency Inversion**: Use interfaces or abstract classes
2. **Event-based Communication**: Implement an event system
3. **Mediator Pattern**: Introduce a mediator to handle communication
4. **Refactoring**: Split or merge modules to break the cycle
