'use strict';

/* ============================================================
   1. DATA — Workout sequences and exercises
   ============================================================ */

const SEQUENCES = [
  // ── BEGINNER ──────────────────────────────────────────────

  {
    id: 'morning-energizer',
    name: 'Morning Energizer',
    tagline: 'Wake up your whole body in 15 minutes',
    category: 'full-body',
    level: 'beginner',
    durationMinutes: 15,
    exercises: [
      { name: 'Jumping Jacks', type: 'duration', value: 30,
        description: '30 seconds', cues: ['Keep a light bounce', 'Arms fully extended overhead', 'Breathe steadily'] },
      { name: 'Rest', type: 'rest', value: 20, description: '20 seconds', cues: ['Breathe deeply', 'Shake out your hands'] },
      { name: 'Bodyweight Squat', type: 'reps', value: 15,
        description: '15 reps', cues: ['Feet shoulder-width apart', 'Chest up, sit back', 'Push through your heels'] },
      { name: 'Rest', type: 'rest', value: 30, description: '30 seconds', cues: ['Catch your breath'] },
      { name: 'Knee Push-Up', type: 'reps', value: 10,
        description: '10 reps', cues: ['Core tight, straight line from knees to shoulders', 'Lower chest to the floor', 'Full lockout at top'] },
      { name: 'Rest', type: 'rest', value: 30, description: '30 seconds', cues: ['Relax your shoulders'] },
      { name: 'Plank Hold', type: 'duration', value: 20,
        description: '20 seconds', cues: ['Wrists under shoulders', 'Squeeze glutes and core', 'Don\'t let hips sag'] },
      { name: 'Rest', type: 'rest', value: 30, description: '30 seconds', cues: ['Almost done!'] },
      { name: 'Glute Bridge', type: 'reps', value: 12,
        description: '12 reps', cues: ['Feet flat, close to your hips', 'Drive hips up explosively', 'Squeeze glutes at the top'] },
      { name: 'Rest', type: 'rest', value: 30, description: '30 seconds', cues: ['Final push coming'] },
      { name: 'Mountain Climbers', type: 'duration', value: 30,
        description: '30 seconds', cues: ['Hips level — don\'t bounce', 'Drive knees toward chest alternately', 'Quick, controlled pace'] },
    ]
  },

  {
    id: 'push-starter',
    name: 'Push Starter',
    tagline: 'Build your first real pushing strength',
    category: 'push',
    level: 'beginner',
    durationMinutes: 12,
    exercises: [
      { name: 'Wall Push-Up', type: 'reps', value: 15,
        description: '15 reps', cues: ['Hands wider than shoulders', 'Nose toward the wall', 'Straight body line throughout'] },
      { name: 'Rest', type: 'rest', value: 45, description: '45 seconds', cues: ['Shake out your wrists'] },
      { name: 'Wall Push-Up', type: 'reps', value: 15,
        description: '15 reps', cues: ['Control the lowering phase', 'Full range of motion', 'Exhale on the push'] },
      { name: 'Rest', type: 'rest', value: 45, description: '45 seconds', cues: ['Good work — 2 more sets to go'] },
      { name: 'Incline Push-Up', type: 'reps', value: 10,
        description: '10 reps', cues: ['Use a chair or countertop', 'Body rigid like a plank', 'Elbows at 45° to body'] },
      { name: 'Rest', type: 'rest', value: 60, description: '60 seconds', cues: ['Breathe. You\'re doing great.'] },
      { name: 'Incline Push-Up', type: 'reps', value: 10,
        description: '10 reps', cues: ['Focus on the chest squeeze', 'Slow down on the way down', 'Push through the burn'] },
      { name: 'Rest', type: 'rest', value: 60, description: '60 seconds', cues: ['Last set incoming'] },
      { name: 'Plank Hold', type: 'duration', value: 30,
        description: '30 seconds', cues: ['Lock in that core', 'Breathe don\'t hold your breath', 'Eyes at the floor'] },
    ]
  },

  {
    id: 'core-foundation',
    name: 'Core Foundation',
    tagline: 'Build a stable, functional core from the ground up',
    category: 'core',
    level: 'beginner',
    durationMinutes: 12,
    exercises: [
      { name: 'Dead Bug', type: 'duration', value: 30,
        description: '30 seconds', cues: ['Lower back pressed into floor', 'Move opposite arm and leg simultaneously', 'Exhale as you extend'] },
      { name: 'Rest', type: 'rest', value: 30, description: '30 seconds', cues: ['Feel that core activation?'] },
      { name: 'Plank Hold', type: 'duration', value: 30,
        description: '30 seconds', cues: ['Wrists directly under shoulders', 'Push the floor away from you', 'Keep breathing'] },
      { name: 'Rest', type: 'rest', value: 30, description: '30 seconds', cues: ['Midway through!'] },
      { name: 'Glute Bridge', type: 'reps', value: 15,
        description: '15 reps', cues: ['Feet hip-width, close to hips', 'Neutral spine throughout', 'Squeeze hard at the top'] },
      { name: 'Rest', type: 'rest', value: 30, description: '30 seconds', cues: ['Stay loose'] },
      { name: 'Hollow Body Hold', type: 'duration', value: 20,
        description: '20 seconds', cues: ['Press lower back into floor', 'Arms overhead, legs straight', 'Tuck chin slightly'] },
      { name: 'Rest', type: 'rest', value: 45, description: '45 seconds', cues: ['That\'s the hardest one'] },
      { name: 'Bird Dog', type: 'reps', value: 10,
        description: '10 reps each side', cues: ['Opposite arm and leg together', 'No hip rotation', 'Slow and controlled'] },
      { name: 'Rest', type: 'rest', value: 30, description: '30 seconds', cues: ['Almost there!'] },
      { name: 'Side Plank Hold', type: 'duration', value: 20,
        description: '20 sec each side', cues: ['Elbow under shoulder', 'Hips off the floor', 'Stack your feet or stagger them'] },
    ]
  },

  {
    id: 'leg-builder',
    name: 'Leg Builder',
    tagline: 'Strong, explosive legs — no equipment needed',
    category: 'legs',
    level: 'beginner',
    durationMinutes: 15,
    exercises: [
      { name: 'Bodyweight Squat', type: 'reps', value: 20,
        description: '20 reps', cues: ['Toes slightly out', 'Knees track over toes', 'Sit to depth if possible'] },
      { name: 'Rest', type: 'rest', value: 45, description: '45 seconds', cues: ['Good range of motion'] },
      { name: 'Reverse Lunge', type: 'reps', value: 12,
        description: '12 reps each side', cues: ['Take a long step back', 'Front shin stays vertical', 'Drive through front heel to return'] },
      { name: 'Rest', type: 'rest', value: 45, description: '45 seconds', cues: ['Legs feeling it?'] },
      { name: 'Glute Bridge', type: 'reps', value: 15,
        description: '15 reps', cues: ['Pause and squeeze at the top', 'Slow on the way down', 'Neutral spine'] },
      { name: 'Rest', type: 'rest', value: 30, description: '30 seconds', cues: ['Two more exercises'] },
      { name: 'Wall Sit', type: 'duration', value: 45,
        description: '45 seconds', cues: ['Thighs parallel to the floor', 'Back flat against the wall', 'Breathe through the burn'] },
      { name: 'Rest', type: 'rest', value: 60, description: '60 seconds', cues: ['Shake those legs out!'] },
      { name: 'Calf Raise', type: 'reps', value: 20,
        description: '20 reps', cues: ['Full range — up on tiptoes', 'Pause at the top', 'Control the descent'] },
    ]
  },

  // ── INTERMEDIATE ──────────────────────────────────────────

  {
    id: 'push-power',
    name: 'Push Power',
    tagline: 'Develop real pressing strength and chest width',
    category: 'push',
    level: 'intermediate',
    durationMinutes: 20,
    exercises: [
      { name: 'Push-Up', type: 'reps', value: 15,
        description: '15 reps', cues: ['Brace core and glutes', 'Elbows at ~45° to body', 'Full range of motion'] },
      { name: 'Rest', type: 'rest', value: 45, description: '45 seconds', cues: ['Let the chest recover'] },
      { name: 'Wide Push-Up', type: 'reps', value: 12,
        description: '12 reps', cues: ['Hands wider than shoulders', 'Feel the stretch at the bottom', 'Controlled lowering'] },
      { name: 'Rest', type: 'rest', value: 45, description: '45 seconds', cues: ['Keep it going'] },
      { name: 'Diamond Push-Up', type: 'reps', value: 10,
        description: '10 reps', cues: ['Hands form a diamond under chest', 'Elbows close to body', 'Triceps do most of the work'] },
      { name: 'Rest', type: 'rest', value: 60, description: '60 seconds', cues: ['Halfway — you\'re crushing it'] },
      { name: 'Pike Push-Up', type: 'reps', value: 8,
        description: '8 reps', cues: ['Hips high in an upside-down V', 'Lower top of head toward floor', 'Shoulder press motion'] },
      { name: 'Rest', type: 'rest', value: 60, description: '60 seconds', cues: ['Almost at the finish line'] },
      { name: 'Push-Up', type: 'reps', value: 10,
        description: '10 reps', cues: ['Give it everything you have left', 'Keep form tight', 'Slow, deliberate reps'] },
      { name: 'Rest', type: 'rest', value: 30, description: '30 seconds', cues: ['One more exercise!'] },
      { name: 'Tricep Dip', type: 'reps', value: 12,
        description: '12 reps', cues: ['Use a sturdy chair', 'Elbows pointing straight back', 'Lower to 90° at elbows'] },
    ]
  },

  {
    id: 'pull-progression',
    name: 'Pull Progression',
    tagline: 'Work toward your first pull-up with targeted training',
    category: 'pull',
    level: 'intermediate',
    durationMinutes: 18,
    exercises: [
      { name: 'Dead Hang', type: 'duration', value: 20,
        description: '20 seconds', cues: ['Grip overhand, shoulder-width', 'Relax fully into the hang', 'Builds grip and shoulder health'] },
      { name: 'Rest', type: 'rest', value: 30, description: '30 seconds', cues: ['Shake out your forearms'] },
      { name: 'Australian Row', type: 'reps', value: 10,
        description: '10 reps', cues: ['Use a table edge or bar', 'Body straight, heels on floor', 'Pull chest to the bar'] },
      { name: 'Rest', type: 'rest', value: 60, description: '60 seconds', cues: ['Feel the back muscles?'] },
      { name: 'Scapular Pull-Up', type: 'reps', value: 10,
        description: '10 reps', cues: ['Start in a dead hang', 'Depress shoulder blades without bending elbows', 'The "first inch" of a pull-up'] },
      { name: 'Rest', type: 'rest', value: 45, description: '45 seconds', cues: ['Scapular control is everything'] },
      { name: 'Negative Pull-Up', type: 'reps', value: 5,
        description: '5 reps — 5 sec each', cues: ['Jump to the top position', 'Lower as slowly as possible (5 sec)', 'Every rep builds pulling strength'] },
      { name: 'Rest', type: 'rest', value: 90, description: '90 seconds', cues: ['Full recovery for the next set'] },
      { name: 'Australian Row', type: 'reps', value: 8,
        description: '8 reps', cues: ['More horizontal = harder', 'Lead with elbows', 'Squeeze shoulder blades at top'] },
      { name: 'Rest', type: 'rest', value: 45, description: '45 seconds', cues: ['Last exercise!'] },
      { name: 'Dead Hang', type: 'duration', value: 30,
        description: '30 seconds', cues: ['Max effort hold', 'Active shoulders — don\'t just hang limp', 'You\'ve got this'] },
    ]
  },

  {
    id: 'core-crusher',
    name: 'Core Crusher',
    tagline: 'Functional core strength and real stability',
    category: 'core',
    level: 'intermediate',
    durationMinutes: 15,
    exercises: [
      { name: 'Plank Hold', type: 'duration', value: 45,
        description: '45 seconds', cues: ['Posterior pelvic tilt — tuck under slightly', 'Pull navel to spine', 'Breathe don\'t hold!'] },
      { name: 'Rest', type: 'rest', value: 30, description: '30 seconds', cues: ['Core warmed up'] },
      { name: 'Hollow Body Hold', type: 'duration', value: 30,
        description: '30 seconds', cues: ['Lower back in contact with floor', 'Keep tension through whole body', 'Arms overhead makes it harder'] },
      { name: 'Rest', type: 'rest', value: 45, description: '45 seconds', cues: ['Feel the burn'] },
      { name: 'Hanging Knee Raise', type: 'reps', value: 12,
        description: '12 reps', cues: ['Hang from a bar or door frame', 'Pull knees to chest with control', 'No swinging — slow and tight'] },
      { name: 'Rest', type: 'rest', value: 60, description: '60 seconds', cues: ['Great work!'] },
      { name: 'V-Up', type: 'reps', value: 10,
        description: '10 reps', cues: ['Arms and legs raise together', 'Touch hands to feet at the top', 'Lower slowly'] },
      { name: 'Rest', type: 'rest', value: 45, description: '45 seconds', cues: ['One more push'] },
      { name: 'Plank with Shoulder Tap', type: 'duration', value: 40,
        description: '40 seconds', cues: ['Hips stay still — fight rotation', 'Feet slightly wider than hips', 'One hand at a time'] },
      { name: 'Rest', type: 'rest', value: 30, description: '30 seconds', cues: ['Final exercise!'] },
      { name: 'Bicycle Crunch', type: 'duration', value: 40,
        description: '40 seconds', cues: ['Slow and deliberate — not rushed', 'Opposite elbow to knee', 'Keep lower back pressed down'] },
    ]
  },

  {
    id: 'full-body-burn',
    name: 'Full Body Burn',
    tagline: 'Hit everything in one session — strength meets cardio',
    category: 'full-body',
    level: 'intermediate',
    durationMinutes: 22,
    exercises: [
      { name: 'Jumping Jack', type: 'duration', value: 30,
        description: '30 seconds warm-up', cues: ['Get the blood pumping', 'Light and bouncy', 'Full arm extension'] },
      { name: 'Rest', type: 'rest', value: 15, description: '15 seconds', cues: [] },
      { name: 'Push-Up', type: 'reps', value: 12,
        description: '12 reps', cues: ['Start strong — keep form tight', 'Core braced', 'Full range of motion'] },
      { name: 'Rest', type: 'rest', value: 30, description: '30 seconds', cues: ['Catch breath, moving to legs'] },
      { name: 'Jump Squat', type: 'reps', value: 10,
        description: '10 reps', cues: ['Sit back on the squat', 'Drive explosively upward', 'Land softly with bent knees'] },
      { name: 'Rest', type: 'rest', value: 45, description: '45 seconds', cues: ['Good power output!'] },
      { name: 'Australian Row', type: 'reps', value: 10,
        description: '10 reps', cues: ['Use a table or bar', 'Pull chest to bar', 'Control the negative'] },
      { name: 'Rest', type: 'rest', value: 45, description: '45 seconds', cues: ['Upper back worked'] },
      { name: 'Reverse Lunge', type: 'reps', value: 10,
        description: '10 reps each side', cues: ['Step back long enough', 'Front knee stays over ankle', 'Squeeze glutes as you stand'] },
      { name: 'Rest', type: 'rest', value: 45, description: '45 seconds', cues: ['Two more exercises!'] },
      { name: 'Mountain Climbers', type: 'duration', value: 40,
        description: '40 seconds', cues: ['Hips level', 'Drive knees fast or slow — your choice', 'Breathe!'] },
      { name: 'Rest', type: 'rest', value: 45, description: '45 seconds', cues: ['Last exercise — give it all'] },
      { name: 'Hollow Body Hold', type: 'duration', value: 30,
        description: '30 seconds', cues: ['Finish with core', 'Press lower back down', 'Arms back, legs out'] },
    ]
  },

  // ── ADVANCED ──────────────────────────────────────────────

  {
    id: 'handstand-journey',
    name: 'Handstand Journey',
    tagline: 'Build the strength and balance to go upside down',
    category: 'push',
    level: 'advanced',
    durationMinutes: 30,
    exercises: [
      { name: 'Pike Push-Up', type: 'reps', value: 12,
        description: '12 reps', cues: ['Warm up the shoulders', 'Hips high, head through the window', 'Full range: nose to floor'] },
      { name: 'Rest', type: 'rest', value: 60, description: '60 seconds', cues: ['Shoulders activated'] },
      { name: 'Decline Push-Up', type: 'reps', value: 15,
        description: '15 reps', cues: ['Feet on a chair', 'Head tracks toward floor', 'Upper chest and shoulders targeted'] },
      { name: 'Rest', type: 'rest', value: 60, description: '60 seconds', cues: ['Shoulder press strength building'] },
      { name: 'Wall Handstand Hold', type: 'duration', value: 30,
        description: '30 seconds at the wall', cues: ['Chest facing wall', 'Push through the floor', 'Hollow body: squeeze glutes and core'] },
      { name: 'Rest', type: 'rest', value: 90, description: '90 seconds', cues: ['Central nervous system rest — use it'] },
      { name: 'Handstand Kick-Up Practice', type: 'reps', value: 5,
        description: '5 kick-up attempts', cues: ['Lunge entry, kick top leg', 'Look between your hands', 'Feel for balance — don\'t just slam the wall'] },
      { name: 'Rest', type: 'rest', value: 90, description: '90 seconds', cues: ['Balance is a skill — practice makes it'] },
      { name: 'Pseudo Planche Lean', type: 'duration', value: 20,
        description: '20 seconds', cues: ['Fingers pointing back', 'Lean forward with straight arms', 'Protract scapulas — round upper back slightly'] },
      { name: 'Rest', type: 'rest', value: 60, description: '60 seconds', cues: ['That\'s the hardest one'] },
      { name: 'Diamond Push-Up', type: 'reps', value: 10,
        description: '10 reps', cues: ['Tricep finisher', 'Elbows track back, not out', 'Touch chest to hands'] },
      { name: 'Rest', type: 'rest', value: 60, description: '60 seconds', cues: ['Final push!'] },
      { name: 'Wall Handstand Hold', type: 'duration', value: 30,
        description: '30 second finisher', cues: ['Use the form you built today', 'Push through the floor hard', 'Straight line from wrists to heels'] },
    ]
  },

  {
    id: 'bar-warrior',
    name: 'Bar Warrior',
    tagline: 'Master the bar with pull-ups, hanging strength, and control',
    category: 'pull',
    level: 'advanced',
    durationMinutes: 28,
    exercises: [
      { name: 'Dead Hang', type: 'duration', value: 30,
        description: '30 seconds', cues: ['Active shoulders — depress and retract slightly', 'Grip until it hurts (in a good way)', 'Forearm and grip warm-up'] },
      { name: 'Rest', type: 'rest', value: 30, description: '30 seconds', cues: ['Grip ready'] },
      { name: 'Pull-Up', type: 'reps', value: 8,
        description: '8 reps', cues: ['Initiate with scapular depression', 'Elbow path: down and back', 'Chin clearly over the bar'] },
      { name: 'Rest', type: 'rest', value: 75, description: '75 seconds', cues: ['Full lat recovery'] },
      { name: 'Commando Pull-Up', type: 'reps', value: 6,
        description: '6 reps (3 each side)', cues: ['Neutral grip (parallel)', 'Alternate which side of bar you pull to', 'Unilateral lat training'] },
      { name: 'Rest', type: 'rest', value: 90, description: '90 seconds', cues: ['These are tough — rest fully'] },
      { name: 'Chin-Up', type: 'reps', value: 8,
        description: '8 reps', cues: ['Supinated (palms toward you) grip', 'Biceps heavily involved', 'Full stretch at the bottom'] },
      { name: 'Rest', type: 'rest', value: 75, description: '75 seconds', cues: ['You\'re building real strength'] },
      { name: 'L-Sit Hang', type: 'duration', value: 15,
        description: '15 seconds', cues: ['Legs parallel to floor — straight', 'Compress abs hard', 'Shoulders still active, not shrugged'] },
      { name: 'Rest', type: 'rest', value: 60, description: '60 seconds', cues: ['Core and grip — advanced combo'] },
      { name: 'Slow Negative Pull-Up', type: 'reps', value: 5,
        description: '5 reps — 6 sec each', cues: ['Jump or step to chin over bar', 'Lower to a 6 count — no rushing', 'Full stretch at the bottom each time'] },
      { name: 'Rest', type: 'rest', value: 60, description: '60 seconds', cues: ['Almost there!'] },
      { name: 'Pull-Up', type: 'reps', value: 0,
        description: 'Max reps', cues: ['Everything you have left', 'Keep form until form breaks', 'This is where gains live'] },
    ]
  },
];

