const baseUrl = "http://localhost:3000";

export async function updateUserPlaces(userPlaces) {
    
    const response = await fetch(`${baseUrl}/user-places`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({places: userPlaces}),
    });

    const data = await response.json();

    if (!response.ok) {
        throw new Error(data.message || "Could not update user places.");
    }

    return data;
}