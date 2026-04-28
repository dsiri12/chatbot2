import { VercelRequest, VercelResponse } from "@vercel/node";
import OpenAI from "openai";

const client = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export default async function handler(req: VercelRequest, res: VercelResponse) {
  const { question } = req.body;

  const response = await client.chat.completions.create({
    model: "gpt-5-nano",
    messages: [
      { role: "system", content: "Answer in 20 words or fewer." },
      { role: "user", content: question },
    ],
  });

  res.status(200).send(response.choices[0]?.message?.content);
}
