const serverBaseUrl = 'http://localhost:8080';

const headers = {
    'Content-Type': 'application/json',
    'Accept': 'application/json'
};


export async function getExerciseIds(): Promise<number[]> {

    const response: Response = await fetch(`${serverBaseUrl}/exerciseIds`, { headers });

    const body: number[] = await response.json();

    // console.info(body);

    return body;
}