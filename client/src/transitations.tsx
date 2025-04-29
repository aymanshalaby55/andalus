// @ts-ignore
import gsap from 'gsap';
export function fadeOut(element: HTMLElement): Promise<void> {
  return gsap.to(element, { opacity: 0, duration: 0.5 }).then();
}

export function fadeIn(element: HTMLElement): Promise<void> {
  return gsap.fromTo(element, { opacity: 0 }, { opacity: 1, duration: 0.5 }).then();
}
