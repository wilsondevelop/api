/*
  Warnings:

  - Added the required column `repeat` to the `trainings` table without a default value. This is not possible if the table is not empty.
  - Added the required column `serie` to the `trainings` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "trainings_name_key";

-- AlterTable
ALTER TABLE "trainings" ADD COLUMN     "repeat" TEXT NOT NULL,
ADD COLUMN     "serie" TEXT NOT NULL,
ALTER COLUMN "name" DROP NOT NULL;
