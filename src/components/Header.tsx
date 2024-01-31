import { NavLink } from 'react-router-dom'
export default function Header() {
  return (
    <div className="min-h-16 bg-slate-100 border-b-2 dark:bg-white/60 flex items-center">
      <div className="max_width">
        <NavLink to='/'>
          <h2 className='font-black text-2xl'>资源分享</h2>
        </NavLink>
      </div>
    </div>
  );
}
