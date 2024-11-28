import { ReactElement } from "react";

const Button = ({
  title,
  id,
  rightIcon,
  leftIcon,
  containerClass,
}: {
  title: string;
  id: string;
  rightIcon: ReactElement;
  leftIcon: ReactElement;
  containerClass: string;
}) => {
  return (
    <button
      id={id}
      className={`group relative z-10 w-fit cursor-pointer overflow-hidden rounded-full bg-violet-50 px-7 py-3 text-black ${containerClass}`}
    >
      {leftIcon}
      <span className="relative incline-flex overflow-hidden font-general text-xs uppercase">
        <div>{title}</div>
      </span>
      {rightIcon}
    </button>
  );
};

export default Button;