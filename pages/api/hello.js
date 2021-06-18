import { withSentry } from "@sentry/nextjs";
import * as Sentry from "@sentry/nextjs";

async function handler(req, res) {
  const hub = Sentry.getCurrentHub();
  console.log("hello hub", hub);
  res.status(200).json({ name: "John Doe", hub: JSON.stringify(hub) });
}

export default withSentry(handler);

// const lol = [
//   "/var/task/.next/BUILD_ID",
//   "/var/task/.next/build-manifest.json",
//   "/var/task/.next/prerender-manifest.json",
//   "/var/task/.next/react-loadable-manifest.json",
//   "/var/task/.next/routes-manifest.json",
//   "/var/task/.next/server/chunks/159.js",
//   "/var/task/.next/server/chunks/159.js.map",
//   "/var/task/.next/server/chunks/sentry/initServerSDK.js",
//   "/var/task/.next/server/chunks/sentry/initServerSDK.js.map",
//   "/var/task/.next/server/font-manifest.json",
//   "/var/task/.next/server/pages/404.html",
//   "/var/task/.next/server/pages/_app.js",
//   "/var/task/.next/server/pages/_document.js",
//   "/var/task/.next/server/pages/_error.js",
//   "/var/task/.next/server/pages/api/hello.js",
//   "/var/task/.next/server/pages/api/test1.js",
//   "/var/task/.next/server/pages/api/test2.js",
//   "/var/task/.next/server/pages/api/test3.js",
//   "/var/task/.next/server/pages/api/test4.js",
//   "/var/task/.next/server/pages-manifest.json",
//   "/var/task/.next/server/webpack-runtime.js",
// ];

/*
2021-06-09T18:18:43.071Z	c117107c-fe3a-4ced-8d50-fc40b3f0013c	WARN	/var/task/.env.local
2021-06-09T18:18:43.072Z	c117107c-fe3a-4ced-8d50-fc40b3f0013c	WARN	/var/task/.next/server/font-manifest.json
2021-06-09T18:18:43.072Z	c117107c-fe3a-4ced-8d50-fc40b3f0013c	WARN	/var/task/.next/server/ssr-module-cache.js
2021-06-09T18:18:43.072Z	c117107c-fe3a-4ced-8d50-fc40b3f0013c	WARN	/var/task/.next/server/pages-manifest.json
2021-06-09T18:18:43.072Z	c117107c-fe3a-4ced-8d50-fc40b3f0013c	WARN	/var/task/.next/server/pages/404.html
2021-06-09T18:18:43.073Z	c117107c-fe3a-4ced-8d50-fc40b3f0013c	WARN	/var/task/.next/server/pages/_app.js
2021-06-09T18:18:43.073Z	c117107c-fe3a-4ced-8d50-fc40b3f0013c	WARN	/var/task/.next/server/pages/_document.js
2021-06-09T18:18:43.073Z	c117107c-fe3a-4ced-8d50-fc40b3f0013c	WARN	/var/task/.next/server/pages/_error.js
2021-06-09T18:18:43.073Z	c117107c-fe3a-4ced-8d50-fc40b3f0013c	WARN	/var/task/.next/server/pages/api/test4.js
2021-06-09T18:18:43.073Z	c117107c-fe3a-4ced-8d50-fc40b3f0013c	WARN	/var/task/.next/server/pages/api/hello.js
2021-06-09T18:18:43.073Z	c117107c-fe3a-4ced-8d50-fc40b3f0013c	WARN	/var/task/.next/server/pages/api/test1.js
2021-06-09T18:18:43.073Z	c117107c-fe3a-4ced-8d50-fc40b3f0013c	WARN	/var/task/.next/server/pages/api/test2.js
2021-06-09T18:18:43.074Z	c117107c-fe3a-4ced-8d50-fc40b3f0013c	WARN	/var/task/.next/server/pages/api/test3.js
2021-06-09T18:18:43.074Z	c117107c-fe3a-4ced-8d50-fc40b3f0013c	WARN	/var/task/.next/routes-manifest.json
2021-06-09T18:18:43.074Z	c117107c-fe3a-4ced-8d50-fc40b3f0013c	WARN	/var/task/.next/BUILD_ID
2021-06-09T18:18:43.074Z	c117107c-fe3a-4ced-8d50-fc40b3f0013c	WARN	/var/task/.next/build-manifest.json
2021-06-09T18:18:43.074Z	c117107c-fe3a-4ced-8d50-fc40b3f0013c	WARN	/var/task/.next/react-loadable-manifest.json
2021-06-09T18:18:43.074Z	c117107c-fe3a-4ced-8d50-fc40b3f0013c	WARN	/var/task/.next/prerender-manifest.json
2021-06-09T18:18:43.075Z	c117107c-fe3a-4ced-8d50-fc40b3f0013c	WARN	/var/task/___vc_bridge.js
2021-06-09T18:18:43.075Z	c117107c-fe3a-4ced-8d50-fc40b3f0013c	WARN	/var/task/___next_launcher.js
2021-06-09T18:18:43.075Z	c117107c-fe3a-4ced-8d50-fc40b3f0013c	WARN	/var/task/package.json
*/