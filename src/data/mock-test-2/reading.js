// Reading & Grammar — MET Mock Test 2
// Part 1: Grammar (25 questions)
export const READING_PART1 = {
  id: 'reading-part1',
  label: 'Part 1 — Grammar',
  instructions: 'Choose the best option to complete each sentence.',
  questions: [
    { id: 'rg1',  type: 'grammar', level: 'b1', text: 'She ________ to the market every Saturday morning.',       options: ['go', 'goes', 'gone', 'going'], answer: 1 },
    { id: 'rg2',  type: 'grammar', level: 'b2', text: 'By the time they arrived, the meeting ________ already started.', options: ['has', 'had', 'have', 'having'], answer: 1 },
    { id: 'rg3',  type: 'grammar', level: 'b1', text: 'He is very good ________ solving complex problems.',        options: ['in', 'on', 'at', 'for'], answer: 2 },
    { id: 'rg4',  type: 'grammar', level: 'b1', text: 'The students were told ________ their phones during the exam.', options: ['not use', 'not to use', 'to not using', 'not using'], answer: 1 },
    { id: 'rg5',  type: 'grammar', level: 'b2', text: '________ the rain, they decided to go ahead with the outdoor event.', options: ['Despite', 'Although', 'However', 'Even though'], answer: 0 },
    { id: 'rg6',  type: 'grammar', level: 'b1', text: 'This is the book ________ I was telling you about last week.', options: ['who', 'whom', 'which', 'whose'], answer: 2 },
    { id: 'rg7',  type: 'grammar', level: 'b1', text: 'If I ________ more time, I would study abroad for a year.', options: ['have', 'had', 'would have', 'will have'], answer: 1 },
    { id: 'rg8',  type: 'grammar', level: 'b1', text: 'The report ________ be submitted by Friday at the latest.', options: ['must', 'might', 'could', 'should have'], answer: 0 },
    { id: 'rg9',  type: 'grammar', level: 'b2', text: 'Neither the manager nor the employees ________ aware of the change.', options: ['was', 'were', 'is', 'are'], answer: 1 },
    { id: 'rg10', type: 'grammar', level: 'b1', text: 'She asked me ________ I had seen her brother recently.',    options: ['that', 'if', 'what', 'whether or not'], answer: 1 },
    { id: 'rg11', type: 'grammar', level: 'b1', text: 'The children enjoyed ________ at the new playground.',       options: ['play', 'to play', 'playing', 'played'], answer: 2 },
    { id: 'rg12', type: 'grammar', level: 'b2', text: 'We ________ finish the project before the client arrives tomorrow.', options: ['should', 'ought', 'had better', 'would rather'], answer: 0 },
    { id: 'rg13', type: 'grammar', level: 'b1', text: 'The new regulations are ________ complex for many small businesses to follow.', options: ['so', 'such', 'too', 'very'], answer: 2 },
    { id: 'rg14', type: 'grammar', level: 'b2', text: 'The new airport ________ by the end of next year.',          options: ['will complete', 'will be completed', 'is completing', 'has been completing'], answer: 1 },
    { id: 'rg15', type: 'grammar', level: 'b2', text: 'I would rather you ________ here during the presentation.',  options: ['stay', 'stayed', 'to stay', 'staying'], answer: 1 },
    { id: 'rg16', type: 'grammar', level: 'b2', text: 'Hardly ________ sat down when the phone rang.',              options: ['she had', 'had she', 'she has', 'has she'], answer: 1 },
    { id: 'rg17', type: 'grammar', level: 'b2', text: 'The number of students who pass the exam ________ increased significantly.', options: ['have', 'has', 'had', 'having'], answer: 1 },
    { id: 'rg18', type: 'grammar', level: 'b2', text: 'It is essential that every participant ________ on time.',   options: ['arrives', 'arrive', 'will arrive', 'arrived'], answer: 1 },
    { id: 'rg19', type: 'grammar', level: 'b2', text: 'Not only ________ late, but she also forgot to bring her materials.', options: ['she was', 'was she', 'she is', 'is she'], answer: 1 },
    { id: 'rg20', type: 'grammar', level: 'b2', text: 'The more you practice, ________ you become at public speaking.', options: ['the confident', 'more confident', 'the more confident', 'the most confident'], answer: 2 },
    // 5 additional questions for 25 total
    { id: 'rg21', type: 'grammar', level: 'b1', text: 'My car ________ at the moment, so I\'m taking the bus.',    options: ['repairs', 'is repaired', 'is being repaired', 'has repaired'], answer: 2 },
    { id: 'rg22', type: 'grammar', level: 'b2', text: 'Had I known about the traffic, I ________ a different route.', options: ['would take', 'would have taken', 'took', 'had taken'], answer: 1 },
    { id: 'rg23', type: 'grammar', level: 'b1', text: 'The teacher suggested ________ the assignment by Friday.',  options: ['us to complete', 'that we complete', 'us completing', 'to complete'], answer: 1 },
    { id: 'rg24', type: 'grammar', level: 'b2', text: 'Rarely ________ such a beautiful sunset in this city.',     options: ['one sees', 'does one see', 'one saw', 'did one see'], answer: 1 },
    { id: 'rg25', type: 'grammar', level: 'b1', text: 'She reminded me ________ the appointment at 3 PM.',         options: ['for', 'about', 'of', 'to'], answer: 3 },
  ],
};

