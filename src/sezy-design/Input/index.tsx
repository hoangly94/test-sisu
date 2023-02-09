import React, { useRef } from 'react';
import styles from './styles.module.css';
import classNames from 'classnames';
import { useEffect } from 'react';

interface InputProps {
  defaultValue?: string | number,
  onKeyDown?: React.KeyboardEventHandler<HTMLInputElement>,
  onKeyUp?: React.KeyboardEventHandler<HTMLInputElement>,
  placeholder?: string,
  isDisabled?: boolean,
  isLoading?: boolean,
  className?: string,
  onClick?: React.MouseEventHandler,
}

const Input = React.forwardRef(({
  defaultValue,
  onKeyDown,
  onKeyUp,
  placeholder,
  isDisabled,
  isLoading,
  className,
  onClick,
}: InputProps, ref:any) => {
  !ref && (ref = useRef(null))

  useEffect(()=>{
    defaultValue && (ref.current.value = defaultValue);
  }, [])

  return (
    <div
      className={classNames(
        styles['sezy-input'],
      )}
    >
      <input
        ref={ref}
        disabled={isDisabled}
        placeholder={placeholder}
        onKeyDown={onKeyDown}
        onKeyUp={onKeyUp}
      />
    </div>
  );
});

export default Input;
