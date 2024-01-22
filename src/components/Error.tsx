import { PropsWithChildren } from 'react';

const Error = ({ children }: PropsWithChildren) => {
  return <span className="ml-2 text-red-400 text-sm">{children}</span>;
};

export default Error;
