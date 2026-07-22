// Listening — MET Mock Test 2

export const LISTENING_PART1 = {
  id: 'listening-part1',
  label: 'Part 1 — Short Conversations',
  instructions: 'You will hear 19 short conversations. After each, choose the best answer.',
  conversations: [
    { id: 'l1', audio: 'part1/part1_conv01.mp3', question: 'What does the man want to know?', options: ['The time of the next bus', 'The location of a restaurant', 'The price of a ticket', 'The opening hours of the library'], answer: 1 },
    { id: 'l2', audio: 'part1/part1_conv02.mp3', question: 'What are the speakers discussing?', options: ['A restaurant they visited', 'A movie they watched', 'A book they read', 'A concert they attended'], answer: 1 },
    { id: 'l3', audio: 'part1/part1_conv03.mp3', question: 'What does the woman suggest?', options: ['Taking a different route', 'Leaving earlier', 'Cancelling the trip', 'Asking for directions'], answer: 0 },
    { id: 'l4', audio: 'part1/part1_conv04.mp3', question: 'Why is the man calling?', options: ['To make an appointment', 'To complain about a bill', 'To ask about store hours', 'To return a product'], answer: 0 },
    { id: 'l5', audio: 'part1/part1_conv05.mp3', question: 'What does the woman mean?', options: ['She will attend the meeting', 'She cannot attend the meeting', 'She needs to check her schedule', 'She will send someone else'], answer: 1 },
    { id: 'l6', audio: 'part1/part1_conv06.mp3', question: 'What is the main topic of the conversation?', options: ['Planning a vacation', 'Buying a new car', 'Renovating a kitchen', 'Changing jobs'], answer: 2 },
    { id: 'l7', audio: 'part1/part1_conv07.mp3', question: 'What does the man imply about the project?', options: ['It is ahead of schedule', 'It will be delayed', 'It is under budget', 'It has been cancelled'], answer: 1 },
    { id: 'l8', audio: 'part1/part1_conv08.mp3', question: 'What does the woman ask the man to do?', options: ['Review a document', 'Call a client', 'Attend a training', 'Submit a report'], answer: 0 },
    { id: 'l9', audio: 'part1/part1_conv09.mp3', question: 'What is the relationship between the speakers?', options: ['Colleagues', 'Doctor and patient', 'Teacher and student', 'Customer and clerk'], answer: 3 },
    { id: 'l10', audio: 'part1/part1_conv10.mp3', question: 'What does the man say about the weather?', options: ['It will rain tomorrow', 'It is warmer than expected', 'A storm is approaching', 'The forecast is uncertain'], answer: 1 },
    { id: 'l11', audio: 'part1/part1_conv11.mp3', question: 'Why is the woman excited?', options: ['She got a promotion', 'She finished her degree', 'She won a competition', 'She is going on vacation'], answer: 0 },
    { id: 'l12', audio: 'part1/part1_conv12.mp3', question: 'What does the man recommend?', options: ['The chicken dish', 'The vegetarian option', 'The fish special', 'The soup of the day'], answer: 1 },
    { id: 'l13', audio: 'part1/part1_conv13.mp3', question: 'What problem does the woman mention?', options: ['Her computer crashed', 'She lost her keys', 'The printer is broken', 'She forgot a password'], answer: 2 },
    { id: 'l14', audio: 'part1/part1_conv14.mp3', question: 'What does the man say about the new policy?', options: ['He agrees with it', 'He thinks it is unclear', 'He was not informed', 'He wants to change it'], answer: 1 },
    { id: 'l15', audio: 'part1/part1_conv15.mp3', question: 'Where does this conversation take place?', options: ['At a train station', 'In a library', 'At an airport', 'In a hotel lobby'], answer: 2 },
    { id: 'l16', audio: 'part1/part1_conv16.mp3', question: 'What does the woman want to do?', options: ['Change her reservation', 'Extend her stay', 'Cancel her booking', 'Upgrade her room'], answer: 0 },
    { id: 'l17', audio: 'part1/part1_conv17.mp3', question: 'What is the man\'s opinion of the film?', options: ['It was boring', 'It was excellent', 'It was confusing', 'It was too long'], answer: 1 },
    { id: 'l18', audio: 'part1/part1_conv18.mp3', question: 'What does the woman say about the schedule?', options: ['It is flexible', 'It is fixed', 'It has changed', 'It is not finalized'], answer: 2 },
    { id: 'l19', audio: 'part1/part1_conv19.mp3', question: 'What does the man suggest they do?', options: ['Wait for the next one', 'Take a different route', 'Call for a ride', 'Walk instead'], answer: 1 },
  ],
};

