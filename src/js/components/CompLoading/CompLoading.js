import Loadable from 'react-loadable';
import PropTypes from 'prop-types';
import React from 'react';
import Manager from './Manager';

export default function CompLoading(props) {
    const { loadFunc, ...rest } = props;
    const Load = Loadable({
        loader: loadFunc,
        loading: Manager,
        render(Comp, ps) {
            return <Comp.default {...ps} />;
        },
    });
    return <Load {...rest} />;
}

CompLoading.propTypes = {
    loadFunc: PropTypes.func.isRequired,
};
