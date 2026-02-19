# Portfolio - Claude Code Configuration

## Figma Integration (MCP)

This project is configured to use the Figma MCP server, allowing Claude Code to read Figma designs and generate pixel-perfect code.

### Setup

1. **Authenticate with Figma**

   In Claude Code, run:
   ```
   /mcp
   ```
   Select **figma** → **Authenticate** → follow the browser prompt to allow access.

2. **Verify the connection**

   Run `/mcp` again — you should see `figma` listed as connected.

### Usage

Once authenticated, you can paste any Figma frame or component URL into Claude Code and ask it to:

- Generate React/Tailwind components from Figma frames
- Sync design tokens (colors, typography, spacing)
- Match existing components to updated designs

**Example prompts:**

```
Using this Figma frame <URL>, implement the Hero section as a React component with Tailwind CSS.
```

```
Update the Skills page to match the design in <Figma URL>.
```

### MCP Server Details

| Setting | Value |
|---------|-------|
| Server | Figma Remote MCP |
| URL | `https://mcp.figma.com/mcp` |
| Transport | HTTP |
| Config file | `.mcp.json` |

For more information, see the [Figma MCP documentation](https://developers.figma.com/docs/figma-mcp-server/remote-server-installation/).

## Development

```bash
npm run dev    # Start development server (http://localhost:3000)
npm run build  # Production build
npm run lint   # Run ESLint
```
