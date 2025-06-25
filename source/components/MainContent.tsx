
import { useState } from 'react';
import { Search, Play, MoreHorizontal } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent } from '@/components/ui/card';
import { useMusicContext } from '@/contexts/MusicContext';

export function MainContent() {
  const [activeTab, setActiveTab] = useState('home');
  const { playTrack } = useMusicContext();

  const featuredPlaylists = [
    {
      id: 1,
      title: "Today's Top Hits",
      description: "The most played songs right now",
      image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=300&h=300&fit=crop",
      tracks: 50
    },
    {
      id: 2,
      title: "Chill Vibes",
      description: "Relax and unwind with these tracks",
      image: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=300&h=300&fit=crop",
      tracks: 75
    },
    {
      id: 3,
      title: "Workout Energy",
      description: "High energy tracks for your workout",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=300&h=300&fit=crop",
      tracks: 40
    },
    {
      id: 4,
      title: "Late Night Jazz",
      description: "Smooth jazz for late night listening",
      image: "https://images.unsplash.com/photo-1415201364774-f6f0bb35f28f?w=300&h=300&fit=crop",
      tracks: 35
    }
  ];

  const recentlyPlayed = [
    {
      id: 1,
      title: "Midnight City",
      artist: "M83",
      album: "Hurry Up, We're Dreaming",
      duration: "4:03",
      image: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=60&h=60&fit=crop"
    },
    {
      id: 2,
      title: "Blinding Lights",
      artist: "The Weeknd",
      album: "After Hours",
      duration: "3:20",
      image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=60&h=60&fit=crop"
    },
    {
      id: 3,
      title: "Levitating",
      artist: "Dua Lipa",
      album: "Future Nostalgia",
      duration: "3:23",
      image: "https://images.unsplash.com/photo-1611339555312-e607c8352fd7?w=60&h=60&fit=crop"
    },
    {
      id: 4,
      title: "Stay",
      artist: "The Kid LAROI & Justin Bieber",
      album: "F*CK LOVE 3: OVER YOU",
      duration: "2:21",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=60&h=60&fit=crop"
    }
  ];

  const handlePlayTrack = (track: any) => {
    playTrack({
      id: track.id,
      title: track.title,
      artist: track.artist,
      image: track.image,
      duration: track.duration
    });
  };

  return (
    <div className="flex-1 overflow-auto bg-gradient-to-br from-zinc-900 via-zinc-800 to-zinc-900">
      {/* Header */}
      <header className="sticky top-0 z-10 bg-zinc-900/80 backdrop-blur-md border-b border-zinc-800 p-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Button
              variant={activeTab === 'home' ? 'default' : 'ghost'}
              onClick={() => setActiveTab('home')}
              className="bg-gradient-zemirta text-white hover:opacity-90"
            >
              Home
            </Button>
            <Button
              variant={activeTab === 'browse' ? 'default' : 'ghost'}
              onClick={() => setActiveTab('browse')}
            >
              Browse
            </Button>
          </div>
          <div className="relative max-w-md">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-zinc-400 h-4 w-4" />
            <Input
              placeholder="Search for songs, artists, or albums..."
              className="pl-10 bg-zinc-800 border-zinc-700 text-white placeholder-zinc-400"
            />
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="p-6 pb-32">
        {/* Hero Section */}
        <section className="mb-12">
          <div className="relative rounded-2xl overflow-hidden bg-gradient-zemirta p-8 text-white">
            <div className="relative z-10">
              <h1 className="text-4xl font-bold mb-4">Welcome back!</h1>
              <p className="text-lg opacity-90 mb-6">Discover new music and enjoy your favorite tracks</p>
              <Button 
                size="lg" 
                className="bg-white text-purple-600 hover:bg-gray-100 font-semibold"
              >
                Start Listening
              </Button>
            </div>
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-pink-500/20 rounded-full blur-2xl"></div>
          </div>
        </section>

        {/* Featured Playlists */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-6">Featured Playlists</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredPlaylists.map((playlist) => (
              <Card key={playlist.id} className="bg-zinc-800 border-zinc-700 hover:bg-zinc-750 transition-colors hover-lift group cursor-pointer">
                <CardContent className="p-4">
                  <div className="relative mb-4">
                    <img
                      src={playlist.image}
                      alt={playlist.title}
                      className="w-full aspect-square object-cover rounded-lg"
                    />
                    <Button
                      size="icon"
                      className="absolute bottom-2 right-2 bg-green-500 hover:bg-green-600 opacity-0 group-hover:opacity-100 transition-opacity"
                      onClick={() => console.log('Play playlist', playlist.id)}
                    >
                      <Play className="h-4 w-4" />
                    </Button>
                  </div>
                  <h3 className="font-semibold text-white mb-1">{playlist.title}</h3>
                  <p className="text-sm text-zinc-400 mb-2">{playlist.description}</p>
                  <p className="text-xs text-zinc-500">{playlist.tracks} tracks</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Recently Played */}
        <section>
          <h2 className="text-2xl font-bold text-white mb-6">Recently Played</h2>
          <div className="space-y-2">
            {recentlyPlayed.map((track, index) => (
              <div
                key={track.id}
                className="flex items-center gap-4 p-3 rounded-lg hover:bg-zinc-800 transition-colors group cursor-pointer"
                onClick={() => handlePlayTrack(track)}
              >
                <div className="relative">
                  <img
                    src={track.image}
                    alt={track.title}
                    className="w-12 h-12 object-cover rounded"
                  />
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <Play className="h-4 w-4 text-white" />
                  </div>
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className="font-medium text-white truncate">{track.title}</h4>
                  <p className="text-sm text-zinc-400 truncate">{track.artist}</p>
                </div>
                <div className="hidden md:block text-sm text-zinc-400 min-w-0 flex-1">
                  <p className="truncate">{track.album}</p>
                </div>
                <div className="text-sm text-zinc-400">{track.duration}</div>
                <Button
                  variant="ghost"
                  size="icon"
                  className="opacity-0 group-hover:opacity-100 transition-opacity"
                >
                  <MoreHorizontal className="h-4 w-4" />
                </Button>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
