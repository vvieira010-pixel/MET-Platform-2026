export const LISTENING_PART1 = {
  id: 'listening-part1',
  label: 'Part 1 — Short Conversations',
  instructions: 'Listen to each conversation and choose the best answer.',
  questions: [
    { id: 'l1',  type: 'detail',    audio: '/audio/listening/part1/part1_conv01.mp3', text: 'What does the man want to know?', options: ['The time of the next bus', 'The location of a restaurant', 'The price of a ticket', 'The opening hours of the library'], answer: 0 },
    { id: 'l2',  type: 'main_idea', audio: '/audio/listening/part1/part1_conv02.mp3', text: 'What are the speakers discussing?', options: ['A restaurant they visited', 'A movie they watched', 'A book they read', 'A concert they attended'], answer: 2 },
    { id: 'l3',  type: 'inference', audio: '/audio/listening/part1/part1_conv03.mp3', text: 'What does the woman suggest?', options: ['Taking a different route', 'Leaving earlier', 'Cancelling the trip', 'Asking for directions'], answer: 1 },
    { id: 'l4',  type: 'inference', audio: '/audio/listening/part1/part1_conv04.mp3', text: 'Why is the man happy?', options: ['He got a promotion', 'He finished his project early', 'He received good news', 'He found his lost wallet'], answer: 2 },
    { id: 'l5',  type: 'detail',    audio: '/audio/listening/part1/part1_conv05.mp3', text: 'What does the woman need?', options: ['A new passport', 'Some information', 'A ride to the airport', 'Help with her luggage'], answer: 1 },
    { id: 'l6',  type: 'detail',    audio: '/audio/listening/part1/part1_conv06.mp3', text: 'What does the professor tell the students?', options: ['The exam is postponed', 'The assignment is due next week', 'Class is cancelled tomorrow', 'The library will close early'], answer: 1 },
    { id: 'l7',  type: 'inference', audio: '/audio/listening/part1/part1_conv07.mp3', text: 'How does the woman feel?', options: ['Worried', 'Excited', 'Disappointed', 'Confused'], answer: 2 },
    { id: 'l8',  type: 'main_idea', audio: '/audio/listening/part1/part1_conv08.mp3', text: 'What will the speakers do next?', options: ['Go to a restaurant', 'Visit a museum', 'Watch a film', 'Walk in the park'], answer: 2 },
    { id: 'l9',  type: 'detail',    audio: '/audio/listening/part1/part1_conv09.mp3', text: 'What is the relationship between the speakers?', options: ['Doctor and patient', 'Teacher and student', 'Colleagues', 'Neighbors'], answer: 2 },
    { id: 'l10', type: 'detail',    audio: '/audio/listening/part1/part1_conv10.mp3', text: 'What does the man offer to do?', options: ['Drive the woman home', 'Help with the report', 'Make coffee', 'Call a technician'], answer: 3 },
    { id: 'l11', type: 'detail',    audio: '/audio/listening/part1/part1_conv11.mp3', text: 'What problem does the woman have?', options: ['Her computer isn\'t working', 'She lost her notes', 'She can\'t find the classroom', 'She forgot her password'], answer: 0 },
    { id: 'l12', type: 'inference', audio: '/audio/listening/part1/part1_conv12.mp3', text: 'Where does this conversation probably take place?', options: ['At a bus station', 'At a restaurant', 'At a bookstore', 'At a hotel'], answer: 3 },
    { id: 'l13', type: 'detail',    audio: '/audio/listening/part1/part1_conv13.mp3', text: 'What time should the woman arrive?', options: ['9:00 AM', '10:30 AM', '2:00 PM', '4:00 PM'], answer: 1 },
    { id: 'l14', type: 'inference', audio: '/audio/listening/part1/part1_conv14.mp3', text: 'What does the man think about the new policy?', options: ['It\'s too strict', 'It\'s fair', 'It\'s unnecessary', 'It\'s confusing'], answer: 1 },
    { id: 'l15', type: 'detail',    audio: '/audio/listening/part1/part1_conv15.mp3', text: 'What is the woman doing?', options: ['Ordering food', 'Booking a ticket', 'Asking for directions', 'Returning an item'], answer: 3 },
    { id: 'l16', type: 'inference', audio: '/audio/listening/part1/part1_conv16.mp3', text: 'What does the man advise?', options: ['To see a doctor', 'To take a break', 'To drink more water', 'To get more sleep'], answer: 1 },
    { id: 'l17', type: 'main_idea', audio: '/audio/listening/part1/part1_conv17.mp3', text: 'What are the speakers planning?', options: ['A birthday party', 'A business meeting', 'A holiday trip', 'A study session'], answer: 3 },
    { id: 'l18', type: 'inference', audio: '/audio/listening/part1/part1_conv18.mp3', text: 'Why is the woman late?', options: ['She missed the bus', 'She had a meeting', 'She got stuck in traffic', 'She overslept'], answer: 2 },
    { id: 'l19', type: 'detail',    audio: '/audio/listening/part1/part1_conv19.mp3', text: 'What does the man like about his new apartment?', options: ['The location', 'The size', 'The price', 'The view'], answer: 0 },
  ],
};

