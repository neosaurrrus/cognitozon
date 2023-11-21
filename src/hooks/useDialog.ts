import {useRef} from "react"

const useDialog = () => {
    const dialogRef = useRef(null)

    const show = () => {
        if (dialogRef.current) {
            // We don't technically know what the ref could be, so we cast it to an HTMLDialogElement. I try to avoid doing this
            const dialogElement = dialogRef.current as unknown as HTMLDialogElement
            dialogElement.showModal()
        }
    }

    const close = () => {
        if (dialogRef.current) {
            const dialogElement = dialogRef.current as unknown as HTMLDialogElement
            dialogElement.close()
        }
    }

    return {dialogRef, show, close}
}

export default useDialog