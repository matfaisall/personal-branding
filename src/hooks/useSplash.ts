'use client';

import { useState, useCallback } from 'react';

export function useSplash() {
  const [isVisible, setIsVisible] = useState(true);

  const hideSplash = useCallback(() => {
    setIsVisible(false);
  }, []);

  return { isVisible, hideSplash };
}
