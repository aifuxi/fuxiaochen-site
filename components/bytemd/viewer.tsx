'use client';

import { Viewer } from '@bytemd/react';

import { plugins, sanitize } from './config';

type Props = {
  value: string;
};

export const BytemdViewer = ({ value }: Props) => {
  return <Viewer value={value} plugins={plugins} sanitize={sanitize} />;
};
