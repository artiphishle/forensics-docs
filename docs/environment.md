---
sidebar_position: 2
---

# Environment Variables

Forensics uses environment variables to configure various aspects of the application. These variables can be set in a `.env` file in the root of your project.

## Required Variables

### `NEXT_PUBLIC_PROJECT_PATH`

- **Type**: `string`
- **Required**: Yes
- **Description**: The absolute path to the project you want to analyze.
- **Example**: `/Users/username/projects/my-project`

## Optional Variables

### `NEXT_PUBLIC_SETTINGS_SHOW_SUBPACKAGES`

- **Type**: `boolean`
- **Default**: `true`
- **Description**: Controls whether sub-packages should be included in the analysis.
- **Example**: `true`

### `NEXT_PUBLIC_SETTINGS_SHOW_VENDORPACKAGES`

- **Type**: `boolean`
- **Default**: `false`
- **Description**: Controls whether vendor packages should be included in the analysis.
- **Example**: `false`

## Example `.env` File

```env
NEXT_PUBLIC_PROJECT_PATH=/Users/username/projects/my-project
NEXT_PUBLIC_SETTINGS_SHOW_SUBPACKAGES=true
NEXT_PUBLIC_SETTINGS_SHOW_VENDORPACKAGES=false
```

## Notes

- All environment variables must be prefixed with `NEXT_PUBLIC_` to be accessible in the browser
- Changes to environment variables require a server restart to take effect
- Boolean values should be specified as `true` or `false` (case-sensitive)
