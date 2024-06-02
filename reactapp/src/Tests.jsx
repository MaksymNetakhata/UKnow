import { useEffect} from 'react';
import { fetchTest} from "./services/fetchTest"

const Test = () => {

    useEffect(() => {
        const fetchData = async () => {
            await fetchTest();
        };
        fetchData();
    }, [])
    


    return (
        <div>

        </div>
    );
};

export default Test;
