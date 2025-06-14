---
sidebar_position: 1
---

# Contexts

## Settings Context

The `SettingsContext` provides a centralized way to manage application settings that affect how the code analysis is performed.

### Available Settings

#### `showSubPackages`

- **Type**: `boolean`
- **Default**: `true`
- **Environment Variable**: `NEXT_PUBLIC_SETTINGS_SHOW_SUBPACKAGES`
- **Description**: Controls whether sub-packages should be included in the analysis.

#### `showVendorPackages`

- **Type**: `boolean`
- **Default**: `false`
- **Environment Variable**: `NEXT_PUBLIC_SETTINGS_SHOW_VENDORPACKAGES`
- **Description**: Controls whether vendor packages should be included in the analysis.

### Usage

```typescript
import { useSettings } from '@/contexts/SettingsContext';

function MyComponent() {
  const { showSubPackages, showVendorPackages } = useSettings();

  return (
    <div>
      <p>Show Sub Packages: {showSubPackages ? 'Yes' : 'No'}</p>
      <p>Show Vendor Packages: {showVendorPackages ? 'Yes' : 'No'}</p>
    </div>
  );
}
```

These settings can be configured through [environment variables](../../environment.md).
