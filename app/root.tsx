import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLoaderData,
} from "@remix-run/react";
import type { LinksFunction, LoaderFunctionArgs } from "@remix-run/node";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "./components/app-sidebar"; // Import your sidebar component

import "./globals.css";
import { themeSessionResolver } from "./sessions.server";
import { Theme, ThemeProvider, useTheme } from "remix-themes";
import clsx from "clsx";

export const links: LinksFunction = () => [
  { rel: "preconnect", href: "https://fonts.googleapis.com" },
  {
    rel: "preconnect",
    href: "https://fonts.gstatic.com",
    crossOrigin: "anonymous",
  },
  {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap",
  },
];

export async function loader({ request }: LoaderFunctionArgs) {
  const { getTheme } = await themeSessionResolver(request);
  return {
    theme: getTheme() || ("dark" as Theme),
  };
}

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <ThemeWrapper>
      <Document>{children}</Document>
    </ThemeWrapper>
  );
}
export function Document({ children }: any) {
  const theme = useTheme();
  return (
    <html lang="en" className={clsx(theme)}>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>

      <body>
        <SidebarProvider defaultOpen={false}>
          <main>{children}</main>
          <SidebarTrigger />
          <AppSidebar />

          <ScrollRestoration />
          <Scripts />
        </SidebarProvider>
      </body>
    </html>
  );
}
export function ThemeWrapper({ children }: any) {
  const data = useLoaderData<typeof loader>();
  return (
    <ThemeProvider specifiedTheme={data.theme} themeAction="/action/set-theme">
      {children}
    </ThemeProvider>
  );
}

export default function App() {
  return <Outlet />;
}
