import React from 'react';
import { HeaderColumnsProps } from '.';

interface TableContextProps extends HeaderColumnsProps<Object> {
    tableWrapperRef: React.MutableRefObject<HTMLDivElement | null>,
    tableRef: React.MutableRefObject<HTMLDivElement | null>,
    forceTableRerender: Function,
    disableTableScrolling: (input:boolean)=> Function,
}

const TableContext = React.createContext<TableContextProps>({
    tableWrapperRef: { current: null },
    tableRef: { current: null },
    forceTableRerender: () => { },
    columns: [],
    data: [],
    disableTableScrolling: ()=>()=>{}
});


export default TableContext