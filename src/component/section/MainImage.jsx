import React from 'react';

export default function MainImage({ image, title, text }) {
  return (
    <div
      className="container"
      style={{
        background: `linear-gradient(to bottom,rgba(0,0,0,0)
    39%,rgba(0,0,0,0)
    41%,rgba(0,0,0,0.65)
    100%),
    url(${image}), #1c1c1c`,
      }}
    >
      <div>
        <div>
          <h2 style={{ color: 'white' }}> {title}</h2>
          <p style={{ color: 'white', fontSize: '1rem' }}>{text}</p>
        </div>
      </div>
    </div>
  );
}
