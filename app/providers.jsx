import React from "react";
import { ThemeProvider } from "@/components/ThemeProvider";
import { CookiesProvider } from "next-client-cookies/server";
import { auth } from "@/auth";
import CustomSessionProvider from "@/providers/SessionProvider";
import { SessionProvider } from "next-auth/react";
import SwrProvider from "@/providers/SWRProvider";
import SocketProvider from "@/providers/SocketProvider";
const Providers = async ({ children }) => {
  const session = await auth();
  return (
    <SessionProvider session={session}>
      <CustomSessionProvider session={session}>
        <SocketProvider>
          <SwrProvider>
            <CookiesProvider>
              <ThemeProvider
                defaultTheme="system"
                enableSystem
                disableTransitionOnChange
                enableColorScheme={false}
              >
                {children}
              </ThemeProvider>
            </CookiesProvider>
          </SwrProvider>
        </SocketProvider>
      </CustomSessionProvider>
    </SessionProvider>
  );
};

export default Providers;
