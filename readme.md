### **Forge Blog** - powered by Hugo, Github, Netlify, Forestry.io, Mailgun, Algolia, and Zapier.
---

[![Netlify Status](https://api.netlify.com/api/v1/badges/53da425e-12e2-49ca-b883-4aaeb3f09a87/deploy-status)](https://app.netlify.com/sites/forge-blog/deploys) 

```
Minimial blog, with a small, modern, codebase. Currently in development.
```

**Dependencies:**

- Hugo
- Node
- Yarn
- Git LFS

```
Third party serivces ared used for forms, newsletter, and search.
```

**Usage:**
```
yarn install
yarn start
```

**Updating content:** 

It is possible to update content using the Forestry.io, using Netlify CMS, or Hugo CLI. Pushing to the master branch or editing through a CMS will deploy the site using Netlify. Forestery.io has better mobile support then Hugo CMS if that is a consideration.

Netlify CMS

```
forgethepath.com/admin
```

Hugo CLI

```
hugo new articles/my-first-post.md
git add articles/my-first-post.md
git commit -m "added a new post"
git push
```

Or integrate with a third party service such as forestry.io 

forestry.io

**Franklin Gothic is a lisenced font, it is included in this repository with the consent of FontSpring for the use of the author.
Use of the font by other persons requires the purchase of a lisence by the persons of interest.**

Please credit original author if code or theme is useful for a project of your own.
