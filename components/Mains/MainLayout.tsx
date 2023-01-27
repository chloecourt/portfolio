import React from "react";

export const MainLayout = ({
  children,
  title,
}: {
  children?: React.ReactNode;
  title?: string;
}) => {
  return (
    <main
      className="min-h-screen flex flex-col justify-center items-center p-3 sm:p-8 md:p-12 hover:bg-yellow-200 transition-colors duration-500 delay-1000"
      id={title}
    >
      <h1 className="mt-12 text-6xl sm:text-8xl font-abc md:mb-8">{title}</h1>
      {children}
    </main>
  );
};
