// User object will only be returned if idToken is validated as "Valid" by Firebase"

export default async function verifyIdToken(idToken: string) {
  const res = await fetch(
    `https://identitytoolkit.googleapis.com/v1/accounts:lookup?key=${process.env.FIREBASE_API_KEY}`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        idToken,
      }),
    }
  );

  if (!res.ok) {
    return undefined;
  }

  return idToken;
}
