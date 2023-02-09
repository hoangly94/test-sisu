import React, { CSSProperties, useState } from 'react';
import Classnames from 'classnames';
import _ from 'lodash';
import styles from './styles.module.css';
import HeaderColumns from './HeaderColumns';
import BodyRows from './BodyRows';
import { useRef } from 'react';
import TableContext from './TableContext';
import useForceRerender from '@/hooks/useForceRerender';

interface TLabel {
  emptyData?: string,
}

export interface RowProps {
  type?: 'string' | 'number' | '',
}

export interface HeaderColumnsProps<TableDataType> {
  columns?: TableColumn<TableDataType>[],
  data?: Array<RowProps & TableDataType>,
}

export interface TableColumn<TableDataType> {
  key?: string,
  index: string,
  Icon?: React.ReactElement,
  label: string | React.ReactNode,
  isDisabled?: boolean,
  filter?: Object,
  sort?: 'up' | 'down',
  search?: Object,
  align?: 'center' | 'left' | 'right',
  valign?: 'middle' | 'top' | 'bottom',
  styles?: CSSProperties,
  render?: Function,
  onClick?: React.MouseEventHandler,
}

export interface TableIProps<TableDataType> {
  size?: 's' | 'm' | 'l',
  columns?: TableColumn<TableDataType>[],
  data?: Array<RowProps & TableDataType>,
  labels?: TLabel,
  hasHeader?: boolean,
  isLoading?: boolean,
  isEditing?: boolean,
  className?: string,
  onScroll?: any,
}

const Table = ({
  size = 'm',
  hasHeader = true,
  isLoading = false,
  isEditing = false,
  columns,
  labels,
  data,
  className,
  onScroll,
  ...otherProps
}: TableIProps<Object>) => {
  const tableWrapperRef = useRef(null);
  const tableRef: any = useRef(null);
  const forceTableRerender = useForceRerender();
  const labelMap = Object.assign({
    emptyData: 'Empty',
  }, labels);

  const keyPrefix = 'table.';

  const tableProps = {
    ...otherProps,
    className: Classnames(
      styles['sezy-table'],
      // styles['sezy-table-' + type],
      styles['sezy-table_' + size],
    ),
  }

  const columnsRef = useRef(_.cloneDeep(columns));
  const dataRef = useRef(_.cloneDeep(data));

  const disableTableScrolling = (input: boolean) => () => {
    // tableRef.current && (tableRef.current.style.overflow = input ? 'hidden' : 'auto');
  }
   
  return (
    <TableContext.Provider value={{
      tableWrapperRef,
      tableRef,
      forceTableRerender,
      columns: columnsRef.current,
      data: dataRef.current,
      disableTableScrolling
    }}>
      <div
        ref={tableWrapperRef}
        className={Classnames(
          styles['sezy-table-wrapper'],
          className
        )}
      >
        <table
          ref={tableRef}
          className={Classnames(
            styles['sezy-table'],
          )}
        >
          <HeaderColumns />
          <BodyRows />
        </table>
      </div>
    </TableContext.Provider>
  )

  // return (
  //   <TableContext.Provider value={{
  //     tableWrapperRef,
  //     tableRef,
  //     forceTableRerender,
  //     columns: columnsRef.current,
  //     data: dataRef.current,
  //     disableTableScrolling
  //   }}>
  //     <div
  //       ref={tableWrapperRef}
  //       className={Classnames(
  //         styles['sezy-table-wrapper'],
  //         className
  //       )}
  //       onScroll={onScroll}
  //     >
  //       <div ref={tableRef}>
  //         <table
  //           {...tableProps}
  //         >
  //           {
  //             hasHeader && (
  //               <thead>
  //                 <tr>
  //                   <HeaderColumns />
  //                   <AddColumn />
  //                 </tr>
  //               </thead>
  //             )
  //           }
  //           <tbody>
  //             <Rows />
  //             {/* {
  //           !data?.length && (<tr>
  //             <td align="center" rowSpan={4} colSpan={columns?.length} >
  //               {labelMap.emptyData}
  //             </td>
  //           </tr>)
  //         } */}
  //           </tbody>
  //         </table >
  //       </div>
  //       {/* {isLoading && <div className={styles['sezy-table-loading']}><ThreeDotsLoader size={sizeToLoadingSize[size] as any} /></div>} */}
  //     </div>
  //   </TableContext.Provider>
  // )
}

export default Table


