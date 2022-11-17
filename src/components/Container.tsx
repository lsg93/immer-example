import React from "react";

interface Props {
  children?: React.ReactNode;
}

function Container({ children = null }: Props) {
  return <div className="container h-screen">{children}</div>;
}

export default Container;
