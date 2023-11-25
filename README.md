# @bitwhys/tailwindcss-plugin

A plugin that provides utilities for use in personal projects.

> **Warning**
> Currently only the Bitwhys design language is present.

## Installation

Install the plugin from npm:

```sh
npm install -D @bitwhys/tailwindcss-plugin
```

Then add the plugin to your `tailwind.config.js` file:

```js
// tailwind.config.js
module.exports = {
  theme: {
    // ...
  },
  plugins: [
    require('@bitwhys/tailwindcss-plugin')({}),
    // ...
  ],
}
```

## Usage
> TODO

## Configuration

You can configure which values from @radix-ui/colors the plugin adds to you `tailwind.config.js`:

| option  | Default | Description                                  |
|---------|---------|----------------------------------------------|
| prefix  |         | Useful if you use this as part of library    |
| scaling | 1       | Controls the scaling for border radius scale |
| neutral | `olive` | The grayscale palette                        |
| accent  | `lime`  | The primary color palette                    |
| radius  | `large` | Controls how large the border radius is      |
