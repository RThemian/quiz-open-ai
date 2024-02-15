// boilerplate code for quiz page
import { redirect } from 'next/navigation';
import React from 'react';
import { getAuthSession } from '@/lib/nextauth';
import QuizCreation from "@/components/QuizCreation"

type Props = {}; // add props here explain: https://reactjs.org/docs/components-and-props.html

//metadata for the page
export const metadata = {
    title: "Quiz",
    description: "Take a quiz on a topic",
    url: "/quiz",
    image: "",
    keywords: ["quiz", "topic", "test"],
  };

const QuizPage = async (props: Props) => {
    const session = await getAuthSession();
    if (!session?.user) {
        return redirect("/");
    }

    return (
        <QuizCreation />
    );
    };

export default QuizPage;