/* ============================================================
   2. STATE
   ============================================================ */

const state = {
  view: 'library',
  selectedSequenceId: null,
  filters: { category: 'all', level: 'all' },
  workout: {
    sequenceId: null,
    exerciseIndex: 0,
    timerSeconds: 0,
    timerTotal: 0,
    timerInterval: null,
    cueInterval: null,
    cueIndex: 0,
    isPaused: false,
    startTime: null,
    elapsedSeconds: 0,
  },
};

/* ============================================================
   3. ROUTER
   ============================================================ */

function showView(name) {
  state.view = name;
  document.querySelectorAll('.view').forEach(v => v.classList.remove('active'));
  document.getElementById(`view-${name}`).classList.add('active');
  if (name !== 'library') {
    history.pushState({ view: name }, '');
  }
}

window.addEventListener('popstate', () => {
  if (state.view === 'workout') {
    stopWorkout();
    renderDetail();
    showView('detail');
  } else if (state.view === 'detail') {
    renderLibrary();
    showView('library');
  }
});

/* ============================================================
   4. HELPERS
   ============================================================ */

function getSequence(id) {
  return SEQUENCES.find(s => s.id === id);
}

function filteredSequences() {
  return SEQUENCES.filter(s => {
    const catOk = state.filters.category === 'all' || s.category === state.filters.category;
    const lvlOk = state.filters.level === 'all' || s.level === state.filters.level;
    return catOk && lvlOk;
  });
}

