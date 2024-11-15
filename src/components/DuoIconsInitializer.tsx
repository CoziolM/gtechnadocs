// src/components/DuoIconsInitializer.tsx
import React, { useEffect } from 'react';
import { createIcons } from 'duo-icons';

const DuoIconsInitializer = () => {
  useEffect(() => {
    createIcons();
  }, []);

  return null;
};

export default DuoIconsInitializer;
