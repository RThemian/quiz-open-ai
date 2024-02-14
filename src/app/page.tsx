import { Button } from "@/components/ui/button";
import { prisma } from "@/lib/db";
//make server component with async
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import SignInButton from "@/components/SignInButton";
import {redirect} from "next/navigation";
import { getAuthSession } from "@/lib/nextauth";


export default async function Home() {
  const session = await getAuthSession();
  if (session?.user) {
    redirect("/dashboard");
  } 
  return (
    <div className="absolute -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
      <Card className="w- [300px]">
        <CardHeader>
          <CardTitle>
            Welcome to Open AI Quiz
          </CardTitle>
          <CardDescription>
            Create and Share Quizzes from AI
          </CardDescription>
        </CardHeader>
        <CardContent>
          <SignInButton text = "Sign in with Google" />
        </CardContent>
      </Card>
    </div>
    );
}