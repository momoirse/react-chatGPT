import openai from 'openai';

const API_KEY = process.env.REACT_APP_OPENAI_API_KEY;

openai.apiKey = API_KEY;

export async function generateResponse(input, model) {
  const response = await openai.Completion.create(
    {
      prompt: input,
      temperature: 0.5,
      max_tokens: 2048,
      top_p: 1,
      frequency_penalty: 0,
      presence_penalty: 0,
      model,
    },
    {
      apiKey: API_KEY,
    }
  );
  return response.choices[0].text;
}