function formatTime(seconds) {
  const m = Math.floor(seconds / 60);
  const s = seconds % 60;
  return `${m}:${s.toString().padStart(2, '0')}`;
}

function formatElapsed(seconds) {
  const m = Math.floor(seconds / 60);
  const s = seconds % 60;
  if (m === 0) return `${s}s`;
  return `${m}m ${s}s`;
}

function accentColor(category) {
  const map = {
    push: 'var(--color-push)',
    pull: 'var(--color-pull)',
    core: 'var(--color-core)',
    legs: 'var(--color-legs)',
    'full-body': 'var(--color-full-body)',
  };
  return map[category] || 'var(--color-accent)';
}

function exerciseAmount(ex) {
  if (ex.type === 'reps') {
    if (ex.value === 0) return 'Max reps';
    return `${ex.value} reps`;
  }
  if (ex.type === 'rest') return `${ex.value}s rest`;
  return formatTime(ex.value);
}

/* ============================================================
   5. TIMER
   ============================================================ */

const RING_RADIUS = 54;
const RING_CIRCUMFERENCE = 2 * Math.PI * RING_RADIUS;

function updateTimerDOM() {
  const w = state.workout;
  const timerEl = document.getElementById('timer-display');
  const ringFill = document.getElementById('ring-fill');
  if (!timerEl || !ringFill) return;

  timerEl.textContent = formatTime(w.timerSeconds);

  const progress = w.timerTotal > 0 ? w.timerSeconds / w.timerTotal : 1;
  ringFill.style.strokeDashoffset = RING_CIRCUMFERENCE * (1 - progress);
}

