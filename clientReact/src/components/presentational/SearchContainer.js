import React from 'react';
import Panel from '../presentational/generic/Panel';

const Search = ({name, value, handleChange}) => (
    <Panel title="Search">
        <input type="text" name={name} value={value} onChange={handleChange} placeholder="Title, Album, Singer" />
    </Panel>

)
export default Search