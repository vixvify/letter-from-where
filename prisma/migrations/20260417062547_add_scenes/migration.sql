-- CreateTable
CREATE TABLE "Data" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "age" INTEGER NOT NULL,
    "scene_18" TEXT NOT NULL,
    "scene_29" TEXT NOT NULL,
    "scene_30" TEXT,
    "scene_40" TEXT NOT NULL,
    "scene_41" TEXT,
    "scene_46" TEXT NOT NULL,
    "scene_52" TEXT NOT NULL,
    "scene_69" TEXT NOT NULL,
    "scene_70" TEXT,
    "scene_94" TEXT NOT NULL,

    CONSTRAINT "Data_pkey" PRIMARY KEY ("id")
);
