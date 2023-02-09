import classNames from "classnames";
import styles from './styles.module.css';
import HeaderColumnDropdown, { HeaderColumnDropdownChangeData } from "./HeaderColumnDropdown";
import { useContext } from "react";
import TableContext from "../TableContext";
import { TableColumn } from "..";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import AddColumn from "./AddColumn";


export interface HeaderColumnsProps<TableDataType> {
}

const HeaderColumns = ({
}: HeaderColumnsProps<Object>) => {
  const { columns } = useContext(TableContext);

  const onDropdownChange = (data: HeaderColumnDropdownChangeData) => () => {
    console.log('=======');
    console.log(data);
  }

  const onDragEnd = (result: any) => {
    console.log('----------');
    console.log(result);
  }

  const keyPrefix = 'table.header.';
  const getKey = (str: string) => `${keyPrefix}${str}`;

  return (
    <div
      className={classNames(
        styles['sezy-table_header'],
      )}
    >
      {columns?.map((c, index) => (
        <div
          key={keyPrefix + 'h.' + (c.key ?? `${c.index}.${index}`)}
          className={styles['sezy-table_header_column']}
        >
          <HeaderColumnDropdown
            onChange={onDropdownChange}
            data={c}
          />
          {/* {item.label} */}
        </div>
      ))}

      <AddColumn />
      {/* <DragDropContext onDragEnd={onDragEnd}>
        <Droppable droppableId="droppable" direction="horizontal">
          {(droppableProvided, droppableSnapshot) => (
            <div
              ref={droppableProvided.innerRef}
            // style={getListStyle(droppableSnapshot.isDraggingOver)}
            >
              {columns?.map((item, index) => (
                <Draggable key={getKey(item.index)} draggableId={getKey(item.index)} index={index}>
                  {(draggableProvided, draggableSnapshot) => (
                    <div
                      ref={draggableProvided.innerRef}
                      {...draggableProvided.draggableProps}
                      {...draggableProvided.dragHandleProps}
                      style={draggableProvided.draggableProps.style}
                      className={styles['sezy-table_header_column']}
                    >
                      {item.label}
                    </div>
                  )}
                </Draggable>
              ))}
              {droppableProvided.placeholder}
            </div>
          )}
        </Droppable> */}
      {/* </DragDropContext> */}
    </div>
  )

  // return <>
  //   {
  //     columns?.map((c, index) => {
  //       const keyPrefix = 'table.';
  //       return (
  //         <th
  //           key={keyPrefix + 'h.' + (c.key ?? `${c.index}.${index}`)}
  //           style={{
  //             textAlign: c.align,
  //             ...(c.styles ?? {}),
  //           }}
  //         >
  //           <HeaderColumnDropdown
  //             onChange={onDropdownChange}
  //             data={c}
  //           />
  //         </th>
  //       );
  //     })
  //   }
  // </>;
};


export default HeaderColumns;
