import { useState, useCallback, useEffect } from 'react';
import { READING_PART1, READING_PART2, READING_PART3 } from '../../data/mock-test-1/reading.js';
import QuestionNav from './QuestionNav.jsx';
import OptionButton from './OptionButton.jsx';
import NavButtons from './NavButtons.jsx';
import { STORAGE_KEYS } from './constants.js';

function getFlatQuestions() {
  const qs = [];
  READING_PART1.questions.forEach(q => qs.push({ ...q, part: 1 }));
  READING_PART2.passages.forEach(p => p.questions.forEach(q => qs.push({ ...q, part: 2 })));
  READING_PART3.textSets.forEach(ts => ts.questions.forEach(q => qs.push({ ...q, part: 3 })));
  return qs;
}

const QUESTIONS = getFlatQuestions();

const PART_BOUNDARIES = [];
QUESTIONS.forEach((qq, i) => {
  if (i === 0 || qq.part !== QUESTIONS[i - 1].part) {
    PART_BOUNDARIES.push({ part: qq.part, startIdx: i });
  }
});

const PART_LABELS = { 1: 'Part 1', 2: 'Part 2', 3: 'Part 3' };

export default function ReadingSection({ onComplete }) {
  const [currentIdx, setCurrentIdx] = useState(0);
  const [selected, setSelected] = useState({});
  const [answered, setAnswered] = useState({});

  const q = QUESTIONS[currentIdx];
  const total = QUESTIONS.length;
  const answeredCount = Object.keys(answered).length;

  const persistAnswer = useCallback((qId, optIdx) => {
    setSelected(prev => ({ ...prev, [qId]: optIdx }));
    setAnswered(prev => ({ ...prev, [qId]: true }));
    try {
      const store = JSON.parse(sessionStorage.getItem(STORAGE_KEYS.SECTION_ANSWERS('reading')) || '{}');
      store[qId] = optIdx;
      sessionStorage.setItem(STORAGE_KEYS.SECTION_ANSWERS('reading'), JSON.stringify(store));
    } catch {}
  }, []);

  useEffect(() => {
    try {
      const saved = JSON.parse(sessionStorage.getItem(STORAGE_KEYS.SECTION_ANSWERS('reading')) || '{}');
      const keys = Object.keys(saved);
      if (keys.length > 0) {
        const sel = {};
        const ans = {};
        keys.forEach(k => { sel[k] = saved[k]; ans[k] = true; });
        setSelected(sel);
        setAnswered(ans);
      }
    } catch {}
  }, []);

  const handleFinish = useCallback(() => {
    const all = {};
    QUESTIONS.forEach(q => {
      if (selected[q.id] !== undefined) all[q.id] = selected[q.id];
    });
    onComplete(all);
  }, [selected, onComplete]);

  const renderPassage = () => {
    if (q.part === 1) return null;
    if (q.part === 2) {
      const p = READING_PART2.passages.find(p => p.questions.some(pq => pq.id === q.id));
      return p ? (
        <div className="rs__passage card">
          <h4 className="rs__passage-title">{p.title}</h4>
          <p className="rs__passage-text">{p.text}</p>
        </div>
      ) : null;
    }
    if (q.part === 3) {
      const ts = READING_PART3.textSets.find(ts => ts.questions.some(tq => tq.id === q.id));
      return ts ? (
        <div className="rs__passage card">
          {ts.texts.map((t, i) => (
            <div key={i} className="rs__passage-text-block">
              <h4 className="rs__passage-title">{t.label}: {t.title}</h4>
              <p className="rs__passage-text">{t.text}</p>
            </div>
          ))}
        </div>
      ) : null;
    }
    return null;
  };

  return (
    <div className="rs">
      <QuestionNav
        total={total}
        currentIdx={currentIdx}
        answered={answered}
        onJump={setCurrentIdx}
        partBoundaries={PART_BOUNDARIES}
        partLabels={PART_LABELS}
        sectionName="Reading & Grammar"
        ariaLabel="Reading section questions"
      />
      <div className="rs__main">
        {renderPassage()}

        <div className="rs__question">
          <div className="rs__q-label">Question {currentIdx + 1} of {total}</div>
          <p className="rs__q-text">{q.text}</p>
          <div className="rs__options" role="radiogroup" aria-label={`Question ${currentIdx + 1} options`}>
            {q.options.map((opt, i) => (
              <OptionButton
                key={i}
                letter={'ABCD'[i]}
                selected={selected[q.id] === i}
                onSelect={() => persistAnswer(q.id, i)}
              >
                {opt}
              </OptionButton>
            ))}
          </div>
        </div>

<NavButtons
          currentIdx={currentIdx}
          total={total}
          answeredCount={answeredCount}
          sectionName="Reading & Grammar section"
          onPrevious={() => setCurrentIdx(i => i - 1)}
          onNext={() => setCurrentIdx(i => i + 1)}
          onFinish={handleFinish}
        />
      </div>
    </div>
  );
}