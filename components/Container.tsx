type ContainerProps = {
  children: React.ReactNode;
  className?: string;
};

export function Container({ children, className = "" }: ContainerProps) {
  return (
    <div className={`mx-auto w-full max-w-(--max-width) px-(--space-3) sm:px-(--space-4) ${className}`}>
      {children}
    </div>
  );
}
