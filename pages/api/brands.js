import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handler(req, res) {
    if (req.method === 'GET') {
        return await getBrands(req, res);
    } else {
        return res.status(405).json({ message: 'Method not allowed', success: false });
    }
}

const getBrands = async (req, res) => {
    try {
        const brands = await prisma.brands.findMany();

        if (brands.length !== 0) {
            res.status(200).json(brands, { success: true });
        } else {
            res.status(500).json({ message: 'Marcas no encontradas' });
        }
    } catch (error) {
        res.status(500).json({ message: `Error ${error}`, success: false });
    }
};
