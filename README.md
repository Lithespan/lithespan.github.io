# Lithespan website

The public website for [lithespan.com](https://lithespan.com), built with Hugo and deployed through GitHub Pages.

## Local development

Hugo Extended 0.164.0 or newer is recommended.

```sh
hugo server
```

The production build is:

```sh
hugo --gc --minify --panicOnWarning
```

## Performance budget

The site uses system fonts, no client framework, and one small local script for the persistent light, dark, and automatic theme preference. The generated home page should stay within these uncompressed limits:

- HTML: 35 KB
- CSS: 25 KB
- JavaScript: 2 KB
- External runtime requests: 0

## Deployment

Pushes to `main` build and deploy the site through the workflow in `.github/workflows/deploy.yml`. GitHub Pages should use **GitHub Actions** as its deployment source. The apex domain is declared in `static/CNAME`.

## License

The site source is available under the MIT License. See [LICENSE](LICENSE).
