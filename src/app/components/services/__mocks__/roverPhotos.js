const fakeData = {
  photos: [
    { id: '0', img_src: '#' },
    { id: '1', img_src: '#' },
    { id: '2', img_src: '#' }
  ]
}

export default async () => {
  const response = await new Promise((resolve) => {
    resolve(fakeData)
  })
  return response.photos;
}