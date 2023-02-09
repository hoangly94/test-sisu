import React from 'react';
import styles from './styles.module.css';
import classNames from 'classnames';

interface IconProps {
  name: string,
  size?: '2xs' | 'xs' | 's' | 'm' | 'l' | 'xl' | '2xl' | '3xl',
  fill?: string,
  direction?: 'up' | 'right' | 'down' | 'left',
  isDisabled?: boolean,
  className?: string,
  onClick?: React.MouseEventHandler;
}

export default (
  {
    name,
    size = 'm',
    fill,
    direction,
    className,
    onClick,
  }: IconProps
) => {
  if (!name)
    return null;

  const [type, fileName] = name.split('_');
  const path = `/icons/${type}/${fileName}.svg`;

  const style: any = {
    WebkitMask: `url('${path}') center center no-repeat`,
  }
  direction && (style.transform = `rotate(${rotationMapper[direction]}deg)`);

  return (
    <i
      className={classNames(
        styles['sezy-icon'],
        styles['sezy-icon-' + size],
        className,
      )}
      style={style}
      onClick={onClick}
    />
  )
}

const rotationMapper = {
  up: 0,
  right: 90,
  down: 180,
  left: 270,
}