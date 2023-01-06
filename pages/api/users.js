// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handler(req, res) {
    if (req.method === 'POST') {
        return await getUserAdmin(req, res);
    } else {
        return res.status(405).json({ message: 'Method not allowed', success: false });
    }
}

const getUserAdmin = async (req, res) => {
    const body = req.body;

    try {
        const user = await prisma.user.findMany({
            where: {
                username: {
                    equals: body.username,
                },
                password: {
                    equals: body.password,
                },
                role: {
                    equals: 'admin',
                },
            },
        });

        if (user.length !== 0) {
            res.status(200).json(user[0], { success: true });
        } else {
            res.status(500).json({ message: 'Usuario no encontrado' });
        }
    } catch (error) {
        res.status(500).json({ message: `Error ${error}`, success: false });
    }
};
