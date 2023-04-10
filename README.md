This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Notes

### Routing

Next.js uses file based routing

`app/page` or `app/about/page` - Page is the name for root component that will load when visiting a route e.g app/page is the Homepage (/), `app/about/page` is when the user visits /about.

Nested routing is handling the same way e.g `app/about/team/page` would map to /about/team

### Layouts

Next.js layouts apply across a set of routes, e.g the root app/layout applies to every page of your app. You can also have layouts peer route e.g about/layout.tsx would apply to all about pages / routes (aka about/team).

Metadata - Meta can be exported from any route by setting `export const metadata = ...`, this means each route can have their own page title.

### React Server components

All components in Next.js 13 are server components by default, you have to opt-into client components.
