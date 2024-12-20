-- CreateEnum
CREATE TYPE "Topics" AS ENUM ('Array', 'String', 'Hash_Table', 'Dynamic_Programming', 'Math', 'Sorting', 'Greedy', 'Depth_First_Search', 'Database', 'Binary_Search', 'Matrix', 'Tree', 'Breadth_First_Search', 'Bit_Manipulation', 'Two_Pointers', 'Prefix_Sum', 'Priority_Queue', 'Binary_Tree', 'Simulation', 'Stack', 'Graph', 'Counting', 'Sliding_Window', 'Backtracking', 'Linked_List');

-- CreateEnum
CREATE TYPE "Difficulty" AS ENUM ('Easy', 'Medium', 'Hard');

-- CreateTable
CREATE TABLE "Testcases" (
    "testcaseId" TEXT NOT NULL,
    "problemId" TEXT NOT NULL,
    "input" TEXT NOT NULL,
    "output" TEXT NOT NULL,

    CONSTRAINT "Testcases_pkey" PRIMARY KEY ("testcaseId")
);

-- CreateTable
CREATE TABLE "Problems" (
    "problemId" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "statement" TEXT NOT NULL,
    "difficulty" "Difficulty" NOT NULL,
    "topics" "Topics"[],

    CONSTRAINT "Problems_pkey" PRIMARY KEY ("problemId")
);

-- AddForeignKey
ALTER TABLE "Testcases" ADD CONSTRAINT "Testcases_problemId_fkey" FOREIGN KEY ("problemId") REFERENCES "Problems"("problemId") ON DELETE RESTRICT ON UPDATE CASCADE;
