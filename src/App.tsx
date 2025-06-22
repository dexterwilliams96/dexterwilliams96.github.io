import { useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import Box from "@mui/material/Box";
import Skeleton from "@mui/material/Skeleton";
import corp from "./data/corpora.json"
import pap from "./data/papers.json"

const rs = [
  { id: 1, name: "Data Grid", description: "the Community version" },
  { id: 2, name: "Data Grid Pro", description: "the Pro version" },
  { id: 3, name: "Data Grid Premium", description: "the Premium version" },
];

const cols = [
  { field: "name", headerName: "Product Name", width: 200 },
  { field: "description", headerName: "Description", width: 300 },
];

function App() {
  const [loading] = useState(false);
  const [rows] = useState(rs);
  const [columns] = useState(cols);
  console.log(corp)
  console.log(pap)


  return (
    <Box style={{ height: 300, width: "100%" }}>
      {loading ? <Skeleton /> : <DataGrid rows={rows} columns={columns} />}
    </Box>
  );
}

export default App;
