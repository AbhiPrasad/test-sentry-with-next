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
