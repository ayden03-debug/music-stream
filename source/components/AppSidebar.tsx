
import {
  Home,
  Search,
  Library,
  Heart,
  PlusCircle,
  Mic2,
  Radio,
  Music
} from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarHeader,
  SidebarFooter,
} from "@/components/ui/sidebar";

const mainNavItems = [
  {
    title: "Home",
    url: "#",
    icon: Home,
  },
  {
    title: "Search",
    url: "#",
    icon: Search,
  },
  {
    title: "Your Library",
    url: "#",
    icon: Library,
  },
];

const libraryItems = [
  {
    title: "Create Playlist",
    url: "#",
    icon: PlusCircle,
  },
  {
    title: "Liked Songs",
    url: "#",
    icon: Heart,
  },
  {
    title: "Podcasts",
    url: "#",
    icon: Mic2,
  },
  {
    title: "Radio",
    url: "#",
    icon: Radio,
  },
];

export function AppSidebar() {
  return (
    <Sidebar className="w-64 bg-zinc-900 border-r border-zinc-800">
      <SidebarHeader className="p-6">
        <div className="flex items-center gap-2">
          <Music className="h-8 w-8 text-purple-400" />
          <span className="text-2xl font-bold gradient-text">Zemirta</span>
        </div>
      </SidebarHeader>
      
      <SidebarContent className="px-4">
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {mainNavItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton 
                    asChild 
                    className="hover:bg-zinc-800 text-zinc-300 hover:text-white transition-colors"
                  >
                    <a href={item.url} className="flex items-center gap-3 px-3 py-2">
                      <item.icon className="h-5 w-5" />
                      <span className="font-medium">{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        <SidebarGroup className="mt-8">
          <SidebarGroupLabel className="text-zinc-400 text-sm font-medium mb-4">
            Library
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {libraryItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton 
                    asChild
                    className="hover:bg-zinc-800 text-zinc-300 hover:text-white transition-colors"
                  >
                    <a href={item.url} className="flex items-center gap-3 px-3 py-2">
                      <item.icon className="h-5 w-5" />
                      <span className="font-medium">{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        <SidebarGroup className="mt-8">
          <SidebarGroupLabel className="text-zinc-400 text-sm font-medium mb-4">
            Recently Played
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <div className="space-y-2">
              {['My Playlist #1', 'Chill Vibes', 'Workout Mix', 'Late Night Jazz'].map((playlist) => (
                <div key={playlist} className="px-3 py-2 text-sm text-zinc-400 hover:text-white hover:bg-zinc-800 rounded cursor-pointer transition-colors">
                  {playlist}
                </div>
              ))}
            </div>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      
      <SidebarFooter className="p-4">
        <div className="text-xs text-zinc-500">
          © 2024 Zemirta
        </div>
      </SidebarFooter>
    </Sidebar>
  );
}
