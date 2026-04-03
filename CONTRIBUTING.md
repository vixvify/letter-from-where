# Contributing Guide

เอกสารนี้เป็นกติกาบังคับของทีม

## Commit Message (บังคับใช้)

ต้องใช้รูปแบบนี้เท่านั้น:
- `<type>: <short description>`

`type` ที่อนุญาต:
- `feat`
- `fix`
- `refactor`
- `docs`
- `test`
- `chore`

กติกา description:
- สั้น กระชับ ชัดเจน
- ใช้ภาษาเดียวกันทั้ง repo (แนะนำอังกฤษ)
- ห้ามใช้ข้อความกำกวม เช่น `update`, `edit`, `change`

ตัวอย่างที่ถูก:
- `feat: add sidebar collapse toggle`
- `fix: correct notification icon color in navbar`
- `docs: enforce branch and commit naming rules`
- `test: add auth error mapping unit tests`

ตัวอย่างที่ผิด:
- `Create Navbar Component`
- `update code`
- `fix sidebar`
- `edited files`

## ก่อน push ทุกครั้ง
```bash
npm run lint
npm run typecheck
npm run test
npm run build
```