"use client";

import DataTable from "@/components/Table";
import { useState } from "react";
import { authService } from "@/infra/container";
import Swal from "sweetalert2";
import { handleError } from "@/lib/error-handler";

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

  const mockData = [
    {
      name: "Alice",
      age: 24,
      scene_18: "Short text",
      scene_29: "This is a longer sentence to test wrapping in the table cell.",
      scene_30:
        "Another example with multiple words that should wrap nicely within the fixed column width.",
      scene_40: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      scene_41:
        "superlongwordwithoutanyspacestotestbreakwordsbehaviorinthetablecell",
      scene_46: "Line with manual break (but HTML won't respect unless styled)",
      scene_52: "Testing different lengths of content for UI consistency.",
      scene_69:
        "A very very very very very long sentence that should definitely wrap into multiple lines and increase row height significantly.",
      scene_70: "Short",
      scene_94: "End of row test",
    },
    {
      name: "Bob",
      age: 30,
      scene_18: "Another short",
      scene_29: "Medium length text here for testing.",
      scene_30:
        "superlongtextwithoutspaces1234567890abcdefghijklmnopqrstuvwxyz",
      scene_40:
        "Testing table layout with fixed width columns and wrapping behavior.",
      scene_41: "Short",
      scene_46:
        "This cell contains a paragraph-like text that should wrap into multiple lines smoothly without breaking layout.",
      scene_52: "Data visualization test content.",
      scene_69:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      scene_70: "Edge case",
      scene_94: "Final column content",
    },
    {
      name: "Charlie",
      age: 28,
      scene_18: "Test",
      scene_29:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      scene_30: "Mix of short and long content to see how UI behaves.",
      scene_40: "1234567890123456789012345678901234567890",
      scene_41: "Another superlongwordwithoutspacesjusttotestoverflowhandling",
      scene_46: "Normal sentence.",
      scene_52: "Wrap test wrap test wrap test wrap test wrap test wrap test.",
      scene_69:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      scene_70: "OK",
      scene_94: "Done",
    },
    {
      name: "Charlie",
      age: 28,
      scene_18: "Test",
      scene_29:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      scene_30: "Mix of short and long content to see how UI behaves.",
      scene_40: "1234567890123456789012345678901234567890",
      scene_41: "Another superlongwordwithoutspacesjusttotestoverflowhandling",
      scene_46: "Normal sentence.",
      scene_52: "Wrap test wrap test wrap test wrap test wrap test wrap test.",
      scene_69:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      scene_70: "OK",
      scene_94: "Done",
    },
    {
      name: "Charlie",
      age: 28,
      scene_18: "Test",
      scene_29:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      scene_30: "Mix of short and long content to see how UI behaves.",
      scene_40: "1234567890123456789012345678901234567890",
      scene_41: "Another superlongwordwithoutspacesjusttotestoverflowhandling",
      scene_46: "Normal sentence.",
      scene_52: "Wrap test wrap test wrap test wrap test wrap test wrap test.",
      scene_69:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      scene_70: "OK",
      scene_94: "Done",
    },
    {
      name: "Charlie",
      age: 28,
      scene_18: "Test",
      scene_29:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      scene_30: "Mix of short and long content to see how UI behaves.",
      scene_40: "1234567890123456789012345678901234567890",
      scene_41: "Another superlongwordwithoutspacesjusttotestoverflowhandling",
      scene_46: "Normal sentence.",
      scene_52: "Wrap test wrap test wrap test wrap test wrap test wrap test.",
      scene_69:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      scene_70: "OK",
      scene_94: "Done",
    },
    {
      name: "Charlie",
      age: 28,
      scene_18: "Test",
      scene_29:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      scene_30: "Mix of short and long content to see how UI behaves.",
      scene_40: "1234567890123456789012345678901234567890",
      scene_41: "Another superlongwordwithoutspacesjusttotestoverflowhandling",
      scene_46: "Normal sentence.",
      scene_52: "Wrap test wrap test wrap test wrap test wrap test wrap test.",
      scene_69:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      scene_70: "OK",
      scene_94: "Done",
    },
  ];

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

  return <DataTable data={mockData} />;
}
