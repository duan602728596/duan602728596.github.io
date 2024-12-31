class Audio {
  audioContext = new AudioContext();
  source = this.audioContext.createBufferSource();
  analyser = this.audioContext.createAnalyser();
  stereoPanner = this.audioContext.createStereoPanner();

  constructor({ canvas, buffer, defaultStereoPannerValue = 0 }) {
    this.canvasWidth = canvas.width;
    this.canvasHeight = canvas.height;
    this.canvasContext = canvas.getContext('2d');
    this.buffer = buffer; // 视频buffer
  }

  async init() {
    this.canvasContext.lineWidth = 3;
    this.canvasContext.strokeStyle = 'rgb(0, 0, 0)';
    this.source.buffer = await this.audioContext.decodeAudioData(this.buffer);
    this.source.connect(this.analyser);
    this.source.connect(this.stereoPanner);
    this.source.connect(this.audioContext.destination);
    this.stereoPanner.connect(this.audioContext.destination);
    this.analyser.fftSize = 2_048;
  }

  drawAnalyser = () => {
    const dataArray = new Uint8Array(this.analyser.frequencyBinCount);

    this.canvasContext.clearRect(0, 0, this.canvasWidth, this.canvasHeight);
    this.analyser.getByteTimeDomainData(dataArray);
    this.canvasContext.beginPath();

    for (let i = 0; i < this.analyser.frequencyBinCount; i += 4) {
      const x = i,
        y = dataArray[i];

      if (i === 0) {
        this.canvasContext.moveTo(x, y);
      } else {
        this.canvasContext.lineTo(x, y);
      }
    }

    this.canvasContext.lineTo(this.canvasWidth, 0);
    this.canvasContext.stroke();
    this.timer = requestAnimationFrame(this.drawAnalyser);
  };

  start() {
    this.setStereoPannerValue(0);
    this.timer = requestAnimationFrame(this.drawAnalyser);
    this.source.start();
  }

  stop() {
    cancelAnimationFrame(this.timer);
    this.source.stop();
    this.audioContext.close();
  }

  setStereoPannerValue(value) {
    this.stereoPanner.pan.value = value;
  }
}

export default Audio;