function updateCueDOM() {
  const w = state.workout;
  const seq = getSequence(w.sequenceId);
  if (!seq) return;
  const ex = seq.exercises[w.exerciseIndex];
  const cueEl = document.getElementById('workout-cue');
  if (!cueEl || !ex.cues || ex.cues.length === 0) return;
  cueEl.style.opacity = '0';
  setTimeout(() => {
    const cue = ex.cues[w.cueIndex % ex.cues.length];
    cueEl.textContent = cue ? `"${cue}"` : '';
    cueEl.style.opacity = '1';
  }, 150);
}

function startCueRotation() {
  clearInterval(state.workout.cueInterval);
  state.workout.cueIndex = 0;
  updateCueDOM();
  state.workout.cueInterval = setInterval(() => {
    state.workout.cueIndex++;
    updateCueDOM();
  }, 4000);
}

function startTimer(seconds) {
  clearInterval(state.workout.timerInterval);
  state.workout.timerSeconds = seconds;
  state.workout.timerTotal = seconds;
  state.workout.isPaused = false;
  updateTimerDOM();

  state.workout.timerInterval = setInterval(() => {
    if (!state.workout.isPaused) {
      state.workout.timerSeconds--;
      state.workout.elapsedSeconds++;
      updateTimerDOM();
      if (state.workout.timerSeconds <= 0) {
        clearInterval(state.workout.timerInterval);
        advanceExercise();
      }
    }
  }, 1000);
}

