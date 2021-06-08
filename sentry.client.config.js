// This file configures the intialization of Sentry on the browser.
// The config you add here will be used whenever a page is visited.
// https://docs.sentry.io/platforms/javascript/guides/nextjs/

import * as Sentry from '@sentry/nextjs'

const SENTRY_DSN = "https://363cb47fc0b74130a94f14aaaf400041@o19635.ingest.sentry.io/5338414";

Sentry.init({
  debug: true,
  dsn: SENTRY_DSN,
  tracesSampleRate: 1,
  // Note: if you want to override the automatic release value, do not set a
  // `release` value here - use the environment variable `SENTRY_RELEASE`, so
  // that it will also get attached to your source maps
})
