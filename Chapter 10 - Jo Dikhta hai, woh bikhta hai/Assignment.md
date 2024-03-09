## Namaste React Course by Akshay Saini

# Chapter 10 - Jo Dikhta hai vo bikta hai

## Q: Explore all the ways of writing css.

A: There are differernt ways of ussing CSS in in our application.

1. Writing Vanilla CSS : By creating `.css` files and adding them to our `html` files.
2. By using css preprocessors like sass or scss.
3. By writing inline CSS : writing css inside the components itself.
4. Using Libraries like Bootstrap, Tailwind CSS, Material UI, Ant Design, Chakra UI, etc.

## Q: How do we configure tailwind?

A: Below is the configuration for setting up `Tailwind` in a `React` project with `Parcel`.

1. `Install Tailwind CSS` - Install tailwindcss and its peer dependencies via npm, and then run the init command to generate tailwind.config.js.

```
npm install -D tailwindcss postcss
npx tailwindcss init
```

2. `Configure PostCSS` - Create a .postcssrc file in your project root, and enable the tailwindcss plugin.

```
{
  "plugins": {
    "tailwindcss": {}
  }
}
```

3. `Configure your template paths` - Add the paths to all of your template files in your tailwind.config.js file.

```
content: [
    "./src/**/*.{html,js,ts,jsx,tsx}",
  ],
```

4. `Add the Tailwind directives to your CSS` - Create a ./src/index.css file and add the @tailwind directives for each of Tailwind’s layers.

```
@tailwind base;
@tailwind components;
@tailwind utilities;
```

## Q: In tailwind.config.js, what does all the keys mean (content, theme, extend, plugins)?

A: In the tailwind.config.js file, there are several keys you can use to customize and extend Tailwind CSS. Here's an overview of each key:

1. `content`: The content key allows you to define content-based styles, such as utility classes generated from your HTML or Markdown files. By default, Tailwind scans your project's HTML files to generate utility classes based on the content it finds. You can configure the content key to specify additional content sources or customize the generation process.

2. `theme`: The theme key is used to customize various aspects of Tailwind's default design system. It allows you to define custom colors, fonts, spacing, breakpoints, and more. By modifying the values under the theme key, you can tailor Tailwind's utility classes to match your project's design requirements.

3. `extend`: The extend key enables you to extend Tailwind's default utility classes with your own custom utility classes. You can use this key to add new utilities, override existing utilities, or define utility variants. This is particularly useful when you need to create project-specific styles that are not covered by Tailwind's default set of utilities.

4. `plugins`: The plugins key allows you to add third-party plugins or custom plugins to extend Tailwind's functionality. Plugins can provide additional utility classes, components, or transformations that enhance Tailwind's capabilities. For example, there are plugins available for adding dark mode support, typography enhancements, or component libraries integration.

## Q: Why do we have .postcssrc file?

A: The `.postcssrc` file is used to configure PostCSS, which is a tool for transforming CSS with JavaScript plugins. Tailwind CSS relies on PostCSS for processing and optimizing its CSS output.
