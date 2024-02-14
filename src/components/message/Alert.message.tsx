import { Alert, AlertColor, Snackbar } from '@mui/material';
const AlertMessage = (
    {severity= "success", message, open,}: {severity: AlertColor, message: string, open: boolean,}
) => {
    return (
        <Snackbar open={open} autoHideDuration={6000}>
            <Alert severity={severity}>
                {message}
            </Alert>
        </Snackbar>
    );
    }


export default AlertMessage;