import NextAuth from "next-auth"
import GithubProvider from "next-auth/providers/github"
import GoogleProvider from "next-auth/providers/google"
import CredentialsProvider from "next-auth/providers/credentials"

export const authOptions = {
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_SECRET,
    }),
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email", placeholder:"john@gmail.com" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        // Dummy user data for example
        const user = {
          id: "1",
          name: "John Doe",
          email: "john@gmail.com",
          password: "12345",
        }

        if (credentials?.email === user.email && credentials?.password === user.password) {
          return user
        }
        return null
      },
    }),
  ],
  
  session: {
    strategy: "jwt",
  },

  secret: process.env.NEXTAUTH_SECRET,

 
}

export default NextAuth(authOptions)
