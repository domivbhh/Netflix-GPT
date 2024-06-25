import OpenAI from 'openai'


const openai = new OpenAI({
  apiKey: import.meta.env.VITE_GPT_API,
  dangerouslyAllowBrowser: true,
});


export default openai;
