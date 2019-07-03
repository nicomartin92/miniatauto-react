import React, {Components} from 'react';
import Button from './Button';

class DangerButton extends Components {
    render() {
        return <Button class="red"></Button>
    }
}

export default DangerButton