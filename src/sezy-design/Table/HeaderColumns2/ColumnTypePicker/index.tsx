import React, { useContext, useRef } from 'react';
import styles from './styles.module.css';
import classNames from 'classnames';
import { useState } from 'react';
import SezyIcons from '@/partials/Icon';
import { useCallback } from 'react';
import _ from 'lodash';
import Dropdown from '@/sezy-design/Dropdown';
import TABLE_COLUMN_TYPES from '@/constants/tableColumnTypes';
import TableContext from '../../TableContext';
import ColumnTypeList from '@/sezy-design/Table/ColumnTypeList';

interface ColumnTypePickerProps {
  Label: React.ReactElement | string,
  align?: 'left' | 'center' | 'right',
  isDisabled?: boolean,
  isLoading?: boolean,
  isClearedAll?:boolean,
  containerRef?: React.MutableRefObject<HTMLDivElement | null>,
  dropdownRef?: React.MutableRefObject<HTMLDivElement | null>,
  optionsRef?: React.MutableRefObject<HTMLDivElement | null>,
  className?: string,
  imperativeHandleRef?: React.MutableRefObject<any>,
  onTypeItemClick: (type: string) => Function,
}

const ColumnTypePicker = React.forwardRef(({
  Label,
  align = 'right',
  isDisabled = false,
  isLoading = false,
  isClearedAll = false,
  dropdownRef,
  containerRef,
  imperativeHandleRef,
  optionsRef,
  className,
  onTypeItemClick
}: ColumnTypePickerProps, ref) => {
  const { disableTableScrolling} = useContext(TableContext);
  // !dropdownImperativeHandleRef && (dropdownImperativeHandleRef = useRef(null))
  // !ref && (ref = useRef(null))
  !dropdownRef && (dropdownRef = useRef(null))
  !optionsRef && (optionsRef = useRef(null))

  const [seachedKeyword, setSeachedKeyword] = useState('')
  // const [isSeaching, setSearching] = useState(false)

  const tooltipId = `tooltip_table-add`;

  const onSearchKeyDown = useCallback((e: any) => {
    setSeachedKeyword(e.target.value);
  }, [])


  const columnTypeList = (seachedKeyword ? TABLE_COLUMN_TYPES.filter(columnType => columnType.label.includes(seachedKeyword)) : TABLE_COLUMN_TYPES);

  return (
    <div
      className={classNames(
        styles['sezy-table_column-type-picker'],
      )}
    >
      <Dropdown
        ref={dropdownRef}
        containerRef={containerRef}
        imperativeHandleRef={imperativeHandleRef}
        align={align}
        optionsRef={optionsRef}
        Label={Label}
        className={classNames(
          styles['sezy-table_column-type-picker_selected'],
        )}
        optionClassname={classNames(
          styles['sezy-table_column-type-picker_options'],
        )}
        isClearedAll={isClearedAll}
        clickInsideCallback={disableTableScrolling(true)}
        clickOutsideCallback={disableTableScrolling(false)}
      >
        <div>
          <div className={styles['sezy-table_column-type-picker_options_header']}>
            <div>Choose column type</div>
          </div>
          <div className={styles['sezy-table_column-type-picker_options_body']}>
            <ColumnTypeList onTypeItemClick={onTypeItemClick}/>
          </div>
        </div>
      </Dropdown>
    </div>
  );
});

export default ColumnTypePicker;
