# Running Your Portfolio Locally

## Quick Start

### 1. Install Dependencies (First Time Only)

```bash
npm install
```

### 2. Run Development Server

```bash
npm run dev
```

This will:
- Start the Vite development server
- Open your browser automatically (if configured)
- Make your site available at `http://localhost:3000`
- Enable hot-reload (changes update automatically)

**To access from other devices on your network:**
- The server will show your local IP address (e.g., `http://192.168.1.100:3000`)
- Other devices on the same network can access it using that IP

---

## Production Build (For Hosting)

If you want to serve the optimized production version:

### 1. Build the Project

```bash
npm run build
```

This creates an optimized production build in the `build` directory.

### 2. Serve the Production Build

You have several options:

#### Option A: Using Vite Preview (Recommended)

Add this to your `package.json` scripts:
```json
"preview": "vite preview"
```

Then run:
```bash
npm run preview
```

This serves the production build at `http://localhost:4173`

#### Option B: Using a Simple HTTP Server

Install a static file server:
```bash
npm install -g serve
```

Then serve the build directory:
```bash
serve -s build -l 3000
```

#### Option C: Using Python (if installed)

```bash
cd build
python3 -m http.server 3000
```

#### Option D: Using Node.js http-server

```bash
npm install -g http-server
cd build
http-server -p 3000
```

---

## Making It Accessible on Your Network

To allow other devices on your local network to access your site:

### Development Mode:
Vite automatically makes the dev server accessible on your network. Look for a message like:
```
Local:   http://localhost:3000
Network: http://192.168.1.100:3000
```

### Production Mode:
When using `serve` or `http-server`, use the `--host` flag:

```bash
serve -s build -l 3000 --host
# or
http-server -p 3000 -a 0.0.0.0
```

---

## Making It Accessible from the Internet

If you want to make it accessible from outside your local network, you'll need to:

1. **Port Forwarding**: Configure your router to forward port 3000 (or your chosen port) to your machine
2. **Dynamic DNS**: Use a service like No-IP or DuckDNS to get a domain name
3. **Firewall**: Ensure your firewall allows incoming connections on the port

**Note:** For production use, consider using a proper hosting service for better security and reliability.

---

## Troubleshooting

- **Port already in use?** Change the port in `vite.config.ts` or use a different port with your server
- **Can't access from other devices?** Check your firewall settings and ensure devices are on the same network
- **Build errors?** Make sure all dependencies are installed: `npm install`

