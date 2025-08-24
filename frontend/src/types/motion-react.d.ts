declare module 'motion/react' {
  import * as React from 'react';

  type Unsubscribe = () => void;

  // loose stubs for motion/react used in the project
  export const motion: any;
  export const AnimatePresence: React.FC<any>;

  // cubicBezier helper used in some components
  export const cubicBezier: (...args: any[]) => any;

  // HTMLMotionProps generic used in some components
  export type HTMLMotionProps<T extends keyof JSX.IntrinsicElements = any> = any;

  // useScroll — returns an object containing a scrollY-like value with an `on` listener
  export function useScroll(): {
    scrollY: {
      on: (event: string, cb: (v: any) => void) => Unsubscribe;
      get?: () => any;
    };
    on?: (event: string, cb: (v: any) => void) => Unsubscribe;
  };

  // Common hooks used across the codebase
  export function useInView(ref: React.RefObject<any>, options?: any): boolean;

  export function useMotionValue<T = any>(initial?: T): {
    on: (event: string, cb: (v: T) => void) => Unsubscribe;
    get: () => T;
    set: (v: T) => void;
  };

  export function useSpring<T = any>(value: T, opts?: any): any;
  export function useTransform(...args: any[]): any;
  export function useAnimation(): any;

  export default motion;
}