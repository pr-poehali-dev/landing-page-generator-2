const soundCache: Record<string, HTMLAudioElement> = {};

export const playSound = (soundType: 'meow' | 'purr' | 'click' | 'success') => {
  try {
    const AudioContextClass = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
    const audioContext = new AudioContextClass();

    if (soundType === 'meow') {
      const duration = 0.5;
      const now = audioContext.currentTime;

      const oscillator1 = audioContext.createOscillator();
      const oscillator2 = audioContext.createOscillator();
      const gainNode = audioContext.createGain();
      const filter = audioContext.createBiquadFilter();

      oscillator1.connect(filter);
      oscillator2.connect(filter);
      filter.connect(gainNode);
      gainNode.connect(audioContext.destination);

      oscillator1.type = 'sawtooth';
      oscillator2.type = 'square';
      filter.type = 'bandpass';
      filter.frequency.value = 1500;
      filter.Q.value = 1;

      oscillator1.frequency.setValueAtTime(900, now);
      oscillator1.frequency.exponentialRampToValueAtTime(600, now + 0.15);
      oscillator1.frequency.exponentialRampToValueAtTime(400, now + duration);

      oscillator2.frequency.setValueAtTime(450, now);
      oscillator2.frequency.exponentialRampToValueAtTime(300, now + 0.15);
      oscillator2.frequency.exponentialRampToValueAtTime(200, now + duration);

      gainNode.gain.setValueAtTime(0, now);
      gainNode.gain.linearRampToValueAtTime(0.15, now + 0.02);
      gainNode.gain.linearRampToValueAtTime(0.12, now + 0.1);
      gainNode.gain.exponentialRampToValueAtTime(0.01, now + duration);

      oscillator1.start(now);
      oscillator2.start(now);
      oscillator1.stop(now + duration);
      oscillator2.stop(now + duration);

      setTimeout(() => {
        oscillator1.disconnect();
        oscillator2.disconnect();
        filter.disconnect();
        gainNode.disconnect();
        audioContext.close();
      }, duration * 1000 + 100);

      return;
    }

    let frequency = 400;
    let duration = 0.15;
    let volume = 0.15;

    switch (soundType) {
      case 'purr':
        frequency = 200;
        duration = 0.5;
        volume = 0.12;
        break;
      case 'click':
        frequency = 600;
        duration = 0.1;
        volume = 0.15;
        break;
      case 'success':
        frequency = 900;
        duration = 0.4;
        volume = 0.2;
        break;
    }

    const oscillator = audioContext.createOscillator();
    const gainNode = audioContext.createGain();

    oscillator.connect(gainNode);
    gainNode.connect(audioContext.destination);

    oscillator.frequency.value = frequency;
    oscillator.type = 'sine';

    gainNode.gain.setValueAtTime(0, audioContext.currentTime);
    gainNode.gain.linearRampToValueAtTime(volume, audioContext.currentTime + 0.01);
    
    if (soundType === 'purr') {
      oscillator.frequency.setValueAtTime(frequency, audioContext.currentTime);
      oscillator.frequency.linearRampToValueAtTime(frequency * 1.1, audioContext.currentTime + duration * 0.5);
      oscillator.frequency.linearRampToValueAtTime(frequency, audioContext.currentTime + duration);
    }

    gainNode.gain.linearRampToValueAtTime(0, audioContext.currentTime + duration);

    oscillator.start(audioContext.currentTime);
    oscillator.stop(audioContext.currentTime + duration);

    oscillator.onended = () => {
      oscillator.disconnect();
      gainNode.disconnect();
      audioContext.close();
    };
  } catch (error) {
    console.log('Sound playback not supported');
  }
};

export const playMeowSequence = () => {
  playSound('meow');
  setTimeout(() => playSound('purr'), 400);
};