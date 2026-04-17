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
      <Table
        stickyHeader
        sx={{
          tableLayout: "fixed",
          minWidth: 4000,
        }}
      >
        <TableHead>
          <TableRow>
            {[
              "ชื่อ",
              "อายุ",
              "คุณคิดว่าสถานที่นี้เป็นแบบไหน?", //scene_18
              "มีเป้าหมายหรือสิ่งที่คุณอยากทำหรือเปล่า?", //scene_29
              "สิ่งนั้นคืออะไรหรอ", //scene_30
              "พี่ว่าหนูจะโตไปเป็นคนเก่งๆ แบบพี่ได้ไหม?", //scene_40
              "อะไรที่ทำให้พี่คิดว่าไม่เก่งหรอ", //scene_41
              "เล่าเรื่องที่คุณภูมิใจให้เด็กน้อยฟังหน่อยสิ", //scene_46
              "พี่คิดว่าหนูจะทำมันได้มั้ย..?", //scene_52
              "ถ้าโตไปเป็นผู้ใหญ่ หนูจะมีความกดดันหรือเปล่า?", //scene_69
              "ความกดดันที่พี่เจอมันเป็นยังไงหรอ..?", //scene_70
              "คุณจะยังเดินต่อไปมั้ย?", //scene_94
            ].map((head) => (
              <TableCell
                key={head}
                sx={{
                  fontWeight: 600,
                  backgroundColor: "#f5f7fa",
                  color: "#333",
                  borderBottom: "2px solid #e0e0e0",
                  whiteSpace: "normal",
                  wordBreak: "break-word",
                  overflowWrap: "break-word",
                  minWidth: 60,
                  padding: 3,
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
              <TableCell sx={{ fontWeight: 500, padding: 3 }}>
                {row.name}
              </TableCell>

              <TableCell sx={{ fontWeight: 500, padding: 3 }}>
                {row.age}
              </TableCell>

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
                  sx={{
                    maxWidth: 150,
                    wordBreak: "break-word",
                    overflowWrap: "break-word",
                    fontSize: "0.9rem",
                    color: "#444",
                    padding: 3,
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
