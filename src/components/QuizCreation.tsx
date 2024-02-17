"use client";
import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { quizCreationSchema } from "@/schemas/form/quiz";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Button } from "./ui/button";

import {
  Form,

  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  FormControl,
} from "./ui/form";
import { Input } from "./ui/input";

type Props = {};
type Input = z.infer<typeof quizCreationSchema>;

const QuizCreation = (props: Props) => {
  const form = useForm<Input>({
    resolver: zodResolver(quizCreationSchema),
    defaultValues: {
      topic: "",
      type: "mcq",
      amount: 5,
    },
  });
  function onSubmit(data: Input) {
    console.log(data);
  }


  return (
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
      <Card>
        <CardHeader>
          <CardTitle className="font-bold text-2x">Quiz Creation</CardTitle>
          <CardDescription>Choose a topic.</CardDescription>
          <CardContent>
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-8"
              >
                <FormField
                  control={form.control}
                  name="topic"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Username</FormLabel>
                      <FormControl>
                        <Input placeholder="shadcn" {...field} />
                      </FormControl>
                      <FormDescription>
                        This is your public display name.
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button type="submit">Submit</Button>
              </form>
            </Form>
            
          </CardContent>
        </CardHeader>
      </Card>
    </div>
  );
};

export default QuizCreation;
