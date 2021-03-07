// UI Element

const durationInput = document.getElementById('duration'),
      startBtn = document.getElementById('start'),
      pauseBtn = document.getElementById('pause');

const timer = new Timer(durationInput, startBtn, pauseBtn);

timer.start();