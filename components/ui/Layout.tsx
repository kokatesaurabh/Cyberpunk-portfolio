import React from 'react';

const Layout = ({ children }: { children: React.ReactNode }) => (
  <div className="container mx-auto px-4">
    {/* Your layout code here, for example a header, footer, etc. */}
    <header>
      <h1>My Portfolio</h1>
    </header>
    
    {/* Render the child components passed to Layout */}
    <main>{children}</main>

    <footer>
      <p>© 2024 My Portfolio</p>
    </footer>
  </div>
);

export { Layout };
