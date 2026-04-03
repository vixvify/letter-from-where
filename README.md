## 🛠️ Tech Stack

- Next.js
- Tailwind CSS

## เริ่มใช้งานในเครื่อง
1. ติดตั้ง dependency
```bash
npm install
```
2. ตั้งค่า environment
```bash
.env.example .env.local
```
3. ปรับค่า API URL ใน `.env.local`
```env
DATABASE_URL=
APP_ENV=dev

NEXT_PUBLIC_URL_SCENE_1=
NEXT_PUBLIC_URL_SCENE_2=
...
```
4. รัน dev server
```bash
npm run dev
```

## การรันด้วย Docker
1. Build Docker Image
```bash
docker build -t you-belong-here .
```
2. Run Container
```bash
docker run -p 3000:3000 you-belong-here
```
