import React from 'react';
import * as _ from 'lodash';
import { ImgProps } from '../../@types/Type';

import ERROR_IMAGE from '../../assets/svg/noImage.svg';

/**
 * Returns an object that can
 * be spread onto an img tag
 * @param {String} img
 * @param {String} src
 * @returns {Object} { src: String, onError: Func }
 */

const Img: React.FC<ImgProps> = ({
  src,
  alt,
  width,
  height,
  className,
  ImageId
}): JSX.Element => {
  // This function is triggered when an image has been loaded
  const OnLoadHandler = (
    event: React.SyntheticEvent<HTMLImageElement, Event>,
  ): void => {
    if (event.currentTarget.className !== 'error') {
      event.currentTarget.className = 'success';
    }
  };

  // This function is triggered if an error occurs while loading an image
  const OnErrorHandler = (
    event: React.SyntheticEvent<HTMLImageElement, Event>,
  ): void => {
    const propsParameters: Array<string> = [
      ImageId,
      width,
      height,
    ] as Array<string>;
    const WIDTH: any = _.includes(propsParameters, ImageId);
    const HEIGHT: any = _.includes(propsParameters, ImageId);

    event.currentTarget.src = ERROR_IMAGE;
    event.currentTarget.width = WIDTH;
    event.currentTarget.height = HEIGHT;
    event.currentTarget.className = 'error';
  };

  return (
    <a
      href={src}
      target='_blank'
      rel='noopener noreferrer'
      style={{ border: '1px solid lightgray' }}
    >
      <img
        src={src}
        alt={alt}
        width={width}
        height={height}
        className={className}
        id={ImageId}
        onLoad={OnLoadHandler}
        onError={OnErrorHandler}
        loading='lazy'
        sizes='(max-width: 600px) 200px, 50vw'
        style={{ padding: '5px' }}
      />
    </a>
  );
};

/**
 * Usage <Img src='someUrl' alt='something' width={100} height={100} className='something' id='something' />
 **/

export default React.memo(Img);