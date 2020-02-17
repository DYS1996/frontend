import React, { useRef, useEffect, useState } from 'react';
import SearchIcon from '@material-ui/icons/Search';
import { OutlinedInput, InputAdornment } from '@material-ui/core';
import { useSearchParam, useDebounce } from 'react-use';
import { useHistory, useLocation } from 'react-router-dom';
import { mgS } from '../../utils/URLUtil';

export default function Search() {
    const his = useHistory();
    const location = useLocation();
    const [inp, setInp] = useState(useSearchParam('search') || '');
    useDebounce(
        () => {
            his.push({
                ...location,
                ...{
                    search: mgS(location.search, `?search=${inp}`),
                },
            });
        },
        500,
        [inp]
    );
    return (
        <OutlinedInput
            placeholder="Search..."
            value={inp}
            startAdornment={
                <InputAdornment>
                    <SearchIcon color="primary" />
                </InputAdornment>
            }
            margin="dense"
            fullWidth
            onChange={e => {
                const val = e.target.value;
                setInp(val);
            }}
        />
    );
}
