import React from 'react';
import { IconProps } from '../../@types/Type';

const Icon: React.FC<IconProps> = ({ className, IconId }): JSX.Element => {
  return <i className={className} id={IconId} style={{ padding: "5px" }}></i>;
};

export default Icon