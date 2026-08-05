# Emmanuel Christian School website

The site is written as Markdown files and built into plain HTML by Eleventy.
Every page shares one header, one footer and one stylesheet, so a change made
once appears everywhere.

## Editing a page

1. Go to the repository on GitHub and open the `src` folder.
2. Click the file you want to change — `termdates.md`, `fees.md`, and so on.
3. Click the pencil icon.
4. Make the change.
5. Scroll down, write a short note saying what you changed, and click
   **Commit changes**.

The site rebuilds and publishes itself within about a minute. Nothing needs
installing and it works from a phone.

## What the top of each file means

Everything between the two `---` lines is settings, not page text:

| Setting | What it does |
|---|---|
| `title` | Shows in the browser tab and in Google results |
| `description` | The sentence Google shows under the title |
| `heading` | The large heading on the navy band |
| `standfirst` | The sentence under the heading |
| `crumb` | The small trail of links above the heading |
| `contents` | The "On this page" list down the left |
| `draft` | The amber warning strip. **Delete this line to remove the strip** |

If you add a new `## Heading {#something}`, add a matching entry to `contents`
so it appears in the left-hand list.

## Writing the page itself

Below the settings it is ordinary text.

- `## Something {#anchor}` is a section heading
- `### Something` is a smaller heading
- A blank line starts a new paragraph
- `- ` at the start of a line makes a bullet
- `[words](/curriculum/)` makes a link
- `*words*` is italic, `**words**` is bold

Tables and the boxed panels are written in HTML. Copy an existing one and
change the words inside it rather than writing one from scratch.

## Things that live in one place

| To change | Edit |
|---|---|
| Telephone, email, address, charity number | `src/_data/site.json` |
| The main menu | `src/_data/nav.json` |
| The footer link columns | `src/_data/footer.json` |
| Colours, fonts, spacing | `src/assets/css/site.css` |
| The home page | `src/index.njk` |

## Turning off the amber draft strips

When the site is ready to go public, set `showDraftBanner` to `false` in
`src/_data/site.json`. That hides every strip at once. Removing the `draft:`
line from an individual file hides just that one.

## Adding a policy PDF

1. Put the PDF in `src/assets/policies/`
2. Link to it as `/assets/policies/filename.pdf`

## Running it on your own computer (optional)

You do not need to. But if you want a live preview while editing:

```
npm install
npm start
```

Then open http://localhost:8080

## If a change breaks the build

The published site does not change. It keeps showing the last version that
built successfully, and GitHub emails you to say the build failed. Undo the
edit and it recovers.
