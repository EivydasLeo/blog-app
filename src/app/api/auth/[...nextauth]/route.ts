import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";

if (process.env.GOOGLE_CLIENT_ID == null) {
    throw new Error("GOOGLE_CLIENT_ID environment variable is not defined");
}

if (process.env.GOOGLE_CLIENT_SECRET == null) {
    throw new Error("GOOGLE_CLIENT_SECRET environment variable is not defined");
}

const handler = NextAuth({
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
            authorization: {
                params: {
                    prompt: "login",
                },
            },
        }),
    ],
    callbacks: {
        async signIn({ account, profile }) {
            if (
                account != null &&
                profile != null &&
                account.provider === "google" &&
                profile.email !== process.env.GOOGLE_CLIENT_EMAIL
            ) {
                throw new Error("Access Denied");
            }

            return true;
        },
    },
    pages: {
        error: "/dashboard/login",
    },
});

export { handler as GET, handler as POST };