function pauseTimer() {
  state.workout.isPaused = true;
  const btn = document.getElementById('btn-pause');
  if (btn) btn.textContent = 'Resume';
}

function resumeTimer() {
  state.workout.isPaused = false;
  const btn = document.getElementById('btn-pause');
  if (btn) btn.textContent = 'Pause';
}

function togglePause() {
  if (state.workout.isPaused) resumeTimer();
  else pauseTimer();
}

function stopWorkout() {
  clearInterval(state.workout.timerInterval);
  clearInterval(state.workout.cueInterval);
  state.workout.timerInterval = null;
  state.workout.cueInterval = null;
}

/* ============================================================
   6. WORKOUT LOGIC
   ============================================================ */

function startWorkout(sequenceId) {
  stopWorkout();
  const seq = getSequence(sequenceId);
  if (!seq) return;
  state.workout = {
    sequenceId,
    exerciseIndex: 0,
    timerSeconds: 0,
    timerTotal: 0,
    timerInterval: null,
    cueInterval: null,
    cueIndex: 0,
    isPaused: false,
    startTime: Date.now(),
    elapsedSeconds: 0,
  };
  renderWorkout();
  showView('workout');
  launchCurrentExercise();
}

function launchCurrentExercise() {
  const w = state.workout;
  const seq = getSequence(w.sequenceId);
  if (!seq) return;
  const ex = seq.exercises[w.exerciseIndex];

  // Update workout view UI with new exercise
  renderWorkoutExercise(seq, ex, w.exerciseIndex);

  // Start timer for timed exercises
  if (ex.type === 'duration' || ex.type === 'rest') {
    startCueRotation();
    startTimer(ex.value);
  } else {
    // Reps — just show cues
    clearInterval(state.workout.cueInterval);
    state.workout.cueIndex = 0;
    updateCueDOM();
  }
}

