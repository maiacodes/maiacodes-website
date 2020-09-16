import axios from 'axios';
import endpoint from "../api/endpoint"

export default async function getMOTD(): Promise<string> {
    try {
        let request = await axios.get(endpoint('motd'));
        return request.data.motd;
    } catch {
        return 'No tagline found'
    }
}