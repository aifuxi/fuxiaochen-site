import React from 'react';

function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="pb-32 pt-48 min-h-screen flex flex-col items-center">
      {children}
    </div>
  );
}

export default Layout;
