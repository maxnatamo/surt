'use client'

import { useEffect } from 'react';

export default function Redirect({ url }) {
  useEffect(() => {
    window.location.replace(url);
  });
  return null;
}