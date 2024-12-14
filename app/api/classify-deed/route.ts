import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { deed } = body;


    if (!deed || typeof deed !== 'string') {
      return NextResponse.json({ message: 'Please provide a valid deed.' }, { status: 400 });
    }


    const response = await fetch('https://api.groq.com/openai/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${process.env.GROQCLOUD_API_KEY}`, 
      },
      body: JSON.stringify({
        model: 'llama3-8b-8192', 
        messages: [
          {
            role: 'user',
            content: `Classify the following deed as either "good" or "bad": "${deed}". Respond only with "good" or "bad".`
          }
        ],
        max_tokens: 10,
        temperature: 0.7,
      }),
    });

    const data = await response.json();
    if (data.error) {
      console.error('GroqCloud API Error:', data.error);
      return NextResponse.json({ message: 'Error from GroqCloud API', error: data.error }, { status: 500 });
    }
    const result = data.choices?.[0]?.message?.content?.trim().toLowerCase();

    if (result === 'good' || result === 'bad') {
      return NextResponse.json({ result });
    } else {
      return NextResponse.json({ result: 'Unable to classify.' });
    }
  } catch (error) {
    console.error('Error classifying deed:', error);
    return NextResponse.json({ message: 'Internal server error'}, { status: 500 });
  }
}
