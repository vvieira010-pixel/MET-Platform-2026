export const READING_PART1 = {
  id: 'reading-part1',
  label: 'Part 1 — Grammar',
  instructions: 'Choose the best option to complete each sentence.',
  questions: [
    { id: 'rg1',  type: 'grammar', level: 'b2', text: 'If the train had arrived on time, we ______ the opening speech.', options: ['hear', 'heard', 'would hear', 'would have heard'], answer: 3 },
    { id: 'rg2',  type: 'grammar', level: 'b2', text: 'The supervisor asked the staff ______ the forms before leaving.', options: ['submit', 'to submit', 'submitting', 'submitted'], answer: 1 },
    { id: 'rg3',  type: 'grammar', level: 'b1', text: 'Neither the manager nor the assistants ______ available to answer the question.', options: ['was', 'were', 'is', 'be'], answer: 1 },
    { id: 'rg4',  type: 'grammar', level: 'b2', text: 'By the end of the week, the team ______ the report.', options: ['will finish', 'will have finished', 'finished', 'has finished'], answer: 1 },
    { id: 'rg5',  type: 'grammar', level: 'b2', text: 'The instructions were so unclear that many students had trouble ______ the task.', options: ['complete', 'completed', 'completing', 'to complete'], answer: 2 },
    { id: 'rg6',  type: 'grammar', level: 'b1', text: 'I would rather stay home tonight ______ go out in the rain.', options: ['than', 'to', 'for', 'because'], answer: 0 },
    { id: 'rg7',  type: 'grammar', level: 'b1', text: 'The files are on the desk between Maria and ______.', options: ['I', 'me', 'my', 'mine'], answer: 1 },
    { id: 'rg8',  type: 'grammar', level: 'b2', text: 'The conference, ______ took place in June, attracted speakers from five countries.', options: ['who', 'which', 'what', 'whose'], answer: 1 },
    { id: 'rg9',  type: 'grammar', level: 'b1', text: 'This is the book ______ I told you about yesterday.', options: ['who', 'where', 'that', 'whom'], answer: 2 },
    { id: 'rg10', type: 'grammar', level: 'b2', text: 'The company has grown ______ than expected this year.', options: ['rapid', 'more rapidly', 'most rapidly', 'rapidly of'], answer: 1 },
    { id: 'rg11', type: 'grammar', level: 'b2', text: 'Hardly ever ______ such a crowded market.', options: ['I have seen', 'have I seen', 'I saw', 'did I seen'], answer: 1 },
    { id: 'rg12', type: 'grammar', level: 'b1', text: 'The new policy will have a positive effect ______ student attendance.', options: ['for', 'at', 'on', 'to'], answer: 2 },
    { id: 'rg13', type: 'grammar', level: 'b1', text: 'We may need ______ chairs for the workshop than we first planned.', options: ['many', 'much', 'more', 'most'], answer: 2 },
    { id: 'rg14', type: 'grammar', level: 'b2', text: 'She speaks clearly and ______, which makes her a strong presenter.', options: ['confident', 'confidence', 'confidently', 'confide'], answer: 2 },
    { id: 'rg15', type: 'grammar', level: 'b2', text: 'The workers were told ______ the equipment carefully.', options: ['using', 'use', 'to use', 'used'], answer: 2 },
    { id: 'rg16', type: 'grammar', level: 'b2', text: 'If I were you, I ______ the deadline one more time.', options: ['check', 'checked', 'would check', 'will check'], answer: 2 },
    { id: 'rg17', type: 'grammar', level: 'b1', text: 'The museum has been renovated, and it is now much easier ______.', options: ['to visit', 'visiting', 'visit it', 'visited'], answer: 0 },
    { id: 'rg18', type: 'grammar', level: 'b1', text: 'Several students were absent, ______ the lesson had to be repeated.', options: ['so', 'but', 'although', 'unless'], answer: 0 },
    { id: 'rg19', type: 'grammar', level: 'b2', text: 'The audience remained silent, ______ they were clearly impressed.', options: ['because', 'although', 'since', 'unless'], answer: 3 },
    { id: 'rg20', type: 'grammar', level: 'b1', text: 'They have lived in the same neighborhood ______ more than ten years.', options: ['since', 'for', 'during', 'from'], answer: 1 },
  ],
};

