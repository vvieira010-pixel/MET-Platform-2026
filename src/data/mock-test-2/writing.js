export const WRITING_TASKS = {
  task1: {
    label: 'Task 1 — Short Responses',
    instructions: 'Answer each question in 2-4 sentences.',
    questions: [
      { id: 'w1', text: 'What is your favorite hobby? How long have you been doing it?', rows: 5 },
      { id: 'w2', text: 'What do you enjoy most about it? Why?', rows: 5 },
      { id: 'w3', text: 'Tell us about a time when you shared this hobby with someone else.', rows: 6 },
    ],
  },
  task2: {
    label: 'Task 2 — Formal Essay',
    instructions: 'Write a well-structured essay of 250+ words.',
    prompt: 'Many people believe that learning a second language is important for personal and professional development. However, some people find it difficult to find the time or motivation to learn. What are the benefits of learning a second language, and what can be done to make language learning more accessible and enjoyable for adults?',
    rows: 16,
  },
};
