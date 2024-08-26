import Link from 'next/link';

const NavLink = ({
  href,
  title,
  closeFn,
}: {
  href: string;
  title: string;
  closeFn?: () => void;
}) => {
  const handleClick = () => {
    if (closeFn) {
      closeFn();
    }
  };
  return (
    <Link
      href={href}
      className="block py-2 pl-3 pr-4 text-white-100 sm:text-xl rounded md:p-0 hover:text-white"
      onClick={handleClick}
    >
      {' '}
      {title}{' '}
    </Link>
  );
};

export default NavLink;
