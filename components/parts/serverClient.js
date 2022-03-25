import { serverEndpointBaseURLs as endpoints } from "../../config.json";

export async function verifyPassword(password) {
	const url = `${endpoints.getUserData}?password=${encodeURIComponent(password)}`;
	const result = {
		ok: false,
		messages: [],
		data: {
			verified: false,
			user: null
		}
	};

	let res;
	try {
		res = await fetch(url);
	} catch(err) {
		result.messages.push(`Unable to fetch status. Are you connected to the internet?`);
	}

	// TODO: Confirm that res.ok is false if fetch throws
	if(res.ok) {
		const jsonResponse = await res.json();
		result.ok = true;
		result.data.verified = true;
		result.data.user = {
			name: jsonResponse.name,
			password: password,
			// TODO: Actually sync the time using a different endpoint instead of setting current time
			signedIn: Boolean(jsonResponse.signedIn) ? Date.now() : 0
		};
	} else if(res.status === 404) {
		result.messages.push("Sorry, it looks like you don't exist\nOr that's the wrong password...\nBoth possibilities are equally likely");
	} else {
		result.messages.push(`Server behaved unexpectedly and gave this error: [${res.status}] ${res.statusText}`);
	}

	return result;
}

/**
 * Signs a user in or out
 * @param {string} password Password of the user to sign in or out
 * @param {boolean} signInMode If set to false, will sign the user out instead
 * @return {Promise<Object>} Resolves after a response is received from the server and parsed
 */
async function signInOut(password, signInMode) {
	const url = signInMode ? endpoints.signIn : endpoints.signOut;
	const result = {
		ok: false,
		messages: [],
		data: null
	};

	let res;
	try {
		res = await fetch(url, {
			method: "POST",
			headers: {
				"Content-Type": "application/json"
			},
			body: JSON.stringify({ password: password })
		});
	} catch(err) {
		result.messages.push(`Unable to fetch status. Are you connected to the internet?`);
	}

	if(res.status === 400) {
		result.ok = true;
		result.messages.push(await res.text());
	} else if(!res.ok) {
		result.messages.push(`Unable to sign ${signIn ? "in" : "out"}: [${res.status}] ${res.statusText}`);
	} else {
		result.ok = true;
	}

	return result;
}

export function signIn(password) {
	return signInOut(password, true);
}

export function signOut(password) {
	return signInOut(password, false);
}