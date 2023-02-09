import SezyIcons from "@/partials/Icon";
import classNames from "classnames";
import styles from './styles.module.css';
import { useContext, useRef } from "react";
import TableContext from "../TableContext";
import ColumnTypePicker from "./ColumnTypePicker";
import TABLE_COLUMN_TYPES from "@/constants/tableColumnTypes";

const AddColumn = () => {
  const addColumnRef = useRef(null);
  const { columns, data, tableRef, forceTableRerender, tableWrapperRef } = useContext(TableContext);
  const columnTypePickerImperativeHandleRef = useRef<any>(null)

  const onTypeItemClick = (type: string) => () => {
    const columnType = TABLE_COLUMN_TYPES.find(columnType => columnType.type === type);

    // dropdownImperativeHandleRef?.current?.setVisible(false);
    columns?.push({
      Icon: columnType?.icon ? <SezyIcons name={columnType.icon} /> : undefined,
      align: "center",
      index: "d3",
      label: "Title 2",
    })
    forceTableRerender();
    tableRef.current && (tableRef.current.scrollLeft = tableRef.current.scrollWidth);
    columnTypePickerImperativeHandleRef?.current?.handelClearAllEvent();
  };

  return (
    <div
      ref={addColumnRef}
      className={classNames(
        styles['sezy-table_column_header'],
        styles['sezy-table_column_header-settings'],
      )}
    >
      <ColumnTypePicker
        imperativeHandleRef={columnTypePickerImperativeHandleRef}
        Label={<SezyIcons name='solid_plus' />}
        containerRef={tableRef}
        onTypeItemClick={onTypeItemClick}
        // align='left'
      />
      <div>
        <SezyIcons name="solid_dots" />
      </div>
    </div>
  );
};

export default AddColumn;
