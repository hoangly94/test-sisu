import classNames from "classnames";
import styles from './styles.module.css';
import { useContext, useState } from "react";
import _ from "lodash";
import TableContext from "../TableContext";

const Rows = () => {
  const { columns, data } = useContext(TableContext);
  // const [columsData, setColumsData] = useState(data);
  const keyPrefix = 'table.';

  return <>
    {
      data?.map((r: any, rowIndex) => {
        return (
          <tr
            key={keyPrefix + `br.${rowIndex}.`}
            {
            ...r
            }
          >
            {columns?.map((c, colIndex) => {
              const cell = r[c.index];

              return (
                <td
                  key={keyPrefix + `bd.${rowIndex}.` + (c.key ?? `${c.index}.${colIndex}`)}
                  // align={c.align}
                  // valign={c.valign}
                  {...(_.isObject(cell) ? cell : null)}
                >
                  {
                    cell?.children ?? cell
                  }
                </td>
              );
            })}
            <div
            >
            </div>
          </tr>
        );
      })
    }
  </>;
};

export default Rows;
