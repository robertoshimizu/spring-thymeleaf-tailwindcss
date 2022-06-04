# Spring-Thymeleaf with Tailwindcss

Exercises from the book [Taming-Thymeleaf](https://www.wimdeblauwe.com/books/taming-thymeleaf/) from Wim Deblauwe

## BoilerPlate to integrate `node` environment during development

[Tailwindcss](https://tailwindcss.com/) need to postprocess css, because the utility classes need to be converted in actual css (that the browser understands). Java environment does not have this capability, therefore we need to use a tool that make this for us. In this project we use `Gulp`.

[Gulp](https://gulpjs.com/) is a toolkit to automate & enhance your workflow. Leverage gulp and the flexibility of JavaScript to automate slow, repetitive workflows and compose them into efficient build pipelines.
These are tasks like bundling and minifying scripts and style sheets, compiling `less` or `sass` to css styles, deploying files to servers, image compressing, etc. So, in simple terms Gulp is a task runner and is built upon Node.js.

So during development, as we are inserting tailwindcss utility-classes in the code, gulp watches for changes and generate the postcss and update them at the java src/resources/template directories. IN the `build`, it also minify the CSS files to be at its minimum size.

## Allow for minimal javascript at client-side
[TailwindUI](https://tailwindui.com/) has some design components that uses javascript to enable client-side interactivity, which increases customer experience.
For that, we will need some minimal Javascript in our application to make the popup menu work. There are a lot of Javascript libraries, but we need something that is light and does not require a full framework
setup.
Tailwind UI recommends [AlpineJS](https://alpinejs.dev/) for server-rendered website like the one we are building, so we will
go with that. Alpine is a rugged, minimal tool for composing behavior directly in your markup. Think of it like jQuery for the modern web. Plop in a script tag and get going.