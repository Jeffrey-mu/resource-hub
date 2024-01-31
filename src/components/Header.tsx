import { NavLink } from 'react-router-dom'
export default function Header() {
  return (
    <div className="min-h-16 border-b-2 dark:bg-white/60 flex items-center">
      <div className="max_width">
        <NavLink to='/'>
          <h2 className='font-black text-2xl'>H5自研游戏</h2>
        </NavLink>
      </div>
    </div>
  );
}
