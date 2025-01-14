'use client';

import YouTube from 'react-youtube';

export function Video() {
  return (
    <div className="w-full">
      <div className="aspect-video">
        <div className="w-full h-full">
          <YouTube 
            videoId="I4EWvMFj37g"
            opts={{
              width: '100%',
              height: '100%',
              playerVars: {
                modestbranding: 1,
                rel: 0
              },
            }}
            className="w-full h-full"
          />
        </div>
      </div>
    </div>
  );
}