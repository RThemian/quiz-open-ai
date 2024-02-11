//handles any request to /api/auth/* and passes it to the nextAuth handler
import { authOptions } from "@/lib/nextauth";

import NextAuth from "next-auth/next";

console.log('Auth options:', authOptions);
// console log all the options to see what is being passed to the handler
console.dir(authOptions, { depth: null });

const handler = NextAuth(authOptions);


export { handler as GET, handler as POST}