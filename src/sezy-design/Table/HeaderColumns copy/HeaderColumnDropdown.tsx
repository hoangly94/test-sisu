import classNames from "classnames";
import styles from './styles.module.css';
import Dropdown from "@/sezy-design/Dropdown";
import IconPicker from "@/sezy-design/IconPicker";
import { useRef } from "react";
import Input from "@/sezy-design/Input";
import { useContext } from "react";
import TableContext from "../TableContext";
import { TableColumn } from "..";
import _ from "lodash";
import ColumnTypePicker from "./ColumnTypePicker";
import TABLE_COLUMN_TYPES from "@/constants/tableColumnTypes";
import SezyIcons from "@/partials/Icon";

export interface HeaderColumnDropdownChangeData {

}

interface HeaderColumnDropdownProps {
  data: TableColumn<Object>,
  onChange: (data: HeaderColumnDropdownChangeData) => Function,
}

const HeaderColumnDropdown = ({
  data,
  onChange,
}: HeaderColumnDropdownProps) => {
  const { tableRef, disableTableScrolling } = useContext(TableContext);
  const iconPickerOptionsRef = useRef(null);
  const columnTypePickerLabelRef = useRef(null);
  const nameColumnInputRef: any = useRef(null);
  const newData = useRef(_.cloneDeep(data)).current;
  const dropdownImperativeHandleRef = useRef<any>(null)

  const onTypeItemClick = (type: string) => (e: any) => {
    const columnType = TABLE_COLUMN_TYPES.find(columnType => columnType.type === type);
    dropdownImperativeHandleRef?.current?.handelClearAllEvent();

    e.stopPropagation();
  };

  return (
    <Dropdown
      imperativeHandleRef={dropdownImperativeHandleRef}
      containerRef={tableRef}
      Label={getDropdownIcon(data)}
      includedRefs={[iconPickerOptionsRef]}
      optionClassname={classNames(
        styles['sezy-table_header_dropdown_options'],
      )}
      onUnmountedItems={onChange(newData)}
      clickInsideCallback={disableTableScrolling(true)}
      clickOutsideCallback={disableTableScrolling(false)}
    >
      <div>
        <div className={styles['sezy-table_header_dropdown_header']}>
          <IconPicker optionsRef={iconPickerOptionsRef} />
          <Input ref={nameColumnInputRef} defaultValue={'asdfsdf'} placeholder="Column Name" />
        </div>
        {/* <div>
          <ColumnTypePicker
            align="left"
            Label={<div ref={columnTypePickerLabelRef}>{data.label}</div>}
            containerRef={columnTypePickerLabelRef}
            onTypeItemClick={onTypeItemClick}
          />
        </div> */}
      </div>
      <div className={styles['sezy-table_header_dropdown_item-group']}>
        <div>
          <SezyIcons name="solid_setting" />
          <span>Edit Column Type</span>
        </div>
      </div>
      <div className={styles['sezy-table_header_dropdown_item-group']}>
        <div>
          <SezyIcons name="solid_filter" />
          <span>filter</span>
        </div>
        <div>
          <SezyIcons name="solid_sort" />
          <span>sort ascending</span>
        </div>
        <div>
          <SezyIcons name="solid_sort" direction="down"/>
          <span>sort descending</span>
        </div>
      </div>
      <div className={styles['sezy-table_header_dropdown_item-group']}>
        <div>
          <SezyIcons name="solid_close-eye" />
          <span>Hide</span>
        </div>
        <div>
          <SezyIcons name="solid_delete" />
          <span>remove</span>
        </div>
      </div>
    </Dropdown>
  );
};

const getDropdownIcon = (c: TableColumn<Object>) => (
  <>
    {c.Icon && <c.Icon.type
      {...c.Icon?.props}
      className={classNames(
        styles['sezy-table_header_icon'],
        c.Icon?.props.className
      )}
    />}
    {c.label}
    {c.sort && <SezyIcons size="s" name="solid_sort" className={styles['sezy-table_header_sort']} direction={c.sort} />}
  </>
)

export default HeaderColumnDropdown;
