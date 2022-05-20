const API_TOKEN = "91261efe9b5153e40fa092c0c94a5038db587db8";
const BASE_URL = "https://api-ssl.bitly.com/v4/shorten";

const fetchData = (data, callback) => {
    try {
        fetch(BASE_URL, {
            method: "POST",
            headers: {
                Authorization: `${API_TOKEN}`,
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        })
            .then((res) => res.json())
            .then((data) => callback(data.link));
    } catch (error) {
        console.error(error.message);
    }
}

export default fetchData;