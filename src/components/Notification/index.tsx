import React from "react";
import {Snackbar, Alert, AlertColor} from "@mui/material";

type AlertNotify = {
    open: boolean,
    msg: string,
    severity: AlertColor | undefined,
    handleClose: () => void
}

export const Notification: React.FC<AlertNotify> = ({  open, msg, handleClose, severity}) => {
    return(
       <Snackbar>
           <Alert>

           </Alert>
       </Snackbar>
    )

}