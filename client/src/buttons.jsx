import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsUp, faThumbsDown } from '@fortawesome/free-solid-svg-icons';

export function UpVote({ video }) {
    return (
        <button>UpVote <FontAwesomeIcon icon={faThumbsUp} /></button>
    )
}


export function DownVote() {
    return (
        <button>DownVote <FontAwesomeIcon icon={faThumbsDown} /></button>
    )
}