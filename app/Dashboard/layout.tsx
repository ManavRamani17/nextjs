import React from "react";

function DashboardLayout({children,Students}: {children: React.ReactNode;Students: React.ReactNode;}) {
  return (
    <div>
      {children}
      {Students}
    </div>
  );
}

export default DashboardLayout;