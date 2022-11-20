import React from "react";

interface Props {
  children?: React.ReactNode;
}

function Container({ children = null }: Props) {
  return (
    <div className="min-h-screen flex justify-center">
      <main className="max-w-screen-xl w-full flex flex-col p-1">
        {children}
      </main>
    </div>
  );
}

export default Container;
