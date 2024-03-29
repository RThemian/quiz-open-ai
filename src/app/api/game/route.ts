import { prisma } from "@/lib/db";
import { getAuthSession } from "@/lib/nextauth";
import { quizCreationSchema } from "@/schemas/form/quiz";
import { NextResponse } from "next/server";
import { z } from "zod";
import axios from "axios";

export async function POST(req: Request, res: Response) {
  try {
    const session = await getAuthSession();
    if (!session?.user) {
      return NextResponse.json(
        { error: "You must be logged in to create a game." },
        {
          status: 401,
        }
      );
    }
    const body = await req.json();
    const { topic, type, amount } = quizCreationSchema.parse(body);
    const game = await prisma.game.create({
      data: {
        gameType: type,
        timeStarted : new Date(),
        userId: session.user.id,
        topic,
        },
      });
      const {data} = await axios.post(`${process.env.API_URL}/api/quiz`, {
        topic,
        type,
        amount,
      });
      if (type == "mcq") {
        type mcqQuestion = {
            question: string,
            answer: string,
            option1: string,
            option2: string,
            option3: string,
        }
        let manyData = data.questions.map((question: mcqQuestion) => {
            let options = [question.answer, question.option1, question.option2, question.option3]
            options = options.sort(() => Math.random() - 0.5) // shuffle the options
            return {
                question: question.question,
                answer: question.answer,
                options,
                gameId: game.id,
            }
        })
            await prisma.question.createMany({
                data: manyData
            })
          } else if (type === "open_ended") {
            type openQuestion = {
              question: string;
              answer: string;
            };
            let manyData = data.questions.map((question: openQuestion) => {
              return {
                question: question.question,
                answer: question.answer,
                gameId: game.id,
                questionType: "open_ended",
              };
            });
            await prisma.question.createMany({
              data: manyData,
            });
          }
      
          return NextResponse.json({ gameId: game.id }, { status: 200 });
        } catch (error) {
          if (error instanceof z.ZodError) {
            return NextResponse.json(
              { error: error.issues },
              {
                status: 400,
              }
            );
          } else {
            return NextResponse.json(
              { error: "An unexpected error occurred." },
              {
                status: 500,
              }
            );
          }
        }
      }
      export async function GET(req: Request, res: Response) {
        try {
          const session = await getAuthSession();
          if (!session?.user) {
            return NextResponse.json(
              { error: "You must be logged in to create a game." },
              {
                status: 401,
              }
            );
          }
          const url = new URL(req.url);
          const gameId = url.searchParams.get("gameId");
          if (!gameId) {
            return NextResponse.json(
              { error: "You must provide a game id." },
              {
                status: 400,
              }
            );
          }
      
          const game = await prisma.game.findUnique({
            where: {
              id: gameId,
            },
            include: {
              questions: true,
            },
          });
          if (!game) {
            return NextResponse.json(
              { error: "Game not found." },
              {
                status: 404,
              }
            );
          }
      
          return NextResponse.json(
            { game },
            {
              status: 400,
            }
          );
        } catch (error) {
          return NextResponse.json(
            { error: "An unexpected error occurred." },
            {
              status: 500,
            }
          );
        }
      }
   