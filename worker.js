import { onRequestPost, onRequestOptions } from './functions/api/enquiries.js';

export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);

    // Handle same-origin enquiries endpoint
    if (url.pathname === '/api/enquiries') {
      if (request.method === 'OPTIONS') {
        return onRequestOptions();
      }
      if (request.method === 'POST') {
        return onRequestPost({
          request,
          env,
          waitUntil: (promise) => {
            if (ctx && typeof ctx.waitUntil === 'function') {
              ctx.waitUntil(promise);
            }
          },
        });
      }
      return new Response(
        JSON.stringify({ status: 'error', message: 'Method Not Allowed' }),
        { status: 405, headers: { 'Content-Type': 'application/json' } }
      );
    }

    // Pass all other traffic to static assets (HTML, CSS, JS, images, fonts)
    return env.ASSETS.fetch(request);
  },
};
