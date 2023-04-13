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

const Img: React.FC<ImgProps> = ({ src, alt, width, height, className, id }): JSX.Element => {

  // This function is triggered when an image has been loaded
    const OnLoadHandler = (
        event: React.SyntheticEvent<HTMLImageElement, Event>
    ) => {
        if (event.currentTarget.className !== "error") {
        event.currentTarget.className = "success";
        }
    };

  // This function is triggered if an error occurs while loading an image
    const OnErrorHandler = (
        event: React.SyntheticEvent<HTMLImageElement, Event>
    ) => {
        const propsParameters: Array<string> = [id, width, height] as Array<string>;
        const WIDTH: any = _.includes(propsParameters, id);
        const HEIGHT: any = _.includes(propsParameters, id);

        event.currentTarget.src = ERROR_IMAGE;
        event.currentTarget.width = WIDTH;
        event.currentTarget.height = HEIGHT;
        event.currentTarget.className = "error";
    };

    return (
        <img 
            src={src}
            alt={alt}
            width={width}
            height={height}
            className={className}
            id={id}
            onLoad={OnLoadHandler}
            onError={OnErrorHandler}
        />
    );
};

/**
 * Usage <Img src='someUrl' alt='something' width={100} height={100} className='something' id='something' />
**/

export default Img;