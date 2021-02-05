// export const getImageObj = async (name) => {
//   const response = await fetch(`/api/location?name=${name}`);
//   const imgEntry = await response.json();
//   return imgEntry;
// };

// export async function postImageObj(image) {
//   const response = await fetch(`/api/upload/`, {
//     method: "POST",
//     body: JSON.stringify(image),
//     headers: {
//       "Content-Type": "application/json",
//     },
//   });
//   const newImage = await response.json();
//   return newImage;
// }
