import React from 'react'

import { Button } from '../component-lib'
import SendIcon from '@material-ui/icons/Send'

type Props = {

}

const ButtonView: React.FC<Props> = () => {
   return (
       <>
        <h3>Button</h3>
        <h4> Standard</h4>
        <Button color="primary" variant="contained"> Primary & contained </Button>
        <Button color="primary"> Primary </Button>
        <Button color="secondary" variant="contained"> Secondary & contained </Button>
        <Button color="secondary"> Secondary </Button>
        <h4> With Icon</h4>
        <Button color="primary" variant="contained" startIcon={<SendIcon />}> Primary & contained </Button>
        <Button color="primary" startIcon={<SendIcon />}> Primary </Button>
        <Button color="secondary" variant="contained" startIcon={<SendIcon />}> Secondary & contained </Button>
        <Button color="secondary" startIcon={<SendIcon />}> Secondary </Button>
        <h4> Loading </h4>
        <Button isLoading={true} color="primary" variant="contained" startIcon={<SendIcon />}> Primary & contained </Button>
        <Button isLoading={true} color="primary" startIcon={<SendIcon />}> Primary </Button>
        <Button isLoading={true} color="secondary" variant="contained" startIcon={<SendIcon />}> Secondary & contained </Button>
        <Button isLoading={true} color="secondary" startIcon={<SendIcon />}> Secondary </Button>
        <h4> Disabled </h4>
        <Button disabled={true} color="primary" variant="contained" startIcon={<SendIcon />}> Primary & contained </Button>
        <Button disabled={true} color="primary" startIcon={<SendIcon />}> Primary </Button>
        <Button disabled={true} color="secondary" variant="contained" startIcon={<SendIcon />}> Secondary & contained </Button>
        <Button disabled={true} color="secondary" startIcon={<SendIcon />}> Secondary </Button>
        <h4> Tooltip </h4>
        <Button tooltip="foobar" color="primary" variant="contained" startIcon={<SendIcon />}> Primary & contained </Button>
        <Button tooltip="foobar" color="primary" startIcon={<SendIcon />}> Primary </Button>
        <Button tooltip="foobar" color="secondary" variant="contained" startIcon={<SendIcon />}> Secondary & contained </Button>
        <Button tooltip="foobar" color="secondary" startIcon={<SendIcon />}> Secondary </Button>
        <h4> Disabled Tooltip </h4>
        <Button disabled={true} disabledTooltip="foobar" color="primary" variant="contained" startIcon={<SendIcon />}> Primary & contained </Button>
        <Button disabled={true} disabledTooltip="foobar" color="primary" startIcon={<SendIcon />}> Primary </Button>
        <Button disabled={true} disabledTooltip="foobar" color="secondary" variant="contained" startIcon={<SendIcon />}> Secondary & contained </Button>
        <Button disabled={true} disabledTooltip="foobar" color="secondary" startIcon={<SendIcon />}> Secondary </Button>
       </>
   ) 
}

export default ButtonView