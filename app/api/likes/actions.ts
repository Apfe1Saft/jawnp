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