export const READING_PART2 = {
  id: 'reading-part2',
  label: 'Part 2 — Reading Comprehension',
  instructions: 'Read each passage and choose the best answer.',
  passages: [
    {
      title: 'The History of Coffee',
      text: 'Coffee\'s journey began in Ethiopia, where legend says a goat herder discovered its effects. From there, it spread to the Arabian Peninsula, where it became popular among Sufi monks who used it to stay awake during prayers. By the 15th century, coffee was being cultivated in Yemen and had become an important trade commodity. Coffeehouses, known as qahveh khaneh, appeared in cities across the Middle East, becoming centers for conversation, music, and political discussion. European travelers brought coffee back to their home countries, and by the 17th century, coffeehouses had opened in England, France, and Germany. These establishments became known as "penny universities" because for the price of a cup of coffee, one could engage in intellectual conversation. Today, coffee is one of the most traded commodities in the world.',
      questions: [
        { id: 'rg21', type: 'main_idea', text: 'What is the passage mainly about?', options: ['How coffee is grown', 'The history and spread of coffee', 'The health benefits of coffee', 'Different types of coffee drinks'], answer: 1 },
        { id: 'rg22', type: 'detail', text: 'According to the passage, who first used coffee to stay awake?', options: ['European travelers', 'A goat herder', 'Sufi monks', 'Yemeni farmers'], answer: 2 },
        { id: 'rg23', type: 'detail', text: 'What were coffeehouses called in the Middle East?', options: ['Penny universities', 'Qahveh khaneh', 'Trade centers', 'Conversation houses'], answer: 1 },
        { id: 'rg24', type: 'inference', text: 'Why were coffeehouses called "penny universities" in Europe?', options: ['They charged one penny for entry', 'They offered university classes', 'They were places for intellectual discussion', 'They were located near universities'], answer: 2 },
        { id: 'rg25', type: 'inference', text: 'What does "commodities" in the last sentence most likely mean?', options: ['Products that are bought and sold', 'Types of food', 'Luxury goods', 'Agricultural methods'], answer: 0 },
      ],
    },
    {
      title: 'Urban Gardens',
      text: 'Urban gardening has grown significantly in popularity over the past decade. In cities around the world, residents are transforming empty lots, rooftops, and balconies into productive green spaces. These gardens provide fresh produce in areas where access to quality fruits and vegetables is limited—a problem often called a "food desert." Beyond food production, urban gardens offer environmental benefits by reducing the urban heat island effect and improving air quality. Community gardens also strengthen social bonds, as neighbors work together to maintain shared spaces. However, urban gardeners face challenges including limited space, soil contamination from industrial pollution, and the high cost of land. Despite these obstacles, the urban gardening movement continues to expand as people recognize the value of growing food closer to where they live.',
      questions: [
        { id: 'rg26', type: 'main_idea', text: 'What is the main idea of the passage?', options: ['Urban gardening is too difficult for most people', 'Urban gardens provide multiple benefits despite facing challenges', 'Rooftop gardens are the best type of urban garden', 'Food deserts are the biggest problem in cities'], answer: 1 },
        { id: 'rg27', type: 'detail', text: 'What is a "food desert" according to the passage?', options: ['A place where food is very expensive', 'An area with limited access to fresh produce', 'A garden that doesn\'t produce enough food', 'A neighborhood without grocery stores'], answer: 1 },
        { id: 'rg28', type: 'detail', text: 'Which is NOT mentioned as a challenge of urban gardening?', options: ['Limited space', 'Soil contamination', 'High land costs', 'Lack of water'], answer: 3 },
        { id: 'rg29', type: 'detail', text: 'What social benefit of community gardens does the passage mention?', options: ['They reduce crime rates', 'They create jobs', 'They strengthen bonds between neighbors', 'They increase property values'], answer: 2 },
        { id: 'rg30', type: 'inference', text: 'The word "contamination" in the passage most likely means:', options: ['Testing', 'Pollution', 'Improvement', 'Rotation'], answer: 1 },
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
      title: 'Remote Work',
      texts: [
        { label: 'Text A', title: 'FlexWork Policy Announcement', text: 'Starting next quarter, all employees at Greenwood Solutions may apply for up to three remote-work days per week. The policy applies to roles where physical presence is not required for core duties. Line managers must approve each request based on team coverage and individual performance. The company will provide laptops, a monthly internet stipend, and access to shared office space for days when employees do come in. The HR director stated that the aim is to "support work-life balance while maintaining productivity."' },
        { label: 'Text B', title: 'Employee Survey Results', text: 'A survey of 340 Greenwood employees found that 72 percent wanted more flexibility in where they work. The most common reasons cited were avoiding long commutes (58 percent), having more time with family (41 percent), and being able to focus better (39 percent). However, 23 percent of respondents said they worried about feeling isolated from their team, and 14 percent were concerned about missing informal learning opportunities.' },
        { label: 'Text C', title: 'Research on Remote Work and Productivity', text: 'A two-year study of 1,200 workers across 15 companies found that employees who worked remotely two to three days per week were, on average, 13 percent more productive than fully office-based staff. The researchers attributed this to fewer interruptions and more control over the work environment. However, the same study also found that fully remote workers (five days per week) showed less innovation and weaker professional relationships over time. The authors recommend a hybrid model as the "optimal balance."' },
      ],
      questions: [
        { id: 'rg31', type: 'detail', text: 'According to Text A, what must happen before an employee can work remotely under the new policy?', options: ['The employee must have worked at the company for at least one year.', 'A line manager must approve the request based on team coverage and performance.', 'The HR department must conduct an individual interview with the applicant.', 'The employee must first complete a remote-work training course.'], answer: 1 },
        { id: 'rg32', type: 'detail', text: 'Which of the following does Greenwood Solutions NOT offer to employees under the FlexWork policy?', options: ['A company laptop', 'A monthly internet stipend', 'A salary increase for remote workers', 'Access to shared office space'], answer: 2 },
        { id: 'rg33', type: 'detail', text: 'According to Text B, what was the most common reason employees wanted remote work?', options: ['Having more time with family', 'Avoiding long commutes', 'Being able to focus better', 'Saving money on meals and transport'], answer: 1 },
        { id: 'rg34', type: 'detail', text: 'What percentage of employees in the survey said they worried about feeling isolated?', options: ['14 percent', '23 percent', '39 percent', '72 percent'], answer: 1 },
        { id: 'rg35', type: 'inference', text: 'Based on Text B, what can be inferred about the employees who participated in the survey?', options: ['Most employees are satisfied with the current office-only policy.', 'While most want flexibility, a significant minority have concerns about remote work.', 'The majority of employees want to work from home five days per week.', 'Younger employees are more concerned about isolation than older ones.'], answer: 1 },
        { id: 'rg36', type: 'detail', text: 'According to Text C, how much more productive were hybrid workers compared to fully office-based staff?', options: ['5 percent', '10 percent', '13 percent', '20 percent'], answer: 2 },
        { id: 'rg37', type: 'detail', text: 'What reason does Text C give for the productivity increase among hybrid workers?', options: ['Better technology and faster internet connections at home.', 'Fewer interruptions and more control over the work environment.', 'Pressure to prove they are working when not in the office.', 'Stronger motivation due to fear of losing remote-work privileges.'], answer: 1 },
        { id: 'rg38', type: 'detail', text: 'What negative outcome does Text C associate with fully remote workers?', options: ['Higher rates of employee turnover.', 'Less innovation and weaker professional relationships.', 'Increased health problems related to sedentary behaviour.', 'Lower salaries compared to office-based employees.'], answer: 1 },
        { id: 'rg39', type: 'main_idea', text: 'Taken together, what do the three texts suggest about remote work?', options: ['Remote work should be avoided entirely because it reduces productivity.', 'A hybrid approach offers benefits while addressing the drawbacks of fully remote work.', 'Companies should allow employees to choose any arrangement they prefer.', 'Remote work is only suitable for senior employees with extensive experience.'], answer: 1 },
        { id: 'rg40', type: 'inference', text: 'How does the research in Text C relate to the concerns raised in Text B?', options: ['It contradicts the concerns by showing remote workers are happier overall.', 'It partially supports the concerns by finding that fully remote workers have weaker relationships.', 'It ignores the concerns and focuses only on financial benefits for companies.', 'It confirms that isolation is not a real issue for remote workers.'], answer: 1 },
      ],
    },
    {
      title: 'Digital Reading vs. Print',
      texts: [
        { label: 'Text A', title: 'Library Circulation Report', text: 'Last year, the Westfield Public Library recorded 84,000 digital book loans, a 22 percent increase from the previous year. By contrast, physical book borrowing fell by 6 percent to 62,000. Library director Mark Ellis noted: "The trend is clear — readers are choosing convenience. But we\'ve also seen more people coming in for events, study space, and our community programmes. The library is changing, not dying."' },
        { label: 'Text B', title: 'Educational Study on Screen Reading', text: 'A study of 410 university students compared comprehension after reading the same passages in print and on a tablet screen. Students reading on screens scored slightly lower on questions about main ideas (6 percent lower) but significantly lower on questions requiring them to recall specific details (21 percent lower). The researchers suggest that screens encourage a faster, more shallow reading style, while print promotes deeper engagement with the text.' },
        { label: 'Text C', title: 'Opinion: Why I Choose Both', text: 'I read on my phone during my commute and on my e-reader at night — devices are unbeatable for portability. But when I want to really understand something complex, I reach for print. A dense research paper or a novel I want to savour? Paper, always. The future is not about choosing one over the other. It is about knowing when each format serves you best.' },
      ],
      questions: [
        { id: 'rg41', type: 'detail', text: 'According to Text A, how many digital book loans did Westfield Public Library record last year?', options: ['62,000', '72,000', '84,000', '100,000'], answer: 2 },
        { id: 'rg42', type: 'inference', text: 'What does Mark Ellis mean when he says the library is "changing, not dying"?', options: ['Fewer people are using the library for any purpose.', 'The library is closing down several of its smaller branches.', 'The role of the library is shifting from book lending to serving as a community space.', 'The library plans to replace all physical books with digital versions.'], answer: 2 },
        { id: 'rg43', type: 'detail', text: 'According to Text B, on which type of question did screen readers perform much worse?', options: ['Questions about main ideas', 'Questions requiring recall of specific details', 'Questions about the author\'s opinion', 'Vocabulary questions'], answer: 1 },
        { id: 'rg44', type: 'detail', text: 'How many students participated in the study described in Text B?', options: ['200 university students', '340 students', '410 university students', '1,200 students'], answer: 2 },
        { id: 'rg45', type: 'inference', text: 'What explanation do the researchers in Text B give for lower comprehension scores on screens?', options: ['Screens are harder on the eyes and cause physical discomfort.', 'Screens encourage faster, more shallow reading while print promotes deeper engagement.', 'Students are less familiar with the technology used in the study.', 'The passages were more difficult when presented on screens.'], answer: 1 },
        { id: 'rg46', type: 'detail', text: 'According to Text C, when does the author prefer print over digital reading?', options: ['During long commutes and while travelling.', 'When reading casual content like news articles.', 'When working with complex material or novels to savour.', 'When reading at night before going to sleep.'], answer: 2 },
        { id: 'rg47', type: 'main_idea', text: 'What is the main point the author of Text C makes?', options: ['Print books are superior to digital devices in every situation.', 'Digital reading should replace print entirely to save space and resources.', 'The best approach is to use both formats, choosing based on the purpose of reading.', 'Libraries should stop buying print books and invest only in digital collections.'], answer: 2 },
        { id: 'rg48', type: 'inference', text: 'Taken together, what do Texts B and C suggest about digital reading?', options: ['Digital reading is the future and print will soon be obsolete.', 'Digital reading is good for quick consumption but less effective for deep comprehension.', 'Digital reading is harmful and should be discouraged in educational settings.', 'There is no meaningful difference between reading in print and on screens.'], answer: 1 },
        { id: 'rg49', type: 'main_idea', text: 'What overall message do the three texts convey about the relationship between print and digital reading?', options: ['Print and digital formats serve different purposes and can coexist.', 'Digital formats are replacing print, and libraries must adapt or close.', 'Print reading is the only method that leads to true understanding.', 'Technology companies should improve screens to match the benefits of paper.'], answer: 0 },
        { id: 'rg50', type: 'inference', text: 'Based on all three texts, what advice would be most appropriate for a student preparing for exams?', options: ['Use digital devices exclusively because they provide faster access to information.', 'Use print for material that requires deep understanding and memory of details.', 'Avoid reading altogether and focus on watching educational videos.', 'Use whatever format is cheapest and most convenient at the time.'], answer: 1 },
      ],
    },
  ],
};
