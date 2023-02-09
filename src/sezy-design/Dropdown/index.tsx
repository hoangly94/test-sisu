import React, { useImperativeHandle, useRef, useState } from 'react';
import styles from './styles.module.css';
import useClickOutside from '@/hooks/useClickOutside';
import usePortal from '@/hooks/usePortal';
import classNames from 'classnames';
import DropdownItems from './DropdownItems';


export interface DropdownProps {
  Label: React.ReactElement | string,
  align?: 'left' | 'center' | 'right',
  imperativeHandleRef?: React.MutableRefObject<any>,
  containerRef?: React.MutableRefObject<HTMLDivElement | null>,
  optionsRef?: React.MutableRefObject<HTMLDivElement | null>,
  includedRefs?: Array<React.MutableRefObject<HTMLDivElement | null>>,
  isDisabled?: boolean,
  isLoading?: boolean,
  className?: string,
  optionClassname?: string,
  onClick?: React.MouseEventHandler,
  clickInsideCallback?: Function,
  clickOutsideCallback?: Function,
  onUnmountedItems?: Function,
  isClearedAll?: boolean,
  children: React.ReactNode,
}

const Dropdown = React.forwardRef(({
  Label,
  align = 'left',
  imperativeHandleRef,
  containerRef,
  optionsRef,
  includedRefs,
  isDisabled = false,
  isLoading = false,
  className,
  optionClassname,
  onClick,
  clickInsideCallback,
  clickOutsideCallback,
  onUnmountedItems,
  isClearedAll = false,
  children
}: DropdownProps, ref) => {
  !ref && (ref = useRef(null))
  !optionsRef && (optionsRef = useRef(null))

  const [isVisible, setVisible] = useState(false);

  const { ref: dropdownRef, handelClearAllEvent, handelClearLastEvent } = useClickOutside({
    ref: ref as any,
    includedTargets: [optionsRef, ...(includedRefs ?? [])],
    clickInsideCallback: () => {setVisible(true); clickInsideCallback?.()},
    clickOutsideCallback: () =>  {setVisible(false); clickOutsideCallback?.()},
    isClearedAll,
  });

  useImperativeHandle(imperativeHandleRef, () => ({
    isVisible,
    setVisible,
    handelClearAllEvent,
    handelClearLastEvent,
  }));

  const ItemsPortal = usePortal(containerRef?.current ?? document.querySelector('#overlay')!);

  return (
    <div
      ref={dropdownRef}
      className={classNames(
        styles['sezy-dropdown'],
        isDisabled && styles['sezy-dropdown_disabled'],
        className,
      )}
      onClick={(e) => !isDisabled && !isLoading && onClick?.(e)}
    >
      <div
        className={classNames(
          styles['sezy-dropdown_label'],
        )}
      >
        {Label}
      </div>
      {
        isVisible && (
          <ItemsPortal>
            <DropdownItems
              onUnmounted={onUnmountedItems}
              ref={optionsRef}
              containerRef={containerRef}
              parentRef={dropdownRef}
              align={align}
              className={classNames(optionClassname)}
            >
              {children}
            </DropdownItems>
          </ItemsPortal>
        )
      }
    </div>
  )
})

export default Dropdown
