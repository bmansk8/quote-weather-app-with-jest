const fakeData = {
  quotes:[
    {
     "quote":'random text 0',
     "author":'random author 0'
    },
    {
     "quote":'random text 1',
     "author":'random author 1'
    },
    {
     "quote":'random text 2',
     "author":'random author 2'
    }
  ]
}

export default async () =>{
  const response = await new Promise((resolve)=>{
    resolve(fakeData)
  })
  return response.quotes
}