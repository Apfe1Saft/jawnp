import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function getLikesByReportId(reportId: string) {
    try {
      const likes = await prisma.like.findMany({
        where: { reportId },
        include: {
          user: true,
          report: true
        }
      });
      
      const count = await prisma.like.count({
        where: { reportId }
      });
  
      return { likes, count };
    } catch (error) {
      console.error('Error fetching likes by report ID:', error);
      throw new Error('Could not fetch likes for the report');
    }
  }


  export async function likeReport(reportId: string, userId: string) {
    try {
        const existingLike = await prisma.like.findUnique({
            where: {
                userId_reportId: {
                    userId,
                    reportId
                }
            }
        });

        if (existingLike) {
            throw new Error('User has already liked this report');
        }

        const newLike = await prisma.like.create({
            data: {
                reportId,
                userId
            }
        });

        return newLike;
    } catch (error) {
        console.error('Error liking report:', error);
        throw new Error('Could not like the report');
    }
}

export async function isLiked(reportId: string, userId: string) {
  try {
      const like = await prisma.like.findUnique({
          where: {
              userId_reportId: {
                  userId,
                  reportId
              }
          }
      });

      return like !== null;
  } catch (error) {
      console.error('Error checking if report is liked:', error);
      throw new Error('Could not check if the report is liked');
  }
}