import { NavLink } from 'react-router-dom'
import { appConfig } from '@/lib/constant'
import { ThemeSwitcher } from '@/components/ThemeSwitcher/Index.tsx';
export default function Header() {
  return (
    <div className="min-h-16 border-b-2  flex items-center dark:bg-black">
      <div className="max_width flex justify-between">
        <NavLink to='/' className="font-black text-2xl">
          {appConfig.siteName}
        </NavLink>
        <ThemeSwitcher />
      </div>
    </div>
  );
}
