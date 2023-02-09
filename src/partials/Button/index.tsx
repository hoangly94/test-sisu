import React from 'react';
import styles from './styles.module.css';
import classNames from 'classnames';

export interface ButtonProps {
  href?: string,
  className?: string,
  onClick?: React.MouseEventHandler;
  children: any
}

export default (
  {
    href,
    className,
    onClick,
    children
  }: ButtonProps
) => {
  return (
    <a
      className={classNames(
        styles['button'],
        className,
      )}
      {...(href ? {href} : {})}
      onClick={onClick}
    >
      {children}
    </a>
  )
}
