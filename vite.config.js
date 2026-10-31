import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');

  return {
    plugins: [
      react(),
      {
        name: 'enquiries-dev-middleware',
        configureServer(server) {
          server.middlewares.use(async (req, res, next) => {
            if (req.url === '/api/enquiries' && req.method === 'POST') {
              let body = '';
              req.on('data', chunk => { body += chunk; });
              req.on('end', async () => {
                res.setHeader('Content-Type', 'application/json');
                try {
                  const data = JSON.parse(body || '{}');
                  const appsScriptUrl = env.APPS_SCRIPT_URL || env.VITE_CONTACT_API_ENDPOINT;

                  if (appsScriptUrl) {
                    const googleRes = await fetch(appsScriptUrl, {
                      method: 'POST',
                      headers: { 'Content-Type': 'application/json' },
                      body: JSON.stringify(data),
                      redirect: 'follow'
                    });
                    const json = await googleRes.json().catch(async () => {
                      const text = await googleRes.text().catch(() => '');
                      return { status: 'success', raw: text };
                    });
                    res.statusCode = googleRes.ok ? 200 : 502;
                    res.end(JSON.stringify(json));
                  } else {
                    res.statusCode = 503;
                    res.end(JSON.stringify({
                      status: 'error',
                      configured: false,
                      message: 'APPS_SCRIPT_URL is not set in local .env'
                    }));
                  }
                } catch (err) {
                  res.statusCode = 500;
                  res.end(JSON.stringify({ status: 'error', message: err.message }));
                }
              });
              return;
            }
            next();
          });
        }
      }
    ],
    server: {
      port: 5173,
      host: true
    }
  };
});
