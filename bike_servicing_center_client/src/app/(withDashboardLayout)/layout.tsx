import { AppSidebar } from "@/components/app-sidebar"
import { Button } from "@/components/ui/button";
import {
    SidebarInset,
    SidebarProvider,
    SidebarTrigger,
} from "@/components/ui/sidebar"
import { Home, LogOut } from "lucide-react";
import Link from "next/link";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <SidebarProvider>
            <AppSidebar />
            <SidebarInset>
                <header className="flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-12">
                    <div className="flex items-center justify-between w-full gap-2 px-4">
                        <div className="flex items-center gap-2">
                            <SidebarTrigger className="-ml-1" />
                            <h2 className="text-xl font-semibold hidden md:block">AutoRapid</h2>
                        </div>
                        <div className="flex items-center gap-4">
                            <Link href="/"><Button variant="outline" className="rounded cursor-pointer"><Home />Home</Button></Link>
                            <Button className="rounded cursor-pointer"><LogOut />LogOut</Button>
                        </div>
                    </div>
                </header>
                {
                    children
                }
            </SidebarInset>
        </SidebarProvider>
    )
};

export default DashboardLayout;