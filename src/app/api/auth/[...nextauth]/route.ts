//handles any request to /api/auth/* and passes it to the nextAuth handler
import { authOptions } from "@/lib/nextauth";

import NextAuth from "next-auth/next";

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST}
// explain what handler does: 
