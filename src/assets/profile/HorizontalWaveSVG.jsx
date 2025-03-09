import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
const HorizontalWaveSVG = (props) => (
    <Svg
        xmlns="http://www.w3.org/2000/svg"
        width={156}
        height={13}
        fill="none"
        {...props}
    >
        <Path
            stroke="#02BBBE"
            strokeLinecap="round"
            strokeWidth={5}
            d="M2 10c3.242-4.43 14.602-5.74 23.696-4.031 5.56 1.044 14.372 5.005 20.019 2.294 2.398-1.151 4.273-1.867 7.908-2.087 6.953-.421 12.256 1.564 18.968 1.763 4.335.128 6.823-.868 10.185-1.802 2.082-.578 6.168.73 8.113 1.011 2.584.374 7.143.908 9.542.117 1.538-.507 2.55-1.801 4.261-2.14 1.872-.369 5.383.272 7.149.442 4.853.466 10.457.82 15.234 0 1.085-.187 2.832-1.141 3.91-1.141 3.125 0 6.34.648 9.572.648 4.771 0 9.015-.442 13.19-1.452.285-.069 2.76-.622 2.159-.622"
        />
    </Svg>
);
export default HorizontalWaveSVG;
