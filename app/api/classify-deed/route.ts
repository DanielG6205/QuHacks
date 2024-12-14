import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { deed } = body;

    if (!deed || typeof deed !== 'string') {
      return NextResponse.json({ message: 'Please provide a valid deed.' }, { status: 400 });
    }

    const response = await fetch('https://api.openai.com/v1/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`,
      },
      body: JSON.stringify({
        model: 'text-davinci-003', 
        prompt: `You are an AI classifier. Classify the following deed as either "good" or "bad" with no other explanations. Respond only with the word "good" or "bad". Deed: "${deed}".`,
        max_tokens: 10,
        temperature: 0.7,
      }),
    });

    const data = await response.json();

    if (data.error) {
      console.error('OpenAI API Error:', data.error);
      return NextResponse.json({ message: 'Error from OpenAI API' }, { status: 500 });
    }

    if (!Array.isArray(data.choices) || data.choices.length === 0) {
      console.error('Unexpected API response format:', data);
      return NextResponse.json({ message: 'Unexpected response from OpenAI API' }, { status: 500 });
    }

    const result = data.choices[0].text?.trim().toLowerCase();

    if (result === 'good' || result === 'bad') {
      return NextResponse.json({ result });
    } else {
      return NextResponse.json({ result: 'Unable to classify.' });
    }
  } catch (error) {
    console.error('Error classifying deed:', error);
    return NextResponse.json({ message: 'Internal server error' }, { status: 500 });
  }
}
