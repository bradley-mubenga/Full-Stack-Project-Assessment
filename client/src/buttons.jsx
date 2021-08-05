import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsUp, faThumbsDown } from '@fortawesome/free-solid-svg-icons';

export function UpVote() {
    return (
        <button>Hello <FontAwesomeIcon icon={faThumbsUp} /></button>
    )
}


export function DownVote() {
    return (
        <button>Hello <FontAwesomeIcon icon={faThumbsDown} /></button>
    )
}