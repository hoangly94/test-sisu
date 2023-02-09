import classNames from "classnames";
import styles from './styles.module.css';
import HeaderColumnDropdown, { HeaderColumnDropdownChangeData } from "./HeaderColumnDropdown";
import { useContext } from "react";
import TableContext from "../TableContext";
import { TableColumn } from "..";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import AddColumn from "./AddColumn";
import _ from "lodash";

export interface HeaderColumnsProps<TableDataType> {
}

const HeaderColumns = ({
}: HeaderColumnsProps<Object>) => {
  const { columns, data } = useContext(TableContext);

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

  // return (
  //   <>
  //     {columns?.map((c, columnIndex) => (
  //       <div
  //         className={classNames(
  //           styles['sezy-table_column'],
  //         )}
  //         key={keyPrefix + 'h.' + (c.key ?? `${c.index}.${columnIndex}`)}
  //       >
  //         <div
  //           className={styles['sezy-table_column_header']}
  //         >
  //           <HeaderColumnDropdown
  //             onChange={onDropdownChange}
  //             data={c}
  //           />
  //           {/* {item.label} */}
  //         </div>
  //         <div
  //           className={styles['sezy-table_column_body']}
  //         >
  //           {

  //             data?.map((r: any, rowIndex) => {
  //               const cell = r[c.index];
  //               return (
  //                 <div
  //                   key={keyPrefix + `bd.${rowIndex}.` + (c.key ?? `${c.index}.${columnIndex}`)}
  //                   // align={c.align}
  //                   // valign={c.valign}
  //                   {...(_.isObject(cell) ? cell : null)}
  //                 >
  //                   {
  //                     cell?.children ?? cell
  //                   }
  //                 </div>
  //               );
  //             })
  //           }
  //           <div />
  //         </div>
  //       </div>
  //     ))}

  //     <AddColumn />
  //   </>
  // )
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
  {/* </DragDropContext> */ }

  return <tr>
    {
      columns?.map((c, index) => {
        const keyPrefix = 'table.';
        return (
          <th
            key={keyPrefix + 'h.' + (c.key ?? `${c.index}.${index}`)}
            style={{
              textAlign: c.align,
              ...(c.styles ?? {}),
            }}
          >
            <HeaderColumnDropdown
              onChange={onDropdownChange}
              data={c}
            />
          </th>
        );
      })
    }
  </tr>;
};


export default HeaderColumns;
