// src/components/utils/openai.js

import OpenAI from 'openai';

const openai = new OpenAI({
  apiKey: "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",
  dangerouslyAllowBrowser: true 
  // This is also the default, can be omitted
});


export const askOpenAI = async (question) => {
  try {
    const response = await openai.createCompletion({
      model: 'text-davinci-003',
      prompt: question,
      max_tokens: 150,
      n: 1,
      stop: null,
      temperature: 0.7,
    });
    return response.data.choices[0].text.trim();
  } catch (error) {
    console.error('Error:', error);
    return 'Sorry, something went wrong. Please try again.';
  }
};
