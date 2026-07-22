// Speaking — MET Mock Test 2

export const SPEAKING_TASKS = {
  id: 'speaking',
  label: 'Speaking',
  instructions: 'You will complete 5 speaking tasks. Each task has a preparation time and a speaking time.',
  tasks: [
    {
      id: 'spk1',
      label: 'Task 1 — Personal Experience',
      prompt: 'Describe a memorable celebration you attended. What was the occasion? Who was there? What made it special?',
      prepTime: 30,
      speakTime: 60,
      audio: 'speaking/speaking_prompt01.mp3',
    },
    {
      id: 'spk2',
      label: 'Task 2 — Picture Description',
      prompt: 'Look at the picture. Describe what you see in as much detail as possible. What are the people doing? What is the setting?',
      prepTime: 30,
      speakTime: 60,
      audio: 'speaking/speaking_prompt02.mp3',
    },
    {
      id: 'spk3',
      label: 'Task 3 — Opinion',
      prompt: 'Some people think that schools should teach practical life skills like cooking and budgeting. Others believe schools should focus only on academic subjects. What is your opinion? Give reasons and examples.',
      prepTime: 30,
      speakTime: 60,
      audio: 'speaking/speaking_prompt03.mp3',
    },
    {
      id: 'spk4',
      label: 'Task 4 — Problem Solving',
      prompt: 'Your friend wants to study abroad but is worried about the cost and being far from family. What advice would you give? Explain your reasoning.',
      prepTime: 30,
      speakTime: 60,
      audio: 'speaking/speaking_prompt04.mp3',
    },
    {
      id: 'spk5',
      label: 'Task 5 — Advantages and Disadvantages',
      prompt: 'Many companies now allow employees to work from home. What are the advantages and disadvantages of remote work? Which do you think is better?',
      prepTime: 30,
      speakTime: 60,
      audio: 'speaking/speaking_prompt05.mp3',
    },
  ],
};