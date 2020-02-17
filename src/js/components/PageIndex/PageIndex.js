import React from 'react';
import PropTypes from 'prop-types';
import { Grid } from '@material-ui/core';
import { Pagination } from '@material-ui/lab';
import { Link as RRLink } from 'react-router-dom';
import { mgS } from '../../utils/URLUtil';
import PaginationItem from '@material-ui/lab/PaginationItem';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';

export default function PageIndex(props) {
    const { maxPage, page } = props;
    const theme = useTheme();
    const upSm = useMediaQuery(theme.breakpoints.up('sm'));
    return (
        <Grid container justify="center">
            <Pagination
                count={maxPage}
                variant="outlined"
                shape="rounded"
                color="primary"
                page={page}
                siblingCount={upSm ? 1 : 0}
                boundaryCount={!upSm ? 1 : undefined}
                renderItem={item => (
                    <PaginationItem
                        component={RRLink}
                        to={{
                            ...location,
                            ...{
                                search: mgS(location.search, `?p=${item.page}`),
                            },
                        }}
                        {...item}
                    />
                )}
            />
        </Grid>
    );
}

PageIndex.propTypes = {
    maxPage: PropTypes.number.isRequired,
    page: PropTypes.number.isRequired,
};