export const LISTENING_PART2 = {
  id: 'listening-part2',
  label: 'Part 2 — Longer Conversations',
  instructions: 'You will hear 4 conversations. Each conversation is followed by 3–4 questions.',
  conversations: [
    {
      id: 'conv-a',
      audio: 'part2/conv a.mp3',
      questions: [
        { id: 'l20', question: 'What is the main purpose of the conversation?', options: ['To plan a team event', 'To discuss a project deadline', 'To assign new tasks', 'To review a budget'], answer: 1 },
        { id: 'l21', question: 'What does the woman say about the client?', options: ['The client is satisfied', 'The client wants changes', 'The client cancelled the contract', 'The client asked for a discount'], answer: 1 },
        { id: 'l22', question: 'What does the man suggest doing?', options: ['Hiring more staff', 'Extending the timeline', 'Reducing the scope', 'Outsourcing the work'], answer: 1 },
      ],
    },
    {
      id: 'conv-b',
      audio: 'part2/conv b.mp3',
      questions: [
        { id: 'l23', question: 'Where are the speakers?', options: ['At a gym', 'At a doctor\'s office', 'At a pharmacy', 'At a health food store'], answer: 1 },
        { id: 'l24', question: 'What does the doctor recommend?', options: ['More exercise', 'A change in diet', 'Medication', 'Physical therapy'], answer: 1 },
        { id: 'l25', question: 'What concern does the patient express?', options: ['Cost of treatment', 'Side effects', 'Time commitment', 'Effectiveness'], answer: 1 },
        { id: 'l26', question: 'What follow-up does the doctor schedule?', options: ['In two weeks', 'In one month', 'In three months', 'As needed'], answer: 0 },
      ],
    },
    {
      id: 'conv-c',
      audio: 'part2/conv c.mp3',
      questions: [
        { id: 'l27', question: 'What are the speakers discussing?', options: ['A job interview', 'A university application', 'A scholarship', 'A training program'], answer: 1 },
        { id: 'l28', question: 'What does the man say about the deadline?', options: ['It has been extended', 'It is next Friday', 'It was yesterday', 'It is flexible'], answer: 1 },
        { id: 'l29', question: 'What document does the woman still need?', options: ['Transcript', 'Recommendation letter', 'Personal statement', 'Test scores'], answer: 1 },
        { id: 'l30', question: 'What does the man offer to do?', options: ['Review her essay', 'Contact the admissions office', 'Write a recommendation', 'Help with the application'], answer: 0 },
      ],
    },
    {
      id: 'conv-d',
      audio: 'part2/conv d.mp3',
      questions: [
        { id: 'l31', question: 'What is the topic of the conversation?', options: ['Buying a house', 'Renting an apartment', 'Renovating a kitchen', 'Moving abroad'], answer: 1 },
        { id: 'l32', question: 'What does the woman say about the neighborhood?', options: ['It is noisy', 'It is safe and quiet', 'It is far from work', 'It has no parking'], answer: 1 },
        { id: 'l33', question: 'What is the rent for the apartment?', options: ['$1,200', '$1,500', '$1,800', '$2,100'], answer: 1 },
      ],
    },
  ],
};

