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
import Modal from '@/sezy-design/Modal';

interface ColumnTypePickerProps {
  onTypeItemClick: (type: string) => Function,
}

const ColumnTypePicker = React.forwardRef(({
  onTypeItemClick
}: ColumnTypePickerProps, ref) => {

  const [seachedKeyword, setSeachedKeyword] = useState('')
  const [isModalOpen, setModalOpen] = useState(false)
  // const [isSeaching, setSearching] = useState(false)

  const tooltipId = `tooltip_table-add`;

  const onSearchKeyDown = useCallback((e: any) => {
    setSeachedKeyword(e.target.value);
  }, [])


  const onModelOpen = ()=>{
    setModalOpen(true);
  }

  const onModelCancel = ()=>{
    setModalOpen(false);
  }

  return (
    <>
      <div onClick={onModelOpen}>
      <SezyIcons name='solid_plus'/>
      </div>
        <Modal
          isOpen={isModalOpen}
          onCancel={onModelCancel}
        >
            <div className={styles['sezy-table__column-type-picker__options__header']}>
              <div>Choose column type</div>
            </div>
            <div className={styles['sezy-table__column-type-picker__options__body']}>
              <ColumnTypeList onTypeItemClick={onTypeItemClick}/>
            </div>
        </Modal>
    </>
  );
});

export default ColumnTypePicker;
