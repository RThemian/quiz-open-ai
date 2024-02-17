import {z} from "zod"; //explain zod here 
// zod is a TypeScript-first schema declaration and validation library. It is designed to be easy to use with TypeScript and to generate correct code.  
// zod correctly handles edge cases for form validation and is a good choice for form validation in TypeScript projects.
// some limitations of zod are that it is not as popular as other libraries like yup and joi, and it is not as feature-rich as other libraries.

export const quizCreationSchema = z.object({
    topic: z.string().min(4, {message: "Topic must be at least 4 characters long"}).max(50, {message: "Topic must be at most 50 characters long"}),
    type: z.enum(["mcq", "open_ended"]),
    amount: z.number().min(1).max(10),
});

