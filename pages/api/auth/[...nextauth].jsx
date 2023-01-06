import { PrismaClient } from '@prisma/client';
import nextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import { useLoginMutation } from '../../../app/services/auth';

const prisma = new PrismaClient();

export default nextAuth({
    providers: [
        CredentialsProvider({
            name: 'Credentials',
            async authorize(credentials, req) {},
        }),
    ],
});
