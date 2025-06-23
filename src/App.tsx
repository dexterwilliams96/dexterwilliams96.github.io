import { useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Skeleton from "@mui/material/Skeleton";
import Typography from "@mui/material/Typography";

import corp from "./data/corpora.json";
import pap from "./data/papers.json";

const rs = [
  {
    id: 1,
    corpora_name: "lots of texts",
    paper_name: "argpaper1",
    authors: "tom, dick, harry",
    date: "11/12/1999",
    genre: "legal",
    language: "English (en)",
    document_types: "supreme court briefs",
    document_count: 100,
    annotation_description: "toulmin",
    annotator_count: 3,
    annotator_type: "expert",
    agreement: 0.5,
    agreement_interpretation: "moderate",
    accessibility: "free",
    corpora_link: "dummylink",
    paper_link: "dummy link",
  },
];

const columns = [
  { field: "corpora_name", headerName: "Corpora Name", width: 200 },
  { field: "paper_name", headerName: "Paper Name", width: 200 },
  { field: "authors", headerName: "Authors", width: 200 },
  { field: "date", headerName: "Date", width: 200 },
  { field: "genre", headerName: "Genre", width: 200 },
  { field: "language", headerName: "Language", width: 200 },
  { field: "document_types", headerName: "Document Types", width: 200 },
  { field: "document_count", headerName: "Document Count", width: 200 },
  {
    field: "annotation_description",
    headerName: "Annotation Description",
    width: 200,
  },
  { field: "annotator_count", headerName: "Annotator Count", width: 200 },
  { field: "annotator_type", headerName: "Annotator Type", width: 200 },
  { field: "agreement", headerName: "Agreement", width: 200 },
  {
    field: "agreement_interpretation",
    headerName: "Interpretation",
    width: 200,
  },
  { field: "accessibility", headerName: "Accessibility", width: 200 },
  { field: "corpora_link", headerName: "Corpora Link", width: 200 },
  { field: "paper_link", headerName: "Paper Link", width: 200 },
];

function App() {
  const [loading] = useState(false);
  const [rows] = useState(rs);
  console.log(corp);
  console.log(pap);

  return (
    <Box style={{ height: 300, width: "100%" }}>
      {loading ? (
        <Skeleton />
      ) : (
        <Card variant="outlined">
          <CardContent>
            <Typography
              gutterBottom
              sx={{ color: "text.secondary", fontSize: 14 }}
            >
              Grouped by Corpora
            </Typography>
            <DataGrid rows={rows} columns={columns} />
          </CardContent>
        </Card>
      )}
    </Box>
  );
}

export default App;
