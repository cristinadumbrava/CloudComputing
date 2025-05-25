import { useRouter } from "next/router";
import RecordForm from "../../../components/RecordForm";
import { defaultRecordValues } from "../../../utils/constants";
import { createRecord } from "../../../utils/recordsFunctions";

const Create = () => {
    const router = useRouter();

    const onSubmit = async (data) => {
        try {
            const response = await createRecord(data);
            if(response) {
                router.push(`/records`);
            }
        } catch (error) {
            console.error(error);
        }
    }
    return (
        <RecordForm onSubmit={onSubmit} entry={defaultRecordValues}/>
    )
}


export default Create;