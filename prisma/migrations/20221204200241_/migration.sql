-- CreateTable
CREATE TABLE "members" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "members_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "exercicies" (
    "id" SERIAL NOT NULL,
    "memberId" INTEGER NOT NULL,
    "name" TEXT NOT NULL,
    "video" TEXT NOT NULL,
    "description" TEXT,
    "createdAt" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "exercicies_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "trainings" (
    "id" SERIAL NOT NULL,
    "exercicieId" INTEGER NOT NULL,
    "personalId" TEXT NOT NULL,
    "customerId" TEXT NOT NULL,
    "video" TEXT NOT NULL,
    "description" TEXT,
    "createdAt" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "expiresIn" TIMESTAMP(3),
    "repeat" TEXT NOT NULL,
    "serie" TEXT NOT NULL,

    CONSTRAINT "trainings_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "log_trainings" (
    "id" SERIAL NOT NULL,
    "trainingId" INTEGER NOT NULL,
    "customerId" TEXT NOT NULL,
    "isDone" BOOLEAN DEFAULT true,
    "createdAt" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "log_trainings_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "members_name_key" ON "members"("name");

-- CreateIndex
CREATE UNIQUE INDEX "exercicies_name_key" ON "exercicies"("name");

-- AddForeignKey
ALTER TABLE "exercicies" ADD CONSTRAINT "exercicies_memberId_fkey" FOREIGN KEY ("memberId") REFERENCES "members"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "trainings" ADD CONSTRAINT "trainings_exercicieId_fkey" FOREIGN KEY ("exercicieId") REFERENCES "exercicies"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
