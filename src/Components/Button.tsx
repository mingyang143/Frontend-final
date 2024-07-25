type ChildrenProps = {
  children: React.ReactNode;
  onClick: (e: React.MouseEvent<HTMLElement>) => unknown;
  isButtonDisabled: boolean;
  className: string;
};
export default function Button({
  children,
  onClick,
  className,
  isButtonDisabled,
}: ChildrenProps) {
  return (
    <button onClick={onClick} className={className} disabled={isButtonDisabled}>
      {children}
    </button>
  );
}