export const LISTENING_PART3 = {
  id: 'listening-part3',
  label: 'Part 3 — Talks',
  instructions: 'You will hear 4 talks. Each talk is followed by 5 questions.',
  talks: [
    {
      id: 'talk-a',
      audio: 'part3/talk a.mp3',
      questions: [
        { id: 'l34', question: 'What is the speaker mainly announcing?', options: ['A new training programme', 'Changes to office hours', 'A company restructuring', 'A holiday schedule'], answer: 0 },
        { id: 'l35', question: 'Who is the target audience for this programme?', options: ['Senior managers', 'All employees', 'New staff members', 'External candidates'], answer: 2 },
        { id: 'l36', question: 'How long does the programme last?', options: ['Two weeks', 'One month', 'Three months', 'Six months'], answer: 2 },
        { id: 'l37', question: 'What is required to complete the programme?', options: ['A final exam', 'A project presentation', '80% attendance', 'A written report'], answer: 1 },
        { id: 'l38', question: 'Where can employees find more information?', options: ['The company intranet', 'The HR office', 'Their manager', 'An email newsletter'], answer: 0 },
      ],
    },
    {
      id: 'talk-b',
      audio: 'part3/talk b.mp3',
      questions: [
        { id: 'l39', question: 'What is the main topic of the talk?', options: ['Urban planning', 'Public transportation', 'Bicycle safety', 'Traffic laws'], answer: 2 },
        { id: 'l40', question: 'According to the speaker, what is the most common cause of bicycle accidents?', options: ['Poor road conditions', 'Cyclist error', 'Driver inattention', 'Bad weather'], answer: 2 },
        { id: 'l41', question: 'What does the speaker recommend for night riding?', options: ['Wearing dark clothing', 'Using lights and reflectors', 'Riding on sidewalks', 'Avoiding busy streets'], answer: 1 },
        { id: 'l42', question: 'What percentage of accidents occur at intersections?', options: ['25%', '40%', '55%', '70%'], answer: 2 },
        { id: 'l43', question: 'What resource does the speaker mention for safe routes?', options: ['A mobile app', 'A city website', 'A printed map', 'A community group'], answer: 0 },
      ],
    },
    {
      id: 'talk-c',
      audio: 'part3/talk c.mp3',
      questions: [
        { id: 'l44', question: 'What is the speaker\'s profession?', options: ['Nutritionist', 'Chef', 'Food scientist', 'Restaurant owner'], answer: 0 },
        { id: 'l45', question: 'What does the speaker say about processed foods?', options: ['They are always unhealthy', 'They can be part of a balanced diet', 'They should be completely avoided', 'They are cheaper than fresh foods'], answer: 1 },
        { id: 'l46', question: 'What is the recommended daily fiber intake?', options: ['15 grams', '25 grams', '35 grams', '45 grams'], answer: 1 },
        { id: 'l47', question: 'Which of the following is NOT mentioned as a source of fiber?', options: ['Whole grains', 'Legumes', 'Dairy products', 'Vegetables'], answer: 2 },
        { id: 'l48', question: 'What does the speaker suggest for reading food labels?', options: ['Focus on calories only', 'Check the ingredient list first', 'Ignore marketing claims', 'Compare similar products'], answer: 1 },
      ],
    },
    {
      id: 'talk-d',
      audio: 'part3/talk d.mp3',
      questions: [
        { id: 'l49', question: 'What historical period does the talk focus on?', options: ['Ancient Rome', 'Medieval Europe', 'The Industrial Revolution', 'World War II'], answer: 2 },
        { id: 'l50', question: 'What was a major effect of the factory system?', options: ['Increased rural population', 'Improved working conditions', 'Urbanization', 'Decreased production costs'], answer: 2 },
        { id: 'l51', question: 'How did the steam engine change transportation?', options: ['Made it slower', 'Made it more expensive', 'Enabled faster movement of goods', 'Reduced the need for roads'], answer: 2 },
        { id: 'l52', question: 'What social change does the speaker mention?', options: ['Rise of the middle class', 'Decline in literacy', 'End of child labor', 'Equality for women'], answer: 0 },
        { id: 'l53', question: 'What does the speaker say about the long-term impact?', options: ['It was mostly negative', 'It laid the foundation for modern economy', 'It only benefited factory owners', 'It was quickly reversed'], answer: 1 },
      ],
    },
  ],
};