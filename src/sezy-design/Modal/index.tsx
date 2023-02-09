import React, { MouseEventHandler } from 'react';
import styles from './styles.module.css';
import classNames from 'classnames';
import usePortal from '@/hooks/usePortal';

export interface ModalProps {
  isOpen?: boolean,
  isLoading?: boolean,
  onCancel?: MouseEventHandler<HTMLDivElement>,
  className?: string,
  children: React.ReactNode,
}

const Modal = React.forwardRef(({
  isOpen,
  isLoading,
  onCancel,
  className,
  children
}: ModalProps, ref) => {
  const ModalPortal = usePortal(document.querySelector('#overlay')!);

  return (
    <ModalPortal >
      {
        isOpen && (
          <div
            className={classNames(
              styles['sezy-modal'],
              className,
            )}
          >
            <div
              className={classNames(
                styles['sezy-modal__overlay-bg'],
              )}
              onClick={onCancel}
            ></div>
            <div
              className={classNames(
                styles['sezy-modal__container'],
                className
              )}
            >
              {children}
            </div>
          </div>
        )
      }
    </ModalPortal>
  )
})

export default Modal
