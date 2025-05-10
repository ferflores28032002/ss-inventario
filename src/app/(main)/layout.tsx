import type { Metadata } from "next";

import { AppSidebar } from "@/components/ui/app-sidebar";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import { SiteHeader } from "@/components/ui/site-header";

import "../globals.css";

export const metadata: Metadata = {
  title: "Sistema de Inventario",
  description: "Sistema de Inventario",
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout(
  props: Readonly<RootLayoutProps>
): JSX.Element {
  const { children } = props;
  return (
    <SidebarProvider>
      <AppSidebar variant="inset" />
      <SidebarInset>
        <SiteHeader />
        <main>{children}</main>
      </SidebarInset>
    </SidebarProvider>
  );
}
