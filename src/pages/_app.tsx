import "@/styles/globals.css";
import { CssBaseline } from "@mui/material";
import { NextPage } from "next";
import type { AppProps } from "next/app";
import { FC, ReactNode } from "react";
import { MainLayout } from "@/components/layout/MainLayout";
import MyThemeProvider from "@/providers/MyThemeProvider";
import { SessionProvider } from "next-auth/react";

type NextPageWithLayout = NextPage & {
  layout?: typeof MainLayout;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

const MyApp: FC<AppPropsWithLayout> = ({
  Component,
  pageProps: { session, ...pageProps },
}: AppPropsWithLayout) => {
  const Layout =
    Component.layout ||
    (({ children }: { children: ReactNode }) => <>{children}</>);
  return (
    <>
      <SessionProvider session={session}>
        <CssBaseline>
          <MyThemeProvider>
            <Layout>
              <Component {...pageProps} />
            </Layout>
          </MyThemeProvider>
        </CssBaseline>
      </SessionProvider>
    </>
  );
};

export default MyApp;