export const READING_PART2 = {
  id: 'reading-part2',
  label: 'Part 2 — Reading Comprehension',
  instructions: 'Read each passage and choose the best answer.',
  passages: [
    {
      title: 'Urban Green Spaces',
      text: 'In recent years, cities around the world have been investing in green spaces—parks, community gardens, and green roofs—as part of urban planning strategies. Proponents argue that these spaces improve air quality, reduce urban heat, and provide residents with areas for exercise and social interaction. Despite the clear benefits, green spaces are not always distributed evenly. Lower-income neighborhoods often have fewer parks and less tree cover than wealthier areas. Some cities have responded by converting vacant lots into community gardens or building green roofs on public buildings. Critics, however, point out that the cost of maintaining these spaces can be prohibitive, especially for cities with limited budgets.',
      questions: [
        { id: 'rg26', type: 'main_idea', text: 'What is the main argument of the passage?', options: ['Cities should spend more on housing.', 'Green spaces benefit city residents and deserve investment.', 'Urban planning always favors wealthy neighborhoods.', 'Public transport is more important than parks.'], answer: 1 },
        { id: 'rg27', type: 'detail', text: 'According to the passage, where are green spaces often lacking?', options: ['In the city center', 'In lower-income areas', 'In suburban districts', 'Near transport routes'], answer: 1 },
        { id: 'rg28', type: 'detail', text: 'Which of the following is mentioned as a way cities have responded to the problem?', options: ['Building new hospitals', 'Converting unused lots into community gardens', 'Reducing the number of cars in the city', 'Planting trees in wealthier neighborhoods'], answer: 1 },
        { id: 'rg29', type: 'detail', text: 'What concern do critics raise about green spaces?', options: ['They are not attractive to residents.', 'They do not improve air quality.', 'They are too expensive to develop and maintain.', 'They encourage too much physical activity.'], answer: 2 },
        { id: 'rg30', type: 'inference', text: 'The word "prohibitive" in the final paragraph is closest in meaning to:', options: ['affordable', 'necessary', 'excessive', 'uncertain'], answer: 2 },
      ],
    },
    {
      title: 'The Science of Sleep',
      text: 'Sleep is a fundamental biological process that affects nearly every system in the body. During sleep, the brain consolidates memories, the body repairs tissues, and the immune system is strengthened. The sleep cycle consists of two main phases: non-REM sleep and REM sleep. Deep sleep, which occurs during non-REM, is crucial for physical restoration. REM sleep, on the other hand, is associated with dreaming and emotional processing. Despite its importance, many adults fail to get the recommended 7–9 hours of sleep per night. Common factors contributing to poor sleep include stress, irregular schedules, and excessive screen time before bed. Improving what experts call "sleep hygiene"—habits and practices that promote consistent, quality sleep—can make a significant difference.',
      questions: [
        { id: 'rg31', type: 'main_idea', text: 'What is the primary purpose of this passage?', options: ['To argue that people should sleep more', 'To explain how sleep works and why it matters', 'To describe the latest medical treatments for sleep disorders', 'To compare sleep habits in different countries'], answer: 1 },
        { id: 'rg32', type: 'detail', text: 'According to the passage, what happens during deep sleep?', options: ['The brain processes emotions and dreams.', 'The body repairs tissue and strengthens the immune system.', 'Memory consolidation primarily takes place.', 'The body transitions between REM and non-REM sleep.'], answer: 1 },
        { id: 'rg33', type: 'detail', text: 'Which of the following is NOT listed as a factor contributing to poor sleep?', options: ['Stress', 'Excessive exercise', 'Irregular schedules', 'Screen time before bed'], answer: 1 },
        { id: 'rg34', type: 'detail', text: 'What does the term "sleep hygiene" refer to?', options: ['Keeping the bedroom clean and tidy', 'Medical treatments for sleep disorders', 'Habits and practices that promote good sleep', 'The study of sleep patterns across populations'], answer: 2 },
        { id: 'rg35', type: 'inference', text: 'The word "consolidation" in paragraph 2 is closest in meaning to:', options: ['deletion', 'strengthening', 'distraction', 'creation'], answer: 1 },
      ],
    },
  ],
};

