import { initTabs, initBuildSubTabs, initState, initRaces, writeBuildId, initSpecial } from './core.js';
initTabs();
initBuildSubTabs();
initState();
initRaces();
initSpecial();
writeBuildId('v1.4c');


document.addEventListener('click', (e) => {
  const btn = e.target.closest('.subtab');
  if(!btn) return;
  if(btn.dataset.subtab === 'special') {
    setTimeout(() => initSpecial(), 0);
  }
});