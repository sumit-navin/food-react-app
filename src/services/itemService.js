import axios from 'axios';

const baseurl = "";
export const getItems = async () => {
    try {
        const items = await axios.get(`${baseurl}/item/list`);
        return items;
    } catch (error) {
        console.log("unable to login")
    }
    return [];
}