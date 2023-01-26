/*
  Warnings:

  - You are about to drop the column `authorId` on the `Post` table. All the data in the column will be lost.
  - You are about to drop the column `content` on the `Post` table. All the data in the column will be lost.
  - You are about to drop the column `published` on the `Post` table. All the data in the column will be lost.
  - You are about to drop the column `email` on the `User` table. All the data in the column will be lost.
  - Added the required column `text` to the `Post` table without a default value. This is not possible if the table is not empty.
  - Added the required column `theme` to the `Post` table without a default value. This is not possible if the table is not empty.
  - Added the required column `userId` to the `Post` table without a default value. This is not possible if the table is not empty.
  - Added the required column `city` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `description` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `lastName` to the `User` table without a default value. This is not possible if the table is not empty.
  - Made the column `name` on table `User` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE `Post` DROP FOREIGN KEY `Post_authorId_fkey`;

-- DropIndex
DROP INDEX `User_email_key` ON `User`;

-- AlterTable
ALTER TABLE `Post` DROP COLUMN `authorId`,
    DROP COLUMN `content`,
    DROP COLUMN `published`,
    ADD COLUMN `text` VARCHAR(191) NOT NULL,
    ADD COLUMN `theme` VARCHAR(191) NOT NULL,
    ADD COLUMN `userId` INTEGER NOT NULL;

-- AlterTable
ALTER TABLE `User` DROP COLUMN `email`,
    ADD COLUMN `city` VARCHAR(191) NOT NULL,
    ADD COLUMN `description` VARCHAR(191) NOT NULL,
    ADD COLUMN `lastName` VARCHAR(191) NOT NULL,
    MODIFY `name` VARCHAR(191) NOT NULL;

-- AddForeignKey
ALTER TABLE `Post` ADD CONSTRAINT `Post_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