export const LISTENING_PART2 = {
  id: 'listening-part2',
  label: 'Part 2 — Extended Talks',
  instructions: 'Listen to each talk or conversation and answer the questions.',
  conversations: [
    {
      title: 'Conversation A',
      audio: '/audio/listening/part2/conv a.mp3',
      questions: [
        { id: 'l20', type: 'main_idea', text: 'What is the woman mainly calling about?', options: ['A complaint about a product', 'An enquiry about a service', 'A job application', 'A reservation change'], answer: 1 },
        { id: 'l21', type: 'detail', text: 'What information does the woman need to provide?', options: ['Her address', 'Her account number', 'Her phone number', 'Her email address'], answer: 1 },
        { id: 'l22', type: 'detail', text: 'What will the man do next?', options: ['Send a confirmation email', 'Transfer the call', 'Check the system', 'Speak to a manager'], answer: 2 },
      ],
    },
    {
      title: 'Conversation B',
      audio: '/audio/listening/part2/conv b.mp3',
      questions: [
        { id: 'l23', type: 'detail', text: 'Where are the speakers?', options: ['In a classroom', 'In a library', 'In an office', 'In a café'], answer: 2 },
        { id: 'l24', type: 'main_idea', text: 'What are the speakers discussing?', options: ['A research project', 'A conference they attended', 'A new company policy', 'Their weekend plans'], answer: 0 },
        { id: 'l25', type: 'detail', text: 'What does the woman offer to do?', options: ['Edit the report', 'Collect more data', 'Contact the participants', 'Prepare the presentation'], answer: 3 },
        { id: 'l26', type: 'detail', text: 'When is the deadline?', options: ['Today', 'Tomorrow', 'Next Monday', 'Next Friday'], answer: 3 },
      ],
    },
    {
      title: 'Conversation C',
      audio: '/audio/listening/part2/conv c.mp3',
      questions: [
        { id: 'l27', type: 'detail', text: 'What kind of business are the speakers discussing?', options: ['A restaurant', 'A clothing store', 'A bookstore', 'A gym'], answer: 0 },
        { id: 'l28', type: 'inference', text: 'What is the man concerned about?', options: ['The location', 'The competition', 'The costs', 'The staff'], answer: 2 },
        { id: 'l29', type: 'detail', text: 'What advice does the woman give?', options: ['Start small', 'Get a loan', 'Hire a chef', 'Find a partner'], answer: 0 },
        { id: 'l30', type: 'detail', text: 'What does the man need to do first?', options: ['Find a location', 'Write a business plan', 'Get a license', 'Buy equipment'], answer: 1 },
      ],
    },
    {
      title: 'Conversation D',
      audio: '/audio/listening/part2/conv d.mp3',
      questions: [
        { id: 'l31', type: 'main_idea', text: 'What is the main topic of discussion?', options: ['Environmental issues', 'Travel plans', 'Career changes', 'Family matters'], answer: 0 },
        { id: 'l32', type: 'detail', text: 'What has the woman already done?', options: ['Joined an environmental group', 'Reduced her waste', 'Started cycling to work', 'Planted a garden'], answer: 1 },
        { id: 'l33', type: 'inference', text: 'What does the man think about individual efforts?', options: ['They are not enough', 'They are the most important', 'They are too expensive', 'They are difficult to maintain'], answer: 0 },
      ],
    },
  ],
};

