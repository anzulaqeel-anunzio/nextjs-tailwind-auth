# Next.js + Tailwind CSS + NextAuth.js Starter

A robust, production-ready boilerplate for building web applications with Next.js, Tailwind CSS, and authentication.

## Features

-   **Next.js 13+**: Latest React framework features.
-   **Tailwind CSS**: Utility-first CSS framework for rapid UI development.
-   **NextAuth.js**: Complete authentication solution (configured for GitHub/Google providers).
-   **Pre-configured**: Includes ESLint, Custom Fonts, and responsive layouts.

## Getting Started

1.  **Clone the repository**:
    ```bash
    git clone https://github.com/anunzio-international/next-tailwind-auth-starter.git
    cd next-tailwind-auth-starter
    ```

2.  **Install dependencies**:
    ```bash
    npm install
    ```

3.  **Configure Environment**:
    Copy `.env.example` to `.env.local` and add your API keys.
    ```bash
    cp .env.example .env.local
    ```

4.  **Run Development Server**:
    ```bash
    npm run dev
    ```

    Open [http://localhost:3000](http://localhost:3000) to see the app.

## Project Structure

```
├── src/
│   ├── pages/          # Pages and API routes
│   │   ├── api/        # Server-side API endpoints
│   │   │   └── auth/   # NextAuth configuration
│   │   ├── _app.js     # App wrapper
│   │   └── index.js    # Home page
│   └── styles/         # Global styles
├── public/             # Static assets
└── next.config.js      # Next.js configuration
```

## Customization

-   **Authentication**: Modify `src/pages/api/auth/[...nextauth].js` to add more providers.
-   **Styling**: Edit `tailwind.config.js` to customize your theme.

## Contact

Developed for Anunzio International by Anzul Aqeel.
Contact +971545822608 or +971585515742.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.


---
### 🔗 Part of the "Ultimate Utility Toolkit"
This tool is part of the **[Anunzio International Utility Toolkit](https://github.com/anzulaqeel-anunzio/ultimate-utility-toolkit)**.
Check out the full collection of **180+ developer tools, scripts, and templates** in the master repository.

Developed for Anunzio International by Anzul Aqeel.
