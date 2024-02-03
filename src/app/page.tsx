import { Button } from "@/components/ui/button";
import { prisma } from "@/lib/db";

export default function Home() {
  return (
    <Button variant="destructive">Hello World</Button>
  );
}