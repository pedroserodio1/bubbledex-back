-- CreateTable
CREATE TABLE "Hability" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Hability_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Hability_person" (
    "id" TEXT NOT NULL,
    "personsId" TEXT,
    "habilityId" TEXT NOT NULL,

    CONSTRAINT "Hability_person_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Persons" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "twitter_user" TEXT NOT NULL,
    "twitter_link" TEXT NOT NULL,
    "discord_name" TEXT NOT NULL,
    "anilist_mal" TEXT,
    "picture" TEXT,
    "description" TEXT NOT NULL,
    "link" TEXT,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Persons_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Hability_person" ADD CONSTRAINT "Hability_person_habilityId_fkey" FOREIGN KEY ("habilityId") REFERENCES "Hability"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Hability_person" ADD CONSTRAINT "Hability_person_personsId_fkey" FOREIGN KEY ("personsId") REFERENCES "Persons"("id") ON DELETE SET NULL ON UPDATE CASCADE;
