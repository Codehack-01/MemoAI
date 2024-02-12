export async function sendMsgToOpenAI(message) {
    try {
      const res = await openai.createCompletion({
        model: 'text-davinci-003',
        prompt: message,
        temperature: 0.7,
        max_tokens: 256,
        top_p: 1,
        frequency_penalty: 0,
        presence_penalty: 0,
      });
  
      console.log('OpenAI API Response:', res);
  
      return res.data.choices[0].text;
    } catch (error) {
      console.error('Error sending message to OpenAI:', error);
      return 'Error occurred while processing the message.';
    }
  }