export class SnackbarModel{
    msg: string = ''
    duration: number = 3000
    isError: Boolean = false
    action: string = 'OK'
    callback: () => void
}