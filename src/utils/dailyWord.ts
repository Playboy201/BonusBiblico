import { Salmo, PalavraDoDia } from '../types';

const ROTATION_INTERVAL = 10 * 60 * 60 * 1000;
const STORAGE_KEY = 'palavra_do_dia';
const USED_SALMOS_KEY = 'salmos_usados';

export function getPalavraDoDia(salmos: Salmo[]): PalavraDoDia | null {
  if (salmos.length === 0) return null;

  const now = Date.now();
  const stored = localStorage.getItem(STORAGE_KEY);

  if (stored) {
    try {
      const parsed: PalavraDoDia = JSON.parse(stored);
      if (parsed.expiresAt > now) {
        return parsed;
      }
    } catch (e) {
      console.error('Error parsing stored palavra do dia:', e);
    }
  }

  let usedSalmos: number[] = [];
  try {
    const storedUsed = localStorage.getItem(USED_SALMOS_KEY);
    if (storedUsed) {
      usedSalmos = JSON.parse(storedUsed);
    }
  } catch (e) {
    console.error('Error parsing used salmos:', e);
  }

  if (usedSalmos.length >= salmos.length) {
    usedSalmos = [];
  }

  const availableSalmos = salmos.filter(s => !usedSalmos.includes(s.numero));

  const randomIndex = Math.floor(Math.random() * availableSalmos.length);
  const selectedSalmo = availableSalmos[randomIndex];

  const randomVerseIndex = Math.floor(Math.random() * selectedSalmo.versiculos.length);
  const selectedVerse = selectedSalmo.versiculos[randomVerseIndex];

  usedSalmos.push(selectedSalmo.numero);
  localStorage.setItem(USED_SALMOS_KEY, JSON.stringify(usedSalmos));

  const palavraDoDia: PalavraDoDia = {
    salmo: selectedSalmo,
    versiculo: selectedVerse,
    expiresAt: now + ROTATION_INTERVAL
  };

  localStorage.setItem(STORAGE_KEY, JSON.stringify(palavraDoDia));

  return palavraDoDia;
}

export function getTimeUntilNextWord(): string {
  const stored = localStorage.getItem(STORAGE_KEY);
  if (!stored) return '10 horas';

  try {
    const parsed: PalavraDoDia = JSON.parse(stored);
    const now = Date.now();
    const diff = parsed.expiresAt - now;

    if (diff <= 0) return 'Atualizando...';

    const hours = Math.floor(diff / (60 * 60 * 1000));
    const minutes = Math.floor((diff % (60 * 60 * 1000)) / (60 * 1000));

    if (hours > 0) {
      return `${hours}h ${minutes}min`;
    }
    return `${minutes} minutos`;
  } catch (e) {
    return '10 horas';
  }
}
