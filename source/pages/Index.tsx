
import { SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/AppSidebar";
import { MusicPlayer } from "@/components/MusicPlayer";
import { MainContent } from "@/components/MainContent";
import { MusicProvider } from "@/contexts/MusicContext";

const Index = () => {
  return (
    <MusicProvider>
      <div className="min-h-screen bg-background">
        <SidebarProvider>
          <div className="flex h-screen w-full">
            <AppSidebar />
            <main className="flex-1 flex flex-col overflow-hidden">
              <MainContent />
            </main>
          </div>
          <MusicPlayer />
        </SidebarProvider>
      </div>
    </MusicProvider>
  );
};

export default Index;