export const READING_PART3 = {
  id: 'reading-part3',
  label: 'Part 3 — Extended Reading',
  instructions: 'Read the text sets below and answer the questions.',
  textSets: [
    {
      title: 'Volunteering',
      texts: [
        { label: 'Text A', title: 'Volunteer with Greenvale Community Network', text: 'Greenvale Community Network is looking for volunteers to support our community programmes. We have opportunities in after-school tutoring, elderly companionship, and environmental projects. No previous experience is required—training will be provided. Volunteers can choose a schedule that fits their availability. If you are interested, please fill in the registration form on our website, and we will contact you with details of upcoming induction sessions.' },
        { label: 'Text B', title: 'Q&A: Marta Hendriks, Volunteer Coordinator', text: 'Interviewer: What do new volunteers say surprises them most? Marta: Almost all of them say how quickly they felt part of a team. There is a real sense of belonging right from the induction. Interviewer: What is the outlook for the programme? Marta: Positive. We are seeing growing interest from younger people, which is encouraging. Many want to gain experience while contributing to the community.' },
        { label: 'Text C', title: 'The Unexpected Benefits of Giving Your Time', text: 'Research consistently shows that volunteering benefits not only the recipients but also the volunteers themselves. Studies have found that people who volunteer regularly report better mental health, partly due to the social connections and sense of purpose it provides. There is also evidence of physical health benefits, such as lower blood pressure and longer life expectancy—though researchers caution that a direct cause has not been confirmed. For young people, volunteering can be particularly valuable. Career advisors often recommend it as a way to develop skills that employers value, especially for those with limited paid work experience. The research is clear: volunteering produces real, measurable benefits.' },
      ],
      questions: [
        { id: 'rg36', type: 'inference', text: 'What can be inferred about who is able to join the Greenvale volunteer programme?', options: ['Only people who have previously worked in social care or healthcare.', 'Applicants must be available for at least five hours per week.', 'People with different backgrounds and schedules are welcome to apply.', 'Only residents of the Greenvale area may register as volunteers.'], answer: 2 },
        { id: 'rg37', type: 'detail', text: 'What must a person do to begin the process of becoming a Greenvale volunteer?', options: ['Attend an information event at the community centre.', 'Submit a written letter describing their skills and experience.', 'Fill in a form on the organisation\'s website.', 'Call the coordinator directly during office hours.'], answer: 2 },
        { id: 'rg38', type: 'detail', text: 'According to Marta Hendriks, what do almost all new volunteers say surprises them?', options: ['How much physical effort the role involves.', 'How quickly they feel that they belong to a group.', 'How formally the induction process is run.', 'How much time the role takes up each week.'], answer: 1 },
        { id: 'rg39', type: 'detail', text: 'How does Marta Hendriks describe her outlook for the programme?', options: ['Uncertain, because funding for the programme may be cut.', 'Concerned, because older volunteers are retiring without being replaced.', 'Frustrated, because awareness of the programme remains low.', 'Confident, because interest in volunteering among younger people is rising.'], answer: 3 },
        { id: 'rg40', type: 'main_idea', text: 'What is the main point the author makes in the passage?', options: ['Volunteering is only beneficial for people who are retired or unemployed.', 'Research shows that volunteering produces real benefits for the volunteers themselves, not just for others.', 'The physical health benefits of volunteering have been proven beyond doubt.', 'Volunteering is mainly valuable because it improves career opportunities for young people.'], answer: 1 },
        { id: 'rg41', type: 'detail', text: 'According to the passage, why is volunteering linked to better mental health?', options: ['It gives volunteers financial rewards that reduce stress.', 'It provides opportunities to learn new professional skills.', 'It creates social connection and a sense of purpose.', 'It reduces the number of hours people spend working.'], answer: 2 },
        { id: 'rg42', type: 'detail', text: 'What does the author say about the connection between volunteering and physical health?', options: ['It has been proven that volunteering directly prevents serious illness.', 'Research suggests an association, though a direct cause has not been confirmed.', 'The benefits are only seen in volunteers who do physical outdoor activities.', 'Physical health effects are less significant than the mental health benefits.'], answer: 1 },
        { id: 'rg43', type: 'detail', text: 'According to the passage, why might career advisors recommend volunteering to young people?', options: ['Volunteering provides a guaranteed reference letter from a senior professional.', 'It allows young people to earn money while developing workplace skills.', 'Employers are legally required to consider volunteer experience in job applications.', 'It helps develop skills that employers value, especially for those with little paid work experience.'], answer: 3 },
        { id: 'rg44', type: 'inference', text: 'What is the author\'s attitude towards the research on volunteering discussed in the passage?', options: ['Sceptical: the author believes most studies on volunteering are unreliable.', 'Balanced: the author presents evidence while acknowledging the limits of what research can show.', 'Enthusiastic: the author argues all adults should be required to volunteer.', 'Cautious: the author recommends waiting for more research before drawing conclusions.'], answer: 1 },
        { id: 'rg45', type: 'inference', text: 'Which of the following best describes the relationship between Text A and Text C?', options: ['Text C provides scientific evidence supporting the claims made in Text A.', 'Text A describes a specific programme; Text C discusses general research findings about volunteering.', 'Text A contradicts the findings presented in Text C.', 'Text C is a direct response to the recruitment advertisement in Text A.'], answer: 1 },
      ],
    },
    {
      title: 'Community Composting',
      texts: [
        { label: 'Text A', title: 'Neighborhood Compost Hub Launch', text: 'Starting next month, the Maplewood Neighborhood Association will open a community composting hub at the corner of Oak and 5th. Residents can drop off fruit and vegetable scraps, coffee grounds, and eggshells during designated hours. The resulting compost will be used in the neighborhood garden and distributed to residents for home use. Volunteers are needed to help manage the site and turn the compost weekly. No experience necessary—training provided.' },
        { label: 'Text B', title: 'Composting FAQ', text: 'Q: What can I put in the compost bin? A: Fruit and vegetable scraps, coffee grounds, tea bags, eggshells, and yard trimmings. Q: What should I avoid? A: Meat, dairy, oils, and pet waste. These attract pests and create odors. Q: How often should I drop off? A: Weekly is ideal, but any frequency helps. Q: Will it smell? A: A properly managed compost pile has an earthy smell, not a rotten one.' },
        { label: 'Text C', title: 'City Council Report: Waste Reduction Impact', text: 'The latest municipal waste audit shows that organic waste accounts for 34% of residential landfill volume. Pilot composting programs in three districts reduced landfill waste by 28% within six months. The city estimates that expanding composting citywide could divert 12,000 tons of waste annually, saving $1.2M in landfill fees. Greenhouse gas emissions from decomposing organics would also decrease significantly. The council recommends allocating $500K in the next budget to support neighborhood compost hubs.' },
      ],
      questions: [
        { id: 'rg46', type: 'detail', text: 'According to Text A, what materials can residents drop off at the compost hub?', options: ['Meat, dairy, and fruit scraps', 'Fruit and vegetable scraps, coffee grounds, and eggshells', 'Only yard trimmings and leaves', 'All kitchen waste including oils and pet waste'], answer: 1 },
        { id: 'rg47', type: 'detail', text: 'According to Text B, which items should be avoided in the compost bin?', options: ['Tea bags and coffee grounds', 'Meat, dairy, oils, and pet waste', 'Fruit peels and vegetable trimmings', 'Eggshells and yard trimmings'], answer: 1 },
        { id: 'rg48', type: 'detail', text: 'What does Text B say about the smell of a properly managed compost pile?', options: ['It has a strong rotten odor.', 'It smells like chemicals.', 'It has an earthy smell, not a rotten one.', 'It has no smell at all.'], answer: 2 },
        { id: 'rg49', type: 'detail', text: 'According to Text C, what percentage of residential landfill volume is organic waste?', options: ['28%', '34%', '12%', '50%'], answer: 1 },
        { id: 'rg50', type: 'inference', text: 'Based on all three texts, what is the most likely reason the City Council recommends funding neighborhood compost hubs?', options: ['To create jobs for compost site managers.', 'To reduce landfill costs and greenhouse gas emissions.', 'To provide free fertilizer for city parks.', 'To comply with federal waste regulations.'], answer: 1 },
      ],
    },
  ],
};