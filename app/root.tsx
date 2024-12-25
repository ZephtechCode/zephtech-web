import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLoaderData,
} from "@remix-run/react";
import type { LinksFunction, LoaderFunctionArgs } from "@remix-run/node";
import { SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "~/components/app-sidebar"; // Import your sidebar component
import Footer from "~/components/footer";

import "./globals.css";
import { themeSessionResolver } from "./sessions.server";
import { Theme, ThemeProvider, useTheme } from "remix-themes";
import clsx from "clsx";
import Nav from "~/components/nav";

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

export default function App() {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <ThemeWrapper>
        <body>
          <Main>
            <SidebarProvider defaultOpen={false}>
              <div className="bg-neutral-950 flex flex-col flex-1 min-w-0">
                <Nav />
                
                
                <div className="flex-1 flex flex-col">
                  <Outlet />
                </div>
                <Footer />
              </div>
              <AppSidebar />
            </SidebarProvider>
          </Main>
        </body>
      </ThemeWrapper>
      <ScrollRestoration />
      <Scripts />
    </html>
  );
}
export function Main({ children }: any) {
  const theme = useTheme();
  return <main className={clsx(theme)}>{children}</main>;
}

export function ThemeWrapper({ children }: any) {
  const data = useLoaderData<typeof loader>();
  return (
    <ThemeProvider specifiedTheme={data.theme} themeAction="/action/set-theme">
      {children}
    </ThemeProvider>
  );
}
