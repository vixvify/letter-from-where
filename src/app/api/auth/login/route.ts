import jwt from "jsonwebtoken";
import { success, fail } from "@/lib/response";

export async function POST(req: Request) {
  try {
    const { password } = await req.json();

    if (password !== process.env.PASSWORD) {
      return fail("Invalid password", 401, "INVALID_PASSWORD");
    }

    if (!process.env.JWT_SECRET) {
      return fail("Server misconfigured", 500, "MISSING_SECRET");
    }

    const token = jwt.sign({ role: "admin" }, process.env.JWT_SECRET, {
      expiresIn: "1h",
    });

    const res = success({ success: true }, 200, "LOGIN_SUCCESS");

    res.cookies.set("token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      path: "/",
    });

    return res;
  } catch (err) {
    console.error(err);
    return fail("Internal server error", 500, "INTERNAL_ERROR");
  }
}
