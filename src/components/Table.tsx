"use client";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";

import { ICreateData } from "@/core/domain/data";

export default function DataTable({ data }: { data: ICreateData[] }) {
  const total = data.length;

  const scene94Stats = data.reduce(
    (acc, row) => {
      const value = row.scene_94?.trim();
      if (value === "เดินต่อไป") acc.walk++;
      else if (value === "หยุดรอซักหน่อย") acc.wait++;
      return acc;
    },
    { walk: 0, wait: 0 },
  );

  const walkPercent = total
    ? ((scene94Stats.walk / total) * 100).toFixed(1)
    : "0";

  const waitPercent = total
    ? ((scene94Stats.wait / total) * 100).toFixed(1)
    : "0";

  const moreAnswer =
    scene94Stats.walk > scene94Stats.wait
      ? "เดินต่อไป"
      : scene94Stats.wait > scene94Stats.walk
        ? "หยุดรอสํกหน่อย"
        : "เท่ากัน";

  return (
    <div style={{ width: "100%", padding: 30 }}>
      <div
        style={{
          marginTop: 20,
          marginBottom: 16,
          padding: 16,
          borderRadius: 16,
          background: "#ffffff",
          border: "1px solid #e2e8f0",
          display: "flex",
          gap: 16,
          flexWrap: "wrap",
          alignItems: "center",
          boxShadow: "0 4px 12px rgba(0,0,0,0.04)",
        }}
      >
        <div
          style={{
            padding: "12px 16px",
            borderRadius: 12,
            background: "#f1f5f9",
            minWidth: 180,
          }}
        >
          <div style={{ fontSize: 12, color: "#64748b" }}>จำนวนข้อมูล</div>
          <div style={{ fontSize: 20, fontWeight: 600 }}>{total}</div>
        </div>

        <div
          style={{
            padding: "12px 16px",
            borderRadius: 12,
            background: "#ecfdf5",
            minWidth: 200,
          }}
        >
          <div style={{ fontSize: 12, color: "#059669" }}>เดินต่อไป</div>
          <div style={{ fontSize: 18, fontWeight: 600 }}>
            {scene94Stats.walk} ({walkPercent}%)
          </div>
        </div>

        <div
          style={{
            padding: "12px 16px",
            borderRadius: 12,
            background: "#fef3c7",
            minWidth: 200,
          }}
        >
          <div style={{ fontSize: 12, color: "#d97706" }}>หยุดรอซักหน่อย</div>
          <div style={{ fontSize: 18, fontWeight: 600 }}>
            {scene94Stats.wait} ({waitPercent}%)
          </div>
        </div>

        <div
          style={{
            padding: "12px 16px",
            borderRadius: 12,
            background: "#eef2ff",
            minWidth: 200,
          }}
        >
          <div style={{ fontSize: 12, color: "#6366f1" }}>คำตอบที่มากกว่า</div>
          <div style={{ fontSize: 18, fontWeight: 600 }}>{moreAnswer}</div>
        </div>
      </div>

      <div
        style={{
          width: "100%",
          overflowX: "auto",
          overflowY: "auto",
          maxHeight: "700px",
          borderRadius: 12,
          border: "1px solid #e0e0e0",
        }}
      >
        <Paper elevation={0} sx={{ minWidth: 4000 }}>
          <Table
            stickyHeader
            sx={{
              minWidth: 4000,
              borderCollapse: "separate",
              borderSpacing: 0,
            }}
          >
            <TableHead>
              <TableRow>
                {[
                  "ชื่อ",
                  "อายุ",
                  "คุณคิดว่าสถานที่นี้เป็นแบบไหน?",
                  "มีเป้าหมายหรือสิ่งที่คุณอยากทำหรือเปล่า?",
                  "สิ่งนั้นคืออะไรหรอ",
                  "พี่ว่าหนูจะโตไปเป็นคนเก่งๆ แบบพี่ได้ไหม?",
                  "อะไรที่ทำให้พี่คิดว่าไม่เก่งหรอ",
                  "เล่าเรื่องที่คุณภูมิใจให้เด็กน้อยฟังหน่อยสิ",
                  "พี่คิดว่าหนูจะทำมันได้มั้ย..?",
                  "ถ้าโตไปเป็นผู้ใหญ่ หนูจะมีความกดดันหรือเปล่า?",
                  "ความกดดันที่พี่เจอมันเป็นยังไงหรอ..?",
                  "คุณจะยังเดินต่อไปมั้ย?",
                ].map((head) => (
                  <TableCell
                    key={head}
                    sx={{
                      fontWeight: 500,
                      color: "#fff",
                      backgroundColor: "#3b82f6",
                      borderBottom: "none",
                      minWidth: 160,
                      padding: "14px 16px",
                      fontSize: "0.9rem",
                      letterSpacing: "0.3px",
                    }}
                  >
                    {head}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>

            <TableBody>
              {data.map((row, index) => (
                <TableRow key={index}>
                  <TableCell sx={{ fontWeight: 600 }}>{row.name}</TableCell>

                  <TableCell sx={{ color: "#64748b", fontWeight: 500 }}>
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
                  ].map((value, i) => {
                    const isLast = i === 9;

                    return (
                      <TableCell
                        key={i}
                        sx={{
                          fontSize: "0.9rem",
                          color: "#334155",
                          padding: "12px 14px",
                          lineHeight: 1.6,

                          ...(isLast && {
                            fontWeight: 600,
                            color:
                              value === "เดินต่อไป" ? "#059669" : "#d97706",
                            backgroundColor:
                              value === "เดินต่อไป" ? "#ecfdf5" : "#fef3c7",
                            borderRadius: "8px",
                          }),
                        }}
                      >
                        {value || "-"}
                      </TableCell>
                    );
                  })}
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Paper>
      </div>
    </div>
  );
}
