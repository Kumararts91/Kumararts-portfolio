"use client";

import React, { useEffect, useState } from "react";

const Header = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <header className="ag-header-container">
      {isClient && ( 
        <video autoPlay loop muted playsInline>
          <source src="/video/Coming-soon.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      )}
    </header>
  );
};

export default Header;
