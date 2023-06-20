export const fileUpload = async file => {
	if (!file) throw new Error('No files found to upload');

	const cloudUrl = import.meta.env.VITE_CLOUDYNARY_URL;

	const formDate = new FormData();
	formDate.append('upload_preset', 'react-demo-redux');
	formDate.append('file', file);

	try {
		const resp = await fetch(cloudUrl, {
			method: 'POST',
			body: formDate,
		});
		if (!resp.ok) throw new Error('Could not upload images');
		const cloudResp = await resp.json();
		return cloudResp.secure_url;
	} catch (error) {
		throw new Error(error.message);
	}
};
