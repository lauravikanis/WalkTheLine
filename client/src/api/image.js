export async function uploadImage(
  base64EncodedImage,
  locationname,
  uploadNameInput,
  uploadDetailInput
) {
  try {
    const location = locationname.name;
    await fetch("/api/upload", {
      method: "POST",
      body: JSON.stringify({
        image: base64EncodedImage,
        location: location,
        name: uploadNameInput,
        description: uploadDetailInput,
      }),
      headers: { "Content-Type": "application/json;charset=utf-8" },
    });
  } catch (error) {
    console.error(error);
  }
}