function advanceExercise() {
  const w = state.workout;
  const seq = getSequence(w.sequenceId);
  if (!seq) return;

  clearInterval(state.workout.cueInterval);
  w.exerciseIndex++;

  if (w.exerciseIndex >= seq.exercises.length) {
    showWorkoutComplete();
    return;
  }

  launchCurrentExercise();
}

/* ============================================================
   7. RENDERERS
   ============================================================ */

// ── Library ────────────────────────────────────────────────

function renderLibrary() {
  const sequences = filteredSequences();
  const total = SEQUENCES.length;

  const filterLevels = [
    { value: 'all', label: 'All Levels' },
    { value: 'beginner', label: 'Beginner' },
    { value: 'intermediate', label: 'Intermediate' },
    { value: 'advanced', label: 'Advanced' },
  ];

  const filterCategories = [
    { value: 'all', label: 'All' },
    { value: 'push', label: 'Push' },
    { value: 'pull', label: 'Pull' },
    { value: 'core', label: 'Core' },
    { value: 'legs', label: 'Legs' },
    { value: 'full-body', label: 'Full Body' },
  ];

  const pils = (list, type) => list.map(f => `
    <button class="pill${state.filters[type] === f.value ? ' active' : ''}"
            data-filter-type="${type}" data-filter="${f.value}">
      ${f.label}
    </button>`).join('');

  const cardHtml = sequences.length === 0
    ? `<div class="empty-state">
         <div class="empty-state__icon">🤸</div>
         <p>No sequences match your filters.</p>
       </div>`
    : sequences.map(seq => `
      <button class="seq-card" data-sequence-id="${seq.id}">
        <div class="seq-card__accent" style="background:${accentColor(seq.category)}"></div>
        <div class="seq-card__body">
          <div class="seq-card__name">${seq.name}</div>
          <div class="seq-card__tagline">${seq.tagline}</div>
          <div class="seq-card__meta">
            <span class="badge badge--${seq.level}">${seq.level}</span>
            <span class="badge badge--${seq.category}">${seq.category.replace('-', ' ')}</span>
            <span class="duration-chip">
              <svg viewBox="0 0 24 24" stroke-width="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
              ${seq.durationMinutes} min
            </span>
          </div>
        </div>
      </button>`).join('');

  document.getElementById('view-library').innerHTML = `
    <header class="app-bar">
      <div class="app-bar__logo">
        <svg viewBox="0 0 24 24"><path d="M6.5 6.5h11v11h-11z M12 2v4 M12 18v4 M2 12h4 M18 12h4"/></svg>
      </div>
      <div>
        <div class="app-bar__title">Calisthenics</div>
        <div class="app-bar__subtitle">${total} workout sequences</div>
      </div>
    </header>

    <div class="filter-section">
      <div class="filter-label">Level</div>
      <div class="filter-pills" id="pills-level">${pils(filterLevels, 'level')}</div>
      <div class="filter-label">Focus</div>
      <div class="filter-pills" id="pills-category">${pils(filterCategories, 'category')}</div>
    </div>

    <div class="library-content">
      <div class="library-count">${sequences.length} of ${total} sequences</div>
      <div class="card-grid">${cardHtml}</div>
    </div>
  `;

  document.getElementById('view-library').addEventListener('click', e => {
    const card = e.target.closest('[data-sequence-id]');
    if (card) {
      state.selectedSequenceId = card.dataset.sequenceId;
      renderDetail();
      showView('detail');
      return;
    }
    const pill = e.target.closest('[data-filter-type]');
    if (pill) {
      state.filters[pill.dataset.filterType] = pill.dataset.filter;
      renderLibrary();
    }
  });
}

