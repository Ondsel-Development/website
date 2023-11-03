import React from "react";

export default function Youtube(props) {
  let url = 'https://www.youtube-nocookie.com/embed/' + props.v;
  return (
    <>
    <div style={{ position: 'relative',
          paddingBottom: '56.25%',
          height: 0,
          overflow: 'hidden', 
          marginBottom: '1rem',
          }}>
      <iframe
        src={url}
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          border: 0,
        }}
        >
      </iframe>
    </div>
    </>
  );
}


