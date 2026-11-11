/**
 * Romantic Music Box & Harp Synthesizer via Web Audio API.
 * Provides a gentle, calming romantic lullaby melody that loops smoothly.
 */

class RomanticBGM {
  private ctx: AudioContext | null = null;
  private isPlaying = false;
  private timer: number | null = null;
  private masterGain: GainNode | null = null;

  // Gentle pentatonic / romantic chord progression: C, G, Am, F, Em, F, G, C
  private notes = [
    // Frequency in Hz
    261.63, // C4
    329.63, // E4
    392.00, // G4
    523.25, // C5
    392.00, // G4
    329.63, // E4

    293.66, // D4
    349.23, // F4
    440.00, // A4
    587.33, // D5
    440.00, // A4
    349.23, // F4

    220.00, // A3
    261.63, // C4
    329.63, // E4
    440.00, // A4
    329.63, // E4
    261.63, // C4

    174.61, // F3
    220.00, // A3
    261.63, // C4
    349.23, // F4
    261.63, // C4
    220.00, // A3
  ];

  private currentNoteIndex = 0;

  private initContext() {
    if (!this.ctx) {
      const AudioContextClass = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      this.ctx = new AudioContextClass();
      this.masterGain = this.ctx.createGain();
      this.masterGain.gain.setValueAtTime(0.12, this.ctx.currentTime);
      this.masterGain.connect(this.ctx.destination);
    }
    if (this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
  }

  private playTone(freq: number) {
    if (!this.ctx || !this.masterGain) return;

    const osc = this.ctx.createOscillator();
    const noteGain = this.ctx.createGain();

    // Soft sine wave with a hint of triangle warmth for music box feel
    osc.type = 'sine';
    osc.frequency.setValueAtTime(freq, this.ctx.currentTime);

    const now = this.ctx.currentTime;
    noteGain.gain.setValueAtTime(0.001, now);
    noteGain.gain.exponentialRampToValueAtTime(0.3, now + 0.05);
    noteGain.gain.exponentialRampToValueAtTime(0.001, now + 1.2);

    osc.connect(noteGain);
    noteGain.connect(this.masterGain);

    osc.start(now);
    osc.stop(now + 1.3);
  }

  public start() {
    this.initContext();
    if (this.isPlaying) return;
    this.isPlaying = true;

    const step = () => {
      if (!this.isPlaying) return;
      const freq = this.notes[this.currentNoteIndex];
      this.playTone(freq);
      this.currentNoteIndex = (this.currentNoteIndex + 1) % this.notes.length;

      // Romantic gentle tempo (approx 340ms per arpeggio note)
      this.timer = window.setTimeout(step, 360);
    };

    step();
  }

  public stop() {
    this.isPlaying = false;
    if (this.timer !== null) {
      clearTimeout(this.timer);
      this.timer = null;
    }
  }

  public toggle(): boolean {
    if (this.isPlaying) {
      this.stop();
      return false;
    } else {
      this.start();
      return true;
    }
  }

  public getStatus(): boolean {
    return this.isPlaying;
  }
}

export const romanticBGM = new RomanticBGM();
