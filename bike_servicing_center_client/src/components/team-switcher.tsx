"use client"

import * as React from "react"
import { Bike } from "lucide-react"

import {
  DropdownMenu,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"
import Image from "next/image"

export function TeamSwitcher({
  team,
}: {
  team: {
    name: string
    logo: string
    plan: string
  }
}) {

  return (
    <SidebarMenu>
      <SidebarMenuItem>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <SidebarMenuButton
              size="lg"
              className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
            >
              <div className="text-sidebar-primary-foreground flex aspect-square size-10 items-center justify-center rounded-lg">
                {team.logo ? (
                  <Image src={team.logo} alt={team.name} width={100} height={100} className="size-10" />
                ) : (
                  <Bike className="h-6 w-6" />
                )}

              </div>
              <div className="grid flex-1 text-left text-sm leading-tight">
                <span className="truncate font-medium">{team.name}</span>
                <span className="truncate text-xs">{team.plan}</span>
              </div>
            </SidebarMenuButton>
          </DropdownMenuTrigger>
        </DropdownMenu>
      </SidebarMenuItem>
    </SidebarMenu>
  )
}
