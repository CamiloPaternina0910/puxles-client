import { useToast } from "vue-toastification";

const toast = useToast();
const notify = {
    notifyError: (err) => {
        toast.error(err);
    },
    notifySuccess: (msg) => {
        toast.success(msg)
    }
}

export default notify;
