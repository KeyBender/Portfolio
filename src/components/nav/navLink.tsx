import { Link } from "react-scroll";

export { NavLink };

type props = {
  to: string;
  children: React.ReactElement | string;
  className?: string;
  noActiveClass?: boolean
  onClick?: ()=> void;
};

function NavLink({ to, children, className, onClick, noActiveClass = false }: props): React.ReactElement {
  return (
    <Link
      to={to}
      spy={true}
      smooth={true}
      isDynamic={true}
      duration={50}
      activeClass={noActiveClass? "" : /*Apply the active class soon*/""}
      className={className? className : "uppercase transition font-bold cursor-pointer text-xs hover:text-slate-600 hover:underline underline-offset-4 ml-2"}
      onClick={onClick}
    >
      {children}
    </Link>
  );
}
