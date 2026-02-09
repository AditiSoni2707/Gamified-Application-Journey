// Load XP and completed steps from localStorage
let xp = parseInt(localStorage.getItem('xp')) || 0;
let completedSteps = JSON.parse(localStorage.getItem('completedSteps')) || [];

const xpCounter = document.getElementById('xpCounter');
const steps = [1,2,3,4];

function updateUI() {
  xpCounter.textContent = `XP: ${xp}`;

  steps.forEach(s => {
    const stepEl = document.getElementById('step'+s).querySelector('.circle');
    if(completedSteps.includes(s)) stepEl.classList.add('active');
  });

  if(xp >= 50) document.getElementById('badge50').classList.add('show');
  if(xp >= 100) document.getElementById('badge100').classList.add('show');
}

function completeStep(step) {
  if(!completedSteps.includes(step)) {
    switch(step){
      case 1: xp += 20; break;
      case 2: xp += 10; break;
      case 3: xp += 30; break;
      case 4: alert('✅ Status checked!'); break;
    }

    if(step !== 4) completedSteps.push(step);

    localStorage.setItem('xp', xp);
    localStorage.setItem('completedSteps', JSON.stringify(completedSteps));

    updateUI();

    // Badge animations
    if(xp >= 50 && !document.getElementById('badge50').classList.contains('show')) {
      document.getElementById('badge50').classList.add('show');
      confetti();
    }
    if(xp >= 100 && !document.getElementById('badge100').classList.contains('show')) {
      document.getElementById('badge100').classList.add('show');
      confetti();
    }
  }
}
