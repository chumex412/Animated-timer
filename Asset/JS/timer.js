class Timer {
  constructor(durationInput, startBtn, pauseBtn) {
    this.durationInput = durationInput;
    this.startBtn = startBtn;
    this.pauseBtn = pauseBtn;
  }

  start() {
    const {startBtn} = this;
    startBtn.addEventListener('click', () => {
      console.log('Timer start right now');
    });
  }

  pause() {

  }
}