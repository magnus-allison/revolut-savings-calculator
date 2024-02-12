import { twMerge } from 'tailwind-merge';
import { clsx, ClassValue } from 'clsx';

const cn = (...classNames: ClassValue[]) => twMerge(clsx(classNames));

export { cn };
