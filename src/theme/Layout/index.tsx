import React, { useEffect } from 'react';
import OriginalLayout from '@theme-original/Layout';
import type { WrapperProps } from '@docusaurus/types';
import { createIcons } from 'duo-icons';
import '@fortawesome/fontawesome-free/css/all.min.css';

type Props = WrapperProps<typeof OriginalLayout>;

export default function Layout(props: Props): JSX.Element {
  useEffect(() => {
    createIcons();
  }, []);

  return <OriginalLayout {...props} />;
}

