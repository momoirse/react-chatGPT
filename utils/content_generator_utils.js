import openai from 'openai';

const API_KEY = process.env.REACT_APP_OPENAI_API_KEY;

openai.apiKey = API_KEY;

export async function generateContent(type, domain, keywords) {
  const response = await openai.Completion.create(
    {
      prompt: `generate ${type} for scientific paper in ${domain} on ${keywords}`,
      temperature: 0.5,
      max_tokens: 2048,
      top_p: 1,
      frequency_penalty: 0,
      presence_penalty: 0,
      model: 'text-davinci-002',
    },
    {
      apiKey: API_KEY,
    }
  );
  return response.choices[0].text;
}
