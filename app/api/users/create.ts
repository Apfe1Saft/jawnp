import { PrismaClient } from '@prisma/client';
import { NextApiRequest, NextApiResponse } from 'next';

const prisma = new PrismaClient();

export default async function(req:NextApiRequest, res:NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }


  try {
    const { name, surname, email, fieldOfWork, linkedInLink, githubLink, password, login, softSkills, hardSkills, careerGoals } = req.body;
    console.log("CREATE NEW")
    const newUser = await prisma.user.create({
      data: {
        name, surname, email, fieldOfWork, linkedInLink, githubLink, password, login, softSkills, hardSkills, careerGoals,
      },
    });

    res.status(201).json({ message: 'User created successfully', user: newUser });
  } catch (error) {
    console.error('Error creating user:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
}