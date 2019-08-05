import * as React from "react";

import IConfig from "../../types/config";
import ITable from "../../types/table";

function Table(props: IConfig<ITable>) {

  const [config, setConfig] = React.useState(null);

  const render = () => {

    if (!config) {
      return null;
    }

    return (
      <div className="dk-table">
        <table>

        </table>
      </div>
    );

  };

  return render();
}

export default Table;
