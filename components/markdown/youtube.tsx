'use client';

import YouTube from 'react-youtube';

export function Video({ videoId }: { videoId?: string }) {
  if (!videoId) return null;
  
  return (
    <div className="my-8 w-full aspect-video">
      <YouTube 
        videoId={videoId}
        opts={{
          width: '100%',
          height: '100%',
          playerVars: {
            autoplay: 0,
            modestbranding: 1,
            rel: 0
          },
        }}
        className="rounded-lg"
      />
    </div>
  );
}