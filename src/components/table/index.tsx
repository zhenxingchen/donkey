import * as React from "react";
import { FormContext, TableContext} from "../../shared/context";
import IProps from "../../types/common/props";
import ITable from "../../types/components/table";
import Checkbox from "../checkbox";
import Item from "../item";
import Pager from "../pager";
import Radio from "../radio";
import { Layout } from "../../utils";

import "./style.less";

function Table(props: IProps<ITable>) {

  const [formContext] = React.useContext(FormContext);
  const [config] = React.useState(() => {
    const config = props.config;
    !config.attr ? config.attr = {} : "";
    return config;
  });
  const [rows, setRows] = React.useState(null);

  React.useEffect(() => {
    convertDataToRows(config.data);
  }, []);

  const convertDataToRows = (tableData) => {
    if (!tableData
      || !(tableData instanceof Array)
      || tableData.length < 1
      || !config.columns
      || !(config.columns instanceof Array)
      || config.columns.length < 1) {
      return null;
    }
    const tableRows = [];
    let rowIndex = 0;
    for (const rowData of tableData) {
      const rowItems = [];
      // fold col
      if (rowData.hasOwnProperty("children")) {
        !rowData.hasOwnProperty("childrenOpen")
          ? rowData.childrenOpen = false
          : null;
        rowItems.push(
          rowData.childrenOpen
            ? (<i className="fold close dk-transition-border"></i>)
            : (<i className="fold open dk-transition-border"></i>)
        );
      }
      // check col
      if (config.attr.checkType
        && ["radio", "checkbox"].indexOf(config.attr.checkType) > -1) {
        rowItems.push(
          "radio" === config.attr.checkType
            ? (<Radio config={{tag: "radio"}}/>)
            : "checkbox" === config.attr.checkType
            ? (<Checkbox config={{tag: "checkbox"}}/>)
            : null
        );
      }
      // data col
      for (const colItem of config.columns) {
        rowItems.push(
          cellFormat(colItem, rowData, rowIndex)
        );
      }
      tableRows.push(rowItems);
      // children row
      if (rowData.children && rowData.children instanceof Array) {
        config.children.data = rowData.children;
        const _rowItems = [];
        _rowItems.push(null);
        ["radio", "checkbox"].indexOf(config.attr.checkType) > -1
          ? _rowItems.push(null)
          : null;
        _rowItems.push(config.children);
        tableRows.push(_rowItems);
      }
      rowIndex ++;
    }
    setRows([ ...tableRows ]);
  };

  const cellFormat = (colItem, rowData, rowIndex) => {
    if (!config.format
      || !config.format.hasOwnProperty(colItem.name)) {
      return rowData[colItem.name];
    }
    return config.format[colItem.name](
      rowData[colItem.name], rowData, rowIndex);
  };

  const renderToolbar = () => {
    if (!config.toolbar) {
      return null;
    }
    return (
      <Item config={ config.toolbar }/>
    );
  };

  const renderColGroup = () => {
    const renderFoldCol = () => {
      if (config.children) {
        return (
          <col style={ { width: "50px", minWidth: "50px" }}/>
        );
      }
      return null;
    };
    const renderCheckCol = () => {
      if (["radio", "checkbox"].indexOf(config.attr.checkType) > -1) {
        return (
          <col style={ { width: "50px", minWidth: "50px" }}/>
        );
      }
      return null;
    };
    const renderItemCols = () => {
      return (
        <>
          {
            config.columns.map((item, index) => (
              <col key={index} width={ item.width }/>
            ))
          }
        </>
      );
    };
    return (
      <colgroup>
        { renderFoldCol() }
        { renderCheckCol() }
        { renderItemCols() }
      </colgroup>
    );
  };

  const renderHeader = () => {
    const renderComplexHeader = () => {
      if (!config.header
        || !(config.header instanceof Array)
        || config.header.length < 1) {
        return null;
      }
    };
    const renderItemsHeader = () => {
      const renderFoldCol = () => (
        config.children
          ? (<th><i className="fold open dk-transition-border"></i></th>)
          : null
      );
      const renderCheckCol = () => (
        "radio" === config.attr.checkType
          ? (<th>选择</th>)
          : "checkbox" === config.attr.checkType
          ? (<th><Checkbox config={{tag: "checkbox"}}/></th>)
          : null
      );
      const renderItems = () => {
        return (
          <>
            {
              config.columns.map((item, index) => (
                <th key={index}>{ item.text }</th>
              ))
            }
          </>
        );
      }
      return (
        <tr>
          { renderFoldCol() }
          { renderCheckCol() }
          { renderItems() }
        </tr>
      );
    };
    return (
      <thead>
        { config.header ? renderComplexHeader() : renderItemsHeader() }
      </thead>
    );
  };

  const renderRowItems = () => {
    if (!rows || rows.length < 1) {
      return null;
    }
    const renderCell = (colItem, rowIndex, colIndex) => {
      if (colItem === null
        || colItem === undefined
        || !colItem.tag
        || ["string", "boolean", "number"].indexOf(typeof colItem) > -1) {
        return colItem;
      }
      return (
        <Item
          config={colItem}
          rowIndex={rowIndex} colIndex={colIndex}
        />
      );
    };
    return (
      <tbody>
        {
          rows.map((rowItem, rowIndex) => (
            <tr key={ rowIndex }>
              {
                rowItem.map((colItem, colIndex) => (
                  <td
                    key={ colIndex }
                    colSpan={
                      colItem && colItem.tag === "table"
                        ? config.columns.length
                        : 1
                    }
                  >
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
    return (
      <div className="table-main">
        <table>
          { renderColGroup() }
          { renderHeader() }
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
    if (!config || !config.columns
      || !(config.columns instanceof Array)
      || config.columns.length < 1) {
      return null;
    }
    return (
      <div
        className={Layout.rootClassName(config)}
        style={Layout.rootStyle(config)}
      >
        <TableContext.Provider
          value={[{
            name: config.attr.name,
            disabled: config.attr.disabled
          }]}>
          <div
            className={Layout.containerClassName(config)}
            style={Layout.containerStyle(config)}
          >
              { renderToolbar() }
              { renderTableMain() }
              { renderPager() }
              { renderTableFixLeft() }
              { renderTableFixRight() }
          </div>
        </TableContext.Provider>
      </div>
    );
  };

  return render();
}

export default Table;
