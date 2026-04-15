"use client";

import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";

import { ICreateData } from "@/core/domain/data";

export default function DataTable({ data }: { data: ICreateData[] }) {
  return (
    <TableContainer
      component={Paper}
      elevation={3}
      sx={{
        maxHeight: 1000,
        overflowX: "auto",
        borderRadius: 3,
      }}
    >
      <Table stickyHeader sx={{ minWidth: 1200 }}>
        <TableHead>
          <TableRow>
            {[
              "Name",
              "Age",
              "18",
              "29",
              "30",
              "40",
              "41",
              "46",
              "52",
              "69",
              "70",
              "94",
            ].map((head) => (
              <TableCell
                key={head}
                align={head === "Name" ? "left" : "center"}
                sx={{
                  fontWeight: 600,
                  backgroundColor: "#f5f7fa",
                  color: "#333",
                  borderBottom: "2px solid #e0e0e0",
                  whiteSpace: "nowrap",
                }}
              >
                {head}
              </TableCell>
            ))}
          </TableRow>
        </TableHead>

        <TableBody>
          {data.map((row: ICreateData, index: number) => (
            <TableRow
              key={index}
              hover
              sx={{
                transition: "0.2s ease",
                backgroundColor: index % 2 === 0 ? "#ffffff" : "#fafafa",
                "&:hover": {
                  backgroundColor: "#f1f5f9",
                },
              }}
            >
              <TableCell sx={{ fontWeight: 500 }}>{row.name}</TableCell>

              <TableCell align="center">{row.age}</TableCell>

              {[
                row.scene_18,
                row.scene_29,
                row.scene_30,
                row.scene_40,
                row.scene_41,
                row.scene_46,
                row.scene_52,
                row.scene_69,
                row.scene_70,
                row.scene_94,
              ].map((value, i) => (
                <TableCell
                  key={i}
                  align="center"
                  sx={{
                    maxWidth: 150,
                    wordBreak: "break-word",
                    overflowWrap: "break-word",
                    fontSize: "0.9rem",
                    color: "#444",
                  }}
                >
                  {value || "-"}
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
