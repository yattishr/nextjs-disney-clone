// https://func-disney-clone.azurewebsites.net/api/getaisuggestion

import {
  app,
  HttpRequest,
  HttpResponseInit,
  InvocationContext,
} from "@azure/functions";

import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

async function getAISuggestion(
  request: HttpRequest,
  context: InvocationContext
): Promise<HttpResponseInit> {
  context.log(`Http function processed request for url "${request.url}"`);

  const term = request.query.get("term");
  // const name = request.query.get('name') || await request.text() || 'world';

  const completion = await openai.chat.completions.create({
    messages: [
      {
        role: "system",
        content: `You are a digital video assistant working for streaming services such 
                    as Netflix, Disney Plus and Amazon Prime. Your job is to provide suggestions based on the videos the user specifies.
                    Provide a quirky breakdown of what the user should watch next! It should only list the names of the titles 
                    after the introduction. Keep the response short and sweet. Always list at least 3 titles as suggestions. 
                    If the user mentions a genre, you should provide a suggestion based on that genre.`,
      },
      { role: "user", content: `I like ${term}` },
    ],
    model: "gpt-3.5-turbo",
  });
  console.log(completion.choices[0]);
  return { body: completion.choices[0].message.content || "No suggestions." };
}

export default app.http("getAISuggestion", {
  methods: ["GET"],
  authLevel: "anonymous",
  handler: getAISuggestion,
});
