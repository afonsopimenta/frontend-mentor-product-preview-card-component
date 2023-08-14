import { type ReactNode } from 'react';
import clsx from 'clsx';

type PageContainerProps = {
  children: ReactNode;
  className?: string;
};

const PageContainer = ({ children, className }: PageContainerProps) => {
  return (
    <div
      className={clsx(
        'mx-auto w-full max-w-6xl px-4 md:px-12 lg:px-20',
        className,
      )}
    >
      {children}
    </div>
  );
};

export default PageContainer;
