import React, { useRef } from 'react';
import styles from './styles.module.css';
import classNames from 'classnames';
import Dropdown from '../Dropdown';
import { useState } from 'react';
import SezyIcons from '@/partials/Icon';
import { SOLID_ICONS } from '@/constants/icons';
import ReactTooltip from 'react-tooltip';
import Input from '../Input';
import { useCallback } from 'react';
import _ from 'lodash';

interface IconPickerProps {
  defaultName?: string,
  align?: 'left' | 'center' | 'right',
  isDisabled?: boolean,
  isLoading?: boolean,
  // dropdownRef?: React.MutableRefObject<HTMLDivElement | null>,
  optionsRef?: React.MutableRefObject<HTMLDivElement | null>,
  className?: string,
  onClick?: React.MouseEventHandler,
  onChange?: Function,
}

const IconPicker = React.forwardRef(({
  defaultName = 'solid_check',
  align = 'center',
  isDisabled,
  isLoading,
  // dropdownRef,
  optionsRef,
  className,
  onClick,
  onChange,
}: IconPickerProps, ref) => {
  // !ref && (ref = useRef(null))
  // !dropdownRef && (dropdownRef = useRef(null))
  const dropdownImperativeHandleRef = useRef<any>(null)
  !optionsRef && (optionsRef = useRef(null))
  const [selectedIconName, setSelectedIconName] = useState(defaultName)

  const [seachedKeyword, setSeachedKeyword] = useState('')
  // const [isSeaching, setSearching] = useState(false)

  const onIconClick = (iconName: string) => (e:any) => {
    dropdownImperativeHandleRef?.current?.handelClearLastEvent()
    setSelectedIconName(iconName);
    onChange?.(iconName);

    e.stopPropagation();
  };

  const tooltipId = `tooltip_icon-picker`;

  const onSearchKeyDown = useCallback((e:any) => {
    setSeachedKeyword(e.target.value);
  }, [])

  const iconList = (seachedKeyword ? SOLID_ICONS.filter(icon => icon.name.includes(seachedKeyword)) : SOLID_ICONS);
  
  return (
    <div
      className={classNames(
        styles['sezy-icon-picker'],
      )}
    >
      <Dropdown
        imperativeHandleRef={dropdownImperativeHandleRef}
        align={align}
        optionsRef={optionsRef}
        Label={<div className={styles['sezy-icon-picker_selector']}><SezyIcons name={selectedIconName} /></div>}
        className={classNames(
          styles['sezy-icon-picker_selected'],
        )}
        optionClassname={classNames(
          styles['sezy-icon-picker_options'],
        )}
      >
        <div>
          <div className={styles['sezy-icon-picker_options_header']}>
            <div>Icons</div>
          </div>
          <div className={styles['sezy-icon-picker_options_body']}>
            <Input placeholder='Search...' onKeyDown={onSearchKeyDown} />
            {
              iconList.map((icon, index) => {
                const iconName = `solid_${icon.name}`;
                return (
                  <div key={index}  onClick={(onIconClick(iconName))} className={styles['sezy-icon-picker_item']} data-tip={icon.label} data-for={tooltipId} >
                    <SezyIcons name={iconName} />
                  </div>
                )
              })
            }
          </div>
          <ReactTooltip id={tooltipId} place="top" effect="solid" />
        </div>
      </Dropdown>
    </div>
  );
});

export default IconPicker;
