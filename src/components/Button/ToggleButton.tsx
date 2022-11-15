import React from 'react';
import { toggleDarkMode } from '../../util/toggleDarkMode';

type ToggleButtonProps = React.ComponentProps<'div'>;

const ToggleButton: React.FC<ToggleButtonProps> = () => {
  return (
    <div
      id="toggle"
      className="w-12 h-6 bg-slate-700 dark:bg-white rounded-full relative block shadow-inner scale-90"
    >
      <i id='indicator' onClick={toggleDarkMode} className="indicator w-6 h-6 rounded-full bg-white dark:bg-slate-700 absolute transition transform-gpu"></i>
    </div>
  );
};

export default ToggleButton;
