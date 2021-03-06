import React from 'react';
import PropTypes from 'prop-types';
import Tiff from 'tiff.js';
import {decode} from 'base64-arraybuffer';

class Tiffnail extends React.Component {
    render() {
        let arraybuffer = decode(this.props.bytes);
        let tiff = new Tiff({buffer: arraybuffer});
        return <img src={tiff.toCanvas().toDataURL()}
                    alt={this.props.alt ? this.props.alt:"undefined"}
                    height={this.props.height ? this.props.height:"100%"} />;
    }
}

Tiffnail.propTypes = {
    bytes: PropTypes.string.isRequired,
    alt: PropTypes.string,
    height: PropTypes.string
};

export default Tiffnail;