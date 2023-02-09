import React, { useContext, useRef } from 'react';
import styles from './styles.module.css';
import classNames from 'classnames';
import { useState } from 'react';
import SezyIcons from '@/partials/Icon';
import { SOLID_ICONS } from '@/constants/icons';
import ReactTooltip from 'react-tooltip';
import { useCallback } from 'react';
import _ from 'lodash';
import Dropdown from '@/sezy-design/Dropdown';
import Input from '@/sezy-design/Input';
import TABLE_COLUMN_TYPES from '@/constants/tableColumnTypes';
import TableContext from '../TableContext';

interface ColumnTypeListProps {
  onTypeItemClick: Function,
  className?: string,
}

const ColumnTypeList = React.forwardRef(({
  onTypeItemClick,
  className,
}: ColumnTypeListProps, ref) => {
  const [seachedKeyword, setSeachedKeyword] = useState('')
  const tooltipId = `tooltip_table-add`;

  const onSearchKeyDown = useCallback((e: any) => {
    setSeachedKeyword(e.target.value);
  }, [])

  const columnTypeList = (seachedKeyword ? TABLE_COLUMN_TYPES.filter(columnType => columnType.label.includes(seachedKeyword)) : TABLE_COLUMN_TYPES);

  return (
    <>
      <Input placeholder='Search...' onKeyDown={onSearchKeyDown} />
      <div className={styles['sezy-table_column-type-list']} >
        {
          columnTypeList.map((columnType, index) => {
            return (
              <div key={index} onClick={onTypeItemClick(columnType.type)} data-tip={columnType.description} data-for={tooltipId} >
                <SezyIcons name={columnType.icon ?? 'solid_check'} />
                <span>
                  {columnType.label}
                </span>
              </div>
            )
          })
        }
      </div>
      <ReactTooltip id={tooltipId} place="top" effect="solid" />
    </>
  );
});

export default ColumnTypeList;
