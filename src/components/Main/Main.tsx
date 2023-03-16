/* eslint-disable no-unsafe-optional-chaining */
import React, {
  useEffect,
  useState,
  useRef,
  useCallback,
} from 'react';

import Sidebar from '../Sidebar';
import Board from '../Board';

export default function Main() {
  const sidebarRef = useRef<HTMLInputElement>(null);
  const [isResizing, setIsResizing] = useState(false);
  const [sidebarWidth, setSidebarWidth] = useState(310);

  const startResizing = useCallback((mouseDownEvent: React.MouseEvent) => {
    setIsResizing(true);
  }, []);

  const stopResizing = useCallback(() => {
    setIsResizing(false);
  }, []);

  const resize = useCallback(
    (mouseMoveEvent: MouseEvent) => {
      if (isResizing) {
        setSidebarWidth(
          mouseMoveEvent.clientX
          - sidebarRef.current!.getBoundingClientRect()?.left,
        );
      }
    },
    [isResizing],
  );

  useEffect(() => {
    window.addEventListener('mousemove', resize);
    window.addEventListener('mouseup', stopResizing);

    return () => {
      window.removeEventListener('mousemove', resize);
      window.removeEventListener('mouseup', stopResizing);
    };
  }, [resize, stopResizing]);

  return (
    <>
      <Sidebar
        sidebarRef={sidebarRef}
        sidebarWidth={sidebarWidth}
        startResizing={startResizing}
      />
      <Board />
    </>
  );
}
