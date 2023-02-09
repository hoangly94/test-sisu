import React, { useImperativeHandle, useState, useRef } from 'react';
import Classnames from 'classnames';
import styles from './styles.module.css';
import { useEffect } from 'react';

export interface DropdownItemsProps {
    containerRef?: React.MutableRefObject<HTMLDivElement | null>,
    parentRef: React.MutableRefObject<HTMLDivElement | null>,
    align?: 'left' | 'center' | 'right',
    onClick?: React.MouseEventHandler,
    onUnmounted?: Function,
    className?: string,
    children: React.ReactNode,
}

const DropdownItems = ({
    containerRef,
    parentRef,
    align,
    onClick,
    onUnmounted,
    className,
    children,
}: DropdownItemsProps, ref: any) => {
    const activeIndex = useRef(-1);
    const [parentBoundingClientRect, setParentBoundingClientRect] = useState<any>();

    useEffect(() => {
        const box = document.querySelector('html');

        const setNewStylePosition = ()=> {
            setParentBoundingClientRect(parentRef.current?.getBoundingClientRect());
        };
        setNewStylePosition();
        window.addEventListener('resize', setNewStylePosition);
        return () => {
            window.removeEventListener('resize', setNewStylePosition);
            onUnmounted?.();
        }
    }, [])

    const containerX = containerRef?.current?.getBoundingClientRect().x ?? 0;

    return parentBoundingClientRect ? (
        <div
            ref={ref}
            className={Classnames(
                styles['sezy-dropdown_items'],
                styles[`sezy-dropdown_items--align-${align}`],
                className,
            )}
            style={{
                [String(align)]: `${align === 'right' ? -containerX : parentBoundingClientRect?.x - containerX}px`,
                top: `calc(${parentBoundingClientRect!.y + parentBoundingClientRect!.height - (containerRef?.current?.getBoundingClientRect().y ?? 0)}px + var(--spacing-s))`,
                minWidth: `${parentBoundingClientRect!.width}px`,
            }}
        >
            {
                React.Children.map(children, (child: any, index) => {
                    return React.cloneElement(child, {
                        ...child.props,
                        ...(index === activeIndex.current ? { active: '' } : {}),
                        onClick: (e: any) => {
                            child.props.onClick?.(e);
                            activeIndex.current = index;
                        }
                    })
                })
            }
        </div>
    ) : null
}

export default React.forwardRef(DropdownItems)