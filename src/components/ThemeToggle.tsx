import { Switch } from '@/components/ui/switch';
import { useThemeStore } from '@/stores/useThemeStore';
import { Moon, Sun } from 'lucide-react';
import { useEffect } from 'react';

export function ThemeToggle() {
  const { theme, toggleTheme, setTheme } = useThemeStore();

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') as 'light' | 'dark' | null;
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const initialTheme = savedTheme || (prefersDark ? 'dark' : 'light');
    
    setTheme(initialTheme);
    document.documentElement.classList.toggle('dark', initialTheme === 'dark');
  }, [setTheme]);

  return (
    <div
      className='flex items-center justify-between gap-4 cursor-pointer'
      onClick={() => toggleTheme()}
    >
      <Sun className='size-5 text-primary' />
      <div
        onClick={(e) => e.stopPropagation()} // Evita dupla troca ao clicar no Switch
      >
        <Switch
          checked={theme === 'dark'}
          onCheckedChange={() => toggleTheme()}
        />
      </div>
      <Moon className='size-5 text-primary' />
    </div>
  );
}
