const dummy = blogs => {
  if(blogs !==null){
    return 1
  }
}



let totalLikes = blogs => {
  let sum = 0
  if(blogs.length===1){
    return blogs[0]['likes']
  }
  else{
    for(let i = 0; i < blogs.length; i++){
      sum+=blogs[i]['likes']
    }
    return sum
    //return blogs.reduce((totalLikes, currentValue) => totalLikes + currentValue, 0)
  }
}

let favoriteBlog = (blogs) => {
  let likes = []
  for(let i=0; i<blogs.length; i++){
    likes.push(blogs[i]['likes'])
  }
  let i =0
  let max = Math.max(...likes)
  while(blogs[i]['likes']!==max){
    i++
  }
  return {
    title: blogs[i]['title'],
    author: blogs[i]['author'],
    likes: blogs[i]['likes']
  }
}

module.exports = {
  dummy,
  totalLikes,
  favoriteBlog
}
