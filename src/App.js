import "antd/dist/antd.css";
import "./App.css";
import { useState } from "react";
import { Select, Button, Table } from "antd";
import { parseRecord } from "./utils";
import { marker as rawDataList } from "./data/data.json";
import ScopedStyle from "./index.module.scss";

const filterOptionMap = parseRecord(rawDataList);

// species, type, subtype,gene,method
function App() {
  const [currentSpecies, setCurrentSpecies] = useState();
  const [currentType, setCurrentType] = useState();
  const [currentSubType, setCurrentSubType] = useState();
  const [currentGene, setCurrentGene] = useState();
  const [currentMethod, setCurrentMethod] = useState();
  const [tableData, setTableData] = useState(rawDataList);
  const goFilter = () => {
    const resList = rawDataList.filter(
      (rawData) =>
        (!currentSpecies || rawData.species === currentSpecies) &&
        (!currentType || rawData.type === currentType) &&
        (!currentSubType || rawData.subtype === currentSubType) &&
        (!currentGene || rawData.gene === currentGene) &&
        (!currentMethod || rawData.method === currentMethod)
    );
    setTableData(resList);
  };

  return (
    <div className="App">
      <div className={ScopedStyle["container"]}>
        <div className={ScopedStyle["filter-option"]}>
          <div className={ScopedStyle["option"]}>
            <span className={ScopedStyle["label"]}>species</span>
            <Select
              showSearch
              placeholder="Not Defined"
              optionFilterProp="children"
              style={{ width: 120 }}
              value={currentSpecies}
              onChange={(value) => setCurrentSpecies(value)}
              allowClear
              filterOption={(input, option) =>
                option.label.toLowerCase().indexOf(input.toLowerCase()) >= 0
              }
              options={filterOptionMap["species"].map((val) => ({
                label: val,
                value: val,
              }))}
            ></Select>
          </div>

          <div className={ScopedStyle["option"]}>
            <span className={ScopedStyle["label"]}>type</span>
            <Select
              showSearch
              placeholder="Not Defined"
              style={{ width: 120 }}
              value={currentType}
              onChange={(value) => setCurrentType(value)}
              allowClear
              filterOption={(input, option) =>
                option.label.toLowerCase().indexOf(input.toLowerCase()) >= 0
              }
              options={filterOptionMap["type"].map((val) => ({
                label: val,
                value: val,
              }))}
            />
          </div>

          <div className={ScopedStyle["option"]}>
            <span className={ScopedStyle["label"]}>subtype</span>
            <Select
              showSearch
              placeholder="Not Defined"
              style={{ width: 240 }}
              value={currentSubType}
              onChange={(value) => setCurrentSubType(value)}
              allowClear
              filterOption={(input, option) =>
                option.label.toLowerCase().indexOf(input.toLowerCase()) >= 0
              }
              options={filterOptionMap["subtype"].map((val) => ({
                label: val,
                value: val,
              }))}
            />
          </div>

          <div className={ScopedStyle["option"]}>
            <span className={ScopedStyle["label"]}>gene</span>
            <Select
              showSearch
              placeholder="Not Defined"
              style={{ width: 120 }}
              value={currentGene}
              onChange={(value) => setCurrentGene(value)}
              allowClear
              filterOption={(input, option) =>
                option.label.toLowerCase().indexOf(input.toLowerCase()) >= 0
              }
              options={filterOptionMap["gene"].map((val) => ({
                label: val,
                value: val,
              }))}
            />
          </div>

          <div className={ScopedStyle["option"]}>
            <span className={ScopedStyle["label"]}>method</span>
            <Select
              showSearch
              placeholder="Not Defined"
              style={{ width: 120 }}
              value={currentMethod}
              onChange={(value) => setCurrentMethod(value)}
              allowClear
              filterOption={(input, option) =>
                option.label.toLowerCase().indexOf(input.toLowerCase()) >= 0
              }
              options={filterOptionMap["method"].map((val) => ({
                label: val,
                value: val,
              }))}
            />
          </div>

          <div className={ScopedStyle["submit"]}>
            <Button type="primary" onClick={goFilter}>
              Filter
            </Button>
          </div>
        </div>
        <div className={ScopedStyle["data-table"]}>
          <Table
            dataSource={tableData}
            width={"80%"}
            columns={Object.keys(filterOptionMap).map((key) => ({
              title: key,
              dataIndex: key,
              key,
            }))}
          ></Table>
        </div>
      </div>
    </div>
  );
}

export default App;
