"use client";

import DataTable from "@/components/Table";
import { useState } from "react";
import { authService, dataService } from "@/infra/container";
import Swal from "sweetalert2";
import { handleError } from "@/lib/error-handler";

const data = await dataService.getData();

export default function Page() {
  const [isOpen, setIsOpen] = useState(true);
  const [password, setPassword] = useState("");

  const handleSubmit = async () => {
    try {
      await authService.login(password);
      setIsOpen(false);
    } catch (err: unknown) {
      const message = handleError(err);

      Swal.fire({
        icon: "error",
        title: message,
        text: "กรุณาใส่รหัสผ่านที่ถูกต้อง",
      });
    }
  };

  if (isOpen) {
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
        <div className="p-6 bg-white shadow-xl rounded-2xl w-80">
          <h2 className="mb-4 text-xl font-semibold text-center">
            ใส่รหัสผ่าน
          </h2>

          <input
            type="password"
            placeholder="Enter password..."
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-3 py-2 mb-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <button
            onClick={handleSubmit}
            className="w-full py-2 text-white transition bg-blue-500 rounded-lg hover:bg-blue-600"
          >
            ยืนยัน
          </button>
        </div>
      </div>
    );
  }

  return <DataTable data={data} />;
}