// ── Detail ─────────────────────────────────────────────────

function renderDetail() {
  const seq = getSequence(state.selectedSequenceId);
  if (!seq) return;

  const color = accentColor(seq.category);
  const nonRestExercises = seq.exercises.filter(e => e.type !== 'rest');

  const exerciseRows = seq.exercises.map((ex, i) => {
    const isRest = ex.type === 'rest';
    const num = isRest ? '·' : seq.exercises.slice(0, i).filter(e => e.type !== 'rest').length + 1;
    return `
      <div class="exercise-item${isRest ? ' exercise-item--rest' : ''}">
        <div class="exercise-num">${num}</div>
        <div class="exercise-info">
          <div class="exercise-name">${ex.name}</div>
          ${ex.description ? `<div class="exercise-desc">${ex.description}</div>` : ''}
        </div>
        <div class="exercise-amount">${exerciseAmount(ex)}</div>
      </div>`;
  }).join('');

  document.getElementById('view-detail').innerHTML = `
    <header class="app-bar">
      <button class="btn-back" id="btn-back-detail">
        <svg viewBox="0 0 24 24" stroke-width="2"><polyline points="15 18 9 12 15 6"/></svg>
        Back
      </button>
      <div style="flex:1"></div>
      <span class="badge badge--${seq.level}">${seq.level}</span>
    </header>

    <div class="detail-header">
      <div class="detail-accent-bar" style="background:${color}"></div>
      <h1 class="detail-name">${seq.name}</h1>
      <p class="detail-tagline">${seq.tagline}</p>
      <div class="detail-meta">
        <span class="badge badge--${seq.category}">${seq.category.replace('-', ' ')}</span>
        <span class="detail-stat">
          <svg viewBox="0 0 24 24" stroke-width="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
          ~${seq.durationMinutes} min
        </span>
        <span class="detail-stat">
          <svg viewBox="0 0 24 24" stroke-width="2"><path d="M12 2l2 7h7l-5.5 4 2 7L12 16l-5.5 4 2-7L3 9h7z"/></svg>
          ${nonRestExercises.length} exercises
        </span>
      </div>
    </div>

    <div class="exercise-list">
      <div class="exercise-list__heading">Exercises</div>
      ${exerciseRows}
    </div>

    <div class="detail-cta">
      <button class="btn btn-primary btn-full" id="btn-start-workout" style="background:${color}">
        Start Workout
      </button>
    </div>
  `;

  document.getElementById('btn-back-detail').addEventListener('click', () => {
    renderLibrary();
    showView('library');
  });

  document.getElementById('btn-start-workout').addEventListener('click', () => {
    startWorkout(seq.id);
  });
}

// ── Workout ─────────────────────────────────────────────────

function renderWorkout() {
  const w = state.workout;
  const seq = getSequence(w.sequenceId);
  if (!seq) return;

  document.getElementById('view-workout').innerHTML = `
    <div class="workout-progress-bar">
      <div class="workout-progress-bar__fill" id="workout-progress-fill" style="width:0%"></div>
    </div>
    <div class="workout-header">
      <span class="workout-seq-name">${seq.name}</span>
      <button class="btn-end" id="btn-end-workout">End</button>
    </div>
    <div id="workout-body">
      <!-- Filled by renderWorkoutExercise() -->
    </div>
  `;

  document.getElementById('btn-end-workout').addEventListener('click', () => {
    stopWorkout();
    renderDetail();
    showView('detail');
  });
}

