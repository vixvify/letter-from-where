import { ICreateData } from "@/core/domain/data";

export default function downloadCSV(
  data: ICreateData[],
  filename = "data.csv",
) {
  const headers = Object.keys(data[0]) as (keyof ICreateData)[];

  const csvRows = [
    headers.join(","),
    ...data.map((row) => headers.map((field) => `"${row[field]}"`).join(",")),
  ];

  const csvString = csvRows.join("\n");

  const blob = new Blob([csvString], { type: "text/csv" });
  const url = window.URL.createObjectURL(blob);

  const a = document.createElement("a");
  a.href = url;
  a.download = filename;
  a.click();

  window.URL.revokeObjectURL(url);
}
