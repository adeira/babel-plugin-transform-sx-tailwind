// @flow

import React, { type Node } from 'react';
import { tailwind } from '@adeira/sx-tailwind';

export default function Example(): Node {
  return <div className={tailwind(`text-black bg-white`)}>Lorem lipsum</div>;
}