function renderWorkoutExercise(seq, ex, index) {
  const isRest = ex.type === 'rest';
  const isReps = ex.type === 'reps';
  const isTimed = ex.type === 'duration';
  const nonRestTotal = seq.exercises.filter(e => e.type !== 'rest').length;
  const nonRestDone = seq.exercises.slice(0, index).filter(e => e.type !== 'rest').length;
  const progressPct = nonRestTotal > 0 ? (nonRestDone / nonRestTotal) * 100 : 0;

  // Update progress bar
  const fill = document.getElementById('workout-progress-fill');
  if (fill) fill.style.width = `${progressPct}%`;

  // Next exercise preview
  const nextEx = seq.exercises[index + 1];
  const nextUpHtml = nextEx ? `
    <div class="workout-next-up">
      <span class="workout-next-up__label">Next</span>
      <span class="workout-next-up__name">${nextEx.name} — ${exerciseAmount(nextEx)}</span>
    </div>` : '';

  // Counter text
  const counterText = isRest
    ? 'Rest'
    : `Exercise ${nonRestDone + 1} of ${nonRestTotal}`;

  // Timer ring SVG
  const ringHtml = `
    <div class="workout-ring-wrapper">
      <svg class="progress-ring" width="136" height="136" viewBox="0 0 136 136">
        <circle class="progress-ring__track" cx="68" cy="68" r="${RING_RADIUS}"/>
        <circle class="progress-ring__fill" id="ring-fill" cx="68" cy="68" r="${RING_RADIUS}"
          stroke-dasharray="${RING_CIRCUMFERENCE}" stroke-dashoffset="0"/>
      </svg>
      <div class="workout-ring-center">
        <div class="workout-timer-display" id="timer-display">${formatTime(ex.value)}</div>
        <div class="workout-timer-label">${isRest ? 'rest' : 'seconds'}</div>
      </div>
    </div>`;

  // Reps display
  const repsHtml = `
    <div class="workout-reps-display">
      <div class="workout-reps-number">${ex.value === 0 ? '∞' : ex.value}</div>
      <div class="workout-reps-label">reps</div>
    </div>`;

  // Controls
  let controlsHtml;
  if (isReps) {
    controlsHtml = `
      <button class="btn btn-primary btn-full" id="btn-done-reps">
        Done — Next
      </button>`;
  } else if (isRest) {
    controlsHtml = `
      <button class="btn btn-rest btn-full" id="btn-skip-rest">
        Skip Rest
      </button>`;
  } else {
    controlsHtml = `
      <div class="workout-controls-row">
        <button class="btn btn-primary" id="btn-pause">Pause</button>
        <button class="btn btn-secondary" id="btn-skip">Skip</button>
      </div>`;
  }

  // Workout view class for rest mode
  const workoutViewEl = document.getElementById('view-workout');
  if (isRest) {
    workoutViewEl.classList.add('workout-rest-mode');
  } else {
    workoutViewEl.classList.remove('workout-rest-mode');
  }

  // Cue display
  const cueHtml = `<div class="workout-cue" id="workout-cue" style="transition:opacity 0.3s ease"></div>`;

  document.getElementById('workout-body').innerHTML = `
    <div class="workout-exercise-zone">
      <div class="workout-counter">${counterText}</div>
      <div class="workout-exercise-name">${ex.name}</div>
      ${isTimed || isRest ? ringHtml : repsHtml}
      ${cueHtml}
    </div>
    ${nextUpHtml}
    <div class="workout-controls">
      ${controlsHtml}
    </div>
  `;

  // Wire up controls
  const btnDone = document.getElementById('btn-done-reps');
  if (btnDone) btnDone.addEventListener('click', advanceExercise);

  const btnSkipRest = document.getElementById('btn-skip-rest');
  if (btnSkipRest) btnSkipRest.addEventListener('click', () => {
    clearInterval(state.workout.timerInterval);
    advanceExercise();
  });

  const btnPause = document.getElementById('btn-pause');
  if (btnPause) btnPause.addEventListener('click', togglePause);

  const btnSkip = document.getElementById('btn-skip');
  if (btnSkip) btnSkip.addEventListener('click', () => {
    clearInterval(state.workout.timerInterval);
    advanceExercise();
  });
}

function showWorkoutComplete() {
  stopWorkout();
  const seq = getSequence(state.workout.sequenceId);
  const elapsed = Math.round((Date.now() - state.workout.startTime) / 1000);
  const exercisesCompleted = seq
    ? seq.exercises.filter(e => e.type !== 'rest').length
    : 0;

  document.getElementById('view-workout').innerHTML = `
    <div class="workout-complete">
      <div class="complete-icon">
        <svg viewBox="0 0 24 24" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>
      </div>
      <div class="complete-title">Workout Complete!</div>
      <div class="complete-subtitle">${seq ? seq.name : 'Session'} finished. Great work.</div>
      <div class="complete-stats">
        <div class="complete-stat">
          <div class="complete-stat__value">${formatElapsed(elapsed)}</div>
          <div class="complete-stat__label">Time</div>
        </div>
        <div class="complete-stat">
          <div class="complete-stat__value">${exercisesCompleted}</div>
          <div class="complete-stat__label">Exercises</div>
        </div>
      </div>
      <div class="complete-buttons">
        <button class="btn btn-primary btn-full" id="btn-do-again">Do It Again</button>
        <button class="btn btn-ghost btn-full" id="btn-back-library">Back to Library</button>
      </div>
    </div>
  `;

  document.getElementById('btn-do-again').addEventListener('click', () => {
    startWorkout(state.workout.sequenceId);
  });

  document.getElementById('btn-back-library').addEventListener('click', () => {
    renderLibrary();
    showView('library');
  });
}

/* ============================================================
   8. INIT
   ============================================================ */

document.addEventListener('DOMContentLoaded', () => {
  renderLibrary();
});
