import NextAuth, { NextAuthOptions } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import { createClient } from '@supabase/supabase-js';

// Define the types for your Supabase User
interface SupabaseUser {
  id: string;
  username: string;
  img?: string;
}

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL as string,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY as string
);

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: 'Supabase',
      credentials: {
        username: { label: 'Username', type: 'text', placeholder: 'Your username' },
      },
      async authorize(credentials) {
        if (!credentials?.username) {
          return null;
        }

        // Fetching the user from the database using the Supabase client
        const { data, error } = await supabase
          .from('users') // Do not specify generic type
          .select('*')
          .eq('username', credentials.username)
          .single();

        if (error || !data) {
          return null;
        }

        // Returning the user data with the correct types
        return {
          id: data.id,
          name: data.username,
          image: data.img, // Include the image if available
        };
      },
    }),
  ],
  pages: {
    signIn: '/auth/signin', // Custom sign-in page
  },
  callbacks: {
    async session({ session, token }) {
      if (session.user) {
        session.user.name = token.sub as string; // Ensure type casting for token.sub
      }
      return session;
    },
    async jwt({ token, user }) {
      if (user) {
        token.sub = user.name as string; // Ensure type casting for user.id
      }
      return token;
    },
  },
  secret: process.env.NEXTAUTH_SECRET,
};

// Use NextAuth handler with the defined options
export default NextAuth(authOptions);
