'use client';

import Link from 'next/link';
import style from './ActiveLink.module.css';
import { usePathname } from 'next/navigation';

interface Props {
  title: string;
  url: string;
}

export const ActiveLink = ({url, title}:Props) => {

  const pathName = usePathname();

  return (
    <Link
      className={`${ style.link } ${  (pathName === url ) && style['active-link'] } `}
      href={url}>
      {title}
    </Link>
  )
}
