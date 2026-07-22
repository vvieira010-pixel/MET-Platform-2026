import { useState, useEffect } from 'react';
import { Icon, SectionHeader, Pill, Avatar, FilterChip } from '../components/shared.jsx';
import { Button } from '../components/ui/Button.jsx';
import { Card } from '../components/ui/Card.jsx';
import { getAllSubmissions, getHomework, getReviews, deleteSubmission, deleteReview } from '../lib/workflow.js';

export default function SubmissionsPage({ students, onNavigate }) {
  const [submissions, setSubmissions] = useState([]);
  const [homework, setHomework] = useState([]);
  const [reviews, setReviews] = useState([]);
  const [filter, setFilter] = useState('pending');

  useEffect(() => {
    load();
  }, []);

  async function load() {
    try {
      const [subs, hw, revs] = await Promise.all([getAllSubmissions(), getHomework(), getReviews()]);
      setSubmissions(subs || []);
      setHomework(hw || []);
      setReviews(revs || []);
    } catch (e) {
      window.toast?.(`Failed to load submissions: ${e.message}`, 'warn');
    }
  }

  const reviewedIds = new Set(reviews.map(r => r.submissionId));
  const filtered = submissions.filter(s => {
    if (filter === 'pending') return s.status === 'submitted' && !reviewedIds.has(s.id);
    if (filter === 'reviewed') return reviewedIds.has(s.id);
    return true;
  });

  const pendingCount = submissions.filter(s => s.status === 'submitted' && !reviewedIds.has(s.id)).length;

  return (
    <div className="page-shell">
      <SectionHeader
        title="Submissions"
        sub={`${pendingCount} pending review · ${submissions.length} total`}
      />

      <div className="page-filters">
        {['pending', 'reviewed', 'all'].map(f => (
          <FilterChip key={f} label={f.charAt(0).toUpperCase() + f.slice(1)} count={f === 'pending' ? pendingCount : undefined} active={filter === f} onClick={() => setFilter(f)} />
        ))}
      </div>

      {filtered.length === 0 ? (
        <Card className="page-empty-state">
          <p className="text-muted">{filter === 'pending' ? 'No submissions awaiting review.' : 'No submissions found.'}</p>
        </Card>
      ) : (
        <div className="grid-square">
          {filtered.map(sub => {
            const student = students.find(s => s.id === sub.studentId);
            const hw = homework.find(h => h.id === sub.homeworkId);
            const review = reviews.find(r => r.submissionId === sub.id);
            const reviewed = !!review;
            return (
              <Card key={sub.id} className={`square-card${!reviewed ? ' square-card--warning' : ''}`} style={!reviewed ? { borderColor: 'var(--warning-soft)' } : undefined}>
                <Avatar name={student?.name || '?'} size={40} />
                <div className="text-sm font-ui" style={{ fontWeight: 600, textAlign: 'center', marginTop: 8 }}>{student?.name || 'Unknown'}</div>
                <div className="text-xs text-muted" style={{ textAlign: 'center', marginBottom: 8 }}>
                  {hw?.title || 'Homework submission'}
                </div>
                <Pill tone={reviewed ? 'success' : 'warning'} className="mb-2">{reviewed ? 'Reviewed' : 'Needs Review'}</Pill>
                <div className="flex justify-center" style={{ marginTop: 'auto', width: '100%', gap: 4 }}>
                  <Button variant={reviewed ? 'ghost' : 'primary'} size="sm" onClick={() => onNavigate('submissions:review', { submissionId: sub.id })}>
                    {reviewed ? 'View Review' : 'Review'}
                  </Button>
                  {reviewed && (
                    <Button variant="ghost" size="sm" className="text-warning" onClick={async () => { if (confirm('Delete this teacher review? The submission will return to Needs Review.')) { await deleteReview(review.id); load(); } }}>
                      Del
                    </Button>
                  )}
                  <Button variant="ghost" size="sm" className="text-danger" onClick={async () => { if (confirm('Delete this submission and its review?')) { await deleteSubmission(sub.id); load(); } }}>
                    <Icon.trash size={12} />
                  </Button>
                </div>
              </Card>
            );
          })}
        </div>
      )}
    </div>
  );
}

