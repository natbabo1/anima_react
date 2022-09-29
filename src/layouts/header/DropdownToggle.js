import { useEffect, useRef, useState } from 'react';
import Avatar from '../../components/ui/Avatar';
import DropdownMenu from './DropdownMenu';

function DropdownToggle() {
  const [isOpenDropdown, setIsOpenDropdown] = useState(false);

  const dropdownEl = useRef();

  useEffect(() => {
    const clickOutSide = (e) => {
      if (!dropdownEl.current.contains(e.target)) {
        setIsOpenDropdown(false);
      }
    };
    document.addEventListener('mousedown', clickOutSide);
    return () => document.removeEventListener('mousedown', clickOutSide);
  }, []);

  return (
    <div className="dropdown" ref={dropdownEl}>
      <button
        className="btn btn-dark mx-4 my-0 py-0"
        onClick={() => setIsOpenDropdown((prev) => !prev)}
      >
        <Avatar size="40" />
      </button>
      {isOpenDropdown && <DropdownMenu />}
    </div>
  );
}

export default DropdownToggle;
