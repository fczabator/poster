import React from 'react';
import posed from 'react-pose';

const Box = posed.div({
    hidden: { opacity: 0 },
    visible: { opacity: 1 }
  });

export const Count = ({number, pose}) => (
    <Box className="count" pose={pose}>
        {number}
    </Box>
)