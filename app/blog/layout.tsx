import React from 'react';

function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <div className="pb-32 pt-48 min-h-screen">{children}</div>;
}

export default Layout;
