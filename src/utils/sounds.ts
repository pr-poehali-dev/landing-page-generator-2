const soundCache: Record<string, HTMLAudioElement> = {};

export const playSound = (soundType: 'meow' | 'purr' | 'click' | 'success') => {
  try {
    let frequency = 400;
    let duration = 0.15;
    let volume = 0.15;

    switch (soundType) {
      case 'meow':
        frequency = 800;
        duration = 0.3;
        volume = 0.2;
        break;
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

    const audioContext = new (window.AudioContext || (window as any).webkitAudioContext)();
    const oscillator = audioContext.createOscillator();
    const gainNode = audioContext.createGain();

    oscillator.connect(gainNode);
    gainNode.connect(audioContext.destination);

    oscillator.frequency.value = frequency;
    oscillator.type = 'sine';

    gainNode.gain.setValueAtTime(0, audioContext.currentTime);
    gainNode.gain.linearRampToValueAtTime(volume, audioContext.currentTime + 0.01);
    
    if (soundType === 'meow') {
      oscillator.frequency.setValueAtTime(frequency, audioContext.currentTime);
      oscillator.frequency.linearRampToValueAtTime(frequency * 0.7, audioContext.currentTime + duration * 0.5);
      oscillator.frequency.linearRampToValueAtTime(frequency * 0.5, audioContext.currentTime + duration);
    } else if (soundType === 'purr') {
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
