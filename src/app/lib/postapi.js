export const PostApi = async (apiUrl, data) => {

    try {
        const options = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data),
            cache: 'no-store'
        };

        const response = await fetch(`${apiUrl}`, options);
        return response;

    } catch (error) {
        // Handle fetch errors here
        console.log('Error:', error);
        throw error;
    }

}