export const LISTENING_PART3 = {
  id: 'listening-part3',
  label: 'Part 3 — Short Talks',
  instructions: 'Listen to each short talk and answer the questions.',
  talks: [
    {
      title: 'Talk A',
      audio: '/audio/listening/part3/conv a.mp3',
      questions: [
        { id: 'l34', type: 'main_idea', text: 'What is the speaker mainly announcing?', options: ['A new training programme', 'Changes to office hours', 'A company restructuring', 'A holiday schedule'], answer: 0 },
        { id: 'l35', type: 'detail', text: 'Who is the target audience for this programme?', options: ['Senior managers', 'All employees', 'New staff members', 'External candidates'], answer: 1 },
        { id: 'l36', type: 'detail', text: 'How long will the programme last?', options: ['Two weeks', 'One month', 'Three months', 'Six months'], answer: 2 },
        { id: 'l37', type: 'detail', text: 'What will participants receive at the end?', options: ['A salary increase', 'A certificate', 'A promotion', 'A bonus'], answer: 1 },
        { id: 'l38', type: 'detail', text: 'What should interested people do?', options: ['Speak to their manager', 'Register online', 'Submit an application', 'Attend an information session'], answer: 1 },
      ],
    },
    {
      title: 'Talk B',
      audio: '/audio/listening/part3/conv b.mp3',
      questions: [
        { id: 'l39', type: 'main_idea', text: 'What is the talk mainly about?', options: ['A new public transport system', 'A community health initiative', 'A local arts festival', 'A recycling programme'], answer: 0 },
        { id: 'l40', type: 'detail', text: 'When will the new service begin?', options: ['Next week', 'Next month', 'Next year', 'Next season'], answer: 1 },
        { id: 'l41', type: 'detail', text: 'What is the benefit mentioned?', options: ['Reduced traffic', 'Lower fares', 'Faster travel times', 'More frequent service'], answer: 2 },
        { id: 'l42', type: 'detail', text: 'What does the speaker encourage listeners to do?', options: ['Provide feedback', 'Buy tickets in advance', 'Tell their neighbors', 'Volunteer for the project'], answer: 0 },
      ],
    },
    {
      title: 'Talk C',
      audio: '/audio/listening/part3/conv c.mp3',
      questions: [
        { id: 'l43', type: 'main_idea', text: 'What is the speaker discussing?', options: ['Healthy eating habits', 'Exercise routines', 'Stress management', 'Time management'], answer: 2 },
        { id: 'l44', type: 'detail', text: 'According to the speaker, what is a common cause of the problem?', options: ['Lack of sleep', 'Too much work', 'Poor diet', 'Lack of exercise'], answer: 1 },
        { id: 'l45', type: 'detail', text: 'What does the speaker recommend?', options: ['Taking regular breaks', 'Working longer hours', 'Drinking more coffee', 'Avoiding social media'], answer: 0 },
        { id: 'l46', type: 'inference', text: 'What does the speaker say about the suggested approach?', options: ['It is easy to follow', 'It takes time to see results', 'It works for everyone', 'It requires professional help'], answer: 1 },
      ],
    },
    {
      title: 'Talk D',
      audio: '/audio/listening/part3/conv d.mp3',
      questions: [
        { id: 'l47', type: 'detail', text: 'What is the speaker\'s profession?', options: ['A journalist', 'A scientist', 'A teacher', 'A doctor'], answer: 1 },
        { id: 'l48', type: 'detail', text: 'What recent discovery does the speaker talk about?', options: ['A new species of plant', 'A new treatment for disease', 'A new type of battery', 'A new planet'], answer: 2 },
        { id: 'l49', type: 'inference', text: 'What makes this discovery significant?', options: ['It is cheaper than existing options', 'It lasts longer than current technology', 'It is more environmentally friendly', 'It is easier to produce'], answer: 2 },
        { id: 'l50', type: 'detail', text: 'What will the speaker do next?', options: ['Answer questions', 'Show a demonstration', 'Introduce another speaker', 'Distribute materials'], answer: 0 },
      ],
    },
  ],
};
