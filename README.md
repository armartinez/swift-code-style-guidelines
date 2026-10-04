# Swift Code Style Guidelines

This is the source for the Swift Code Style Guidelines website. This style
guide is based on the
[Google Swift Style Guide](https://google.github.io/swift/) with the rules
adapted to the style used in Apple's open-source Swift projects and Apple's
[API Design Guidelines](https://swift.org/documentation/api-design-guidelines/)
for naming. Its swift-format rules are those of Apple's
[container](https://github.com/apple/container) project.

This is not an official guide. It is not published or endorsed by Apple,
Google, or the Swift project.

## Publish on GitHub Pages

1. Create a repository on GitHub and push these files to its default branch.
2. In the repository, open **Settings → Pages**.
3. Under **Build and deployment**, set **Source** to **Deploy from a branch**,
   choose the default branch and the `/ (root)` folder, and click **Save**.

GitHub Pages builds the site with Jekyll, so there is no build step to run.
After the first build finishes, the guide is at
`https://<your-user-name>.github.io/<repository-name>/`.

## Editing the guide

- All of the style guide's text is in `index.md`, written in kramdown Markdown.
- Swift examples are fenced with `~~~ swift`. The line right after the closing
  `~~~` marks the example as `{:.good}` (green, ✅) or `{:.bad}` (red, ⛔️).
- The table of contents is generated from the headings.
- Styles are in `css/main.css`. The page layout is in `_layouts/` and
  `_includes/`.

## Preview locally (optional)

With Ruby installed:

```sh
bundle install
bundle exec jekyll serve
```

Then open <http://localhost:4000>.

## License

This style guide is based on the Google Swift Style Guide, which is licensed
under the Apache License, Version 2.0. It has been modified; the changes are
listed in the "Differences from the Google Swift Style Guide" section of
`index.md`. See `LICENSE.txt` for the license terms.
