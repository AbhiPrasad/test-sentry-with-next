import { withSentry } from '@sentry/nextjs'
import * as Sentry from '@sentry/nextjs';

async function handler(req, res) {
  const hub = Sentry.getCurrentHub();
  console.log("hello hub", hub);
  res.status(200).json({ name: 'John Doe', hub: JSON.stringify(hub) })
}

export default withSentry(handler)
