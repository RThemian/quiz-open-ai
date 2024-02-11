import { Button } from "@/components/ui/button";
import { prisma } from "@/lib/db";
//make server component with async
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";


export default async function Home() {
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
        
      </Card>
    </div>
    );
}