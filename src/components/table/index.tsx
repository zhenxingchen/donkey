import * as React from "react";
import { FormContext } from "../../shared/context";
import { TableContext } from "../../shared/context";
import IProps from "../../types/props";
import ITable from "../../types/table";
import Button from "../button";
import Group from "../group";
import Input from "../input";
import Link from "../link";
import Select from "../select";
import Span from "../span";
import Pager from "../pager";
import util from "../../shared/util";

import "./style.less";

function Table(props: IProps<ITable>) {

  const [formContext] = React.useContext(FormContext);
  const [config, setConfig] = React.useState(() => {
    const config = props.config;
    if (!config.attr) {
      config.attr = {};
    }
    return config;
  });
  const [rowItems, setRowItems] = React.useState(null);

  React.useEffect(() => {
    convertDataToTrItems(config.data);
  }, [ props.config ]);

  const convertDataToTrItems = (tableData) => {
    if (!tableData || !(tableData instanceof Array) || tableData.length < 1
      || !config.items || !(config.items instanceof Array) || config.items.length < 1) {
      return null;
    }
    const tableRowItems = [];
    let rowIndex = 0;
    for (const rowData of tableData) {
      const rowItems = [];
      for (const colItem of config.items) {
        rowItems.push(
          cellFormat(colItem, rowData, rowIndex)
        );
      }
      tableRowItems.push(rowItems);
      rowIndex ++;
    }
    setRowItems([ ...tableRowItems ]);
  };

  const cellFormat = (colItem, rowData, rowIndex) => {
    if (!config.format || !config.format.hasOwnProperty(colItem.name)) {
      return rowData[colItem.name];
    }
    return config.format[colItem.name](rowData[colItem.name], rowData, rowIndex);
  };

  const renderColGroup = (items) => {
    return (
      <colgroup>
        {
          items.map((item, index) => (
            <col key={index} width={ item.width }/>
          ))
        }
      </colgroup>
    );
  };

  const renderHeader = () => {
    if (!config.header
      || !(config.header instanceof Array)
      || config.header.length < 1) {
      return null;
    }
  };

  const renderItemsHeader = (items) => {
    return (
      <tr>
        {
          items.map((item, index) => (
            <th key={index}>{ item.text }</th>
          ))
        }
      </tr>
    );
  };

  const renderRowItems = () => {
    if (!rowItems || rowItems.length < 1) {
      return null;
    }
    const renderCell = (component, rowIndex, colIndex) => {
      if (component === null
        || component === undefined
        || ["string", "boolean", "number"].indexOf(typeof component) > -1) {
        return component;
      }
      switch (component.tag) {
        case "button": {
          return (<Button config={ component } rowIndex={rowIndex} colIndex={colIndex}/>);
        };
        case "group": {
          return (<Group config={ component } rowIndex={rowIndex} colIndex={colIndex}/>);
        };
        case "input": {
          return (<Input config={ component } rowIndex={rowIndex} colIndex={colIndex}/>);
        };
        case "link": {
          return (<Link config={ component } rowIndex={rowIndex} colIndex={colIndex}/>);
        };
        case "select": {
          return (<Select config={ component } rowIndex={rowIndex} colIndex={colIndex}/>);
        };
        case "span": {
          return (<Span config={ component } rowIndex={rowIndex} colIndex={colIndex}/>);
        };
        default : return component;
      }
    };
    return (
      <tbody>
        {
          rowItems.map((rowItem, rowIndex) => (
            <tr key={ rowIndex }>
              {
                rowItem.map((colItem, colIndex) => (
                  <td key={ colIndex }>
                    { renderCell(colItem, rowIndex, colIndex) }
                  </td>
                ))
              }
            </tr>
          ))
        }
      </tbody>
    );
  };

  const renderTableFixLeft = () => {
    return (
      <div className="table-fix-left"></div>
    );
  };

  const renderTableFixRight = () => {
    return (
      <div className="table-fix-right"></div>
    );
  };

  const renderTableMain = () => {
    const items = config.items[0] instanceof Array ? config.items[0] : config.items;
    return (
      <div className="table-main">
        <table>
          { renderColGroup(items) }
          <thead>
          { renderHeader() }
          { renderItemsHeader(items) }
          </thead>
          { renderRowItems() }
        </table>
      </div>
    );
  };

  const renderPager = () => {
    if (!config.pager) {
      return null;
    }
    return (
      <Pager config={ config.pager }/>
    );
  };

  const render = () => {
    if (!config || !config.items
      || !(config.items instanceof Array)
      || config.items.length < 1) {
      return null;
    }
    return (
      <div className={`dk-table ${util.getCols(config.cols)}`} style={ { ...config.attr.style } }>
        <TableContext.Provider
          value={[{
          name: config.attr.name,
          disabled: config.attr.disabled
        }]}>
          { renderTableMain() }
          { renderPager() }
          { renderTableFixLeft() }
          { renderTableFixRight() }
        </TableContext.Provider>
      </div>
    );
  };

  return render();
}

export default Table;
