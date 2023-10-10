import React from 'react'
import ReactPlayer from 'react-player'
import useBaseUrl from '@docusaurus/useBaseUrl';

// Render a YouTube video player



export default function StylizedVideo({videoURL}) {
  return (
    <ReactPlayer playing loop height='100%' width="100%" url={useBaseUrl(videoURL)} />
    // <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
    //   <img
    //     src={useBaseUrl(imgURL)}
    //     alt={alt}
    //     style={{
    //       width: wSize,
    //       margin: '0 0 var(--ifm-paragraph-margin-bottom)',
    //       borderRadius: '14px', 
    //       boxShadow: '0px 0px 4px rgba(0, 0, 0, 0.2)', 
    //     }}
    //   />
    // </div>
  );
}