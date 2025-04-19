---
sidebar_position: 1
---

# i18n

Currently, Forensics uses a simple JSON-based translation system where all translations are stored in a single file. This is a temporary solution that will be replaced with a proper i18n package in the future.

## Current Implementation

Translations are stored in a JSON file with the following structure:

```json
{
  "en": {
    "common": {
      // Common translations
    }
  }
}
```

## Usage

```tsx
import { t } from '@/i18n/i18n';

export default function MyComponent() {
  return <h1>{t('common.helloWorld')}</h1>;
}
```

## Future Plans

The current JSON-based system will be replaced with a more robust i18n solution.
