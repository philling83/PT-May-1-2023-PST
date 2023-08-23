
const body = new URLSearchParams({
   name : "toothbrush",
   description : "brush for teeth",
   price : 20,
   categories: "beauty"
})

fetch('/products', {
    method : "POST",
    headers : {
        "Content-Type" : "application/x-www-form-urlencoded"
    },
    body: body
})
