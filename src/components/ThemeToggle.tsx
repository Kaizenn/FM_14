import { useTheme } from '../hooks/useTheme'
import { Moon, Sun } from 'lucide-react'

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme()

  const isDark = theme === 'dark'

  return (
    <button
      onClick={toggleTheme}
      className="ml-auto flex items-center gap-4 rounded-md px-4 py-2 text-slate-600 transition dark:text-slate-100"
    >
      <Sun className="h-5 w-5" />

      <div className="relative flex h-6 w-12 items-center rounded-full bg-purple-500 px-1">
        <span
          className={`h-4 w-4 rounded-full bg-white shadow transition-transform ${isDark ? 'translate-x-6' : 'translate-x-0'} `}
        />
      </div>

      <Moon className="h-5 w-5" />
    </button>
  )
}
