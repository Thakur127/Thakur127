function Container({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={`max-w-3xl mx-auto px-4 py-8 ${className || ""}`}>
      {children}
    </div>
  );
}

export default Container;
