import React from 'react';
import styles from './styles.module.css';
import classNames from 'classnames';

export interface ButtonProps {
  isDisabled?: boolean,
  className?: string,
  onClick?: React.MouseEventHandler;
  children: React.ReactElement
}

export default (
  {
    isDisabled,
    className,
    onClick,
    children
  }: ButtonProps
) => {
  return (
    <button
      className={classNames(
        styles['button'],
        className,
      )}
      disabled={isDisabled}
      onClick={onClick}
    >
      {children}
    </button>
  )
}
