const express = require('express')
const app = express()
const cors = require('cors')
const PORT = 8000

app.use(cors())

//object named motorcycles
//with properties inside it.

const motorcycles = {
        'kawasaki' : {
            'name' : 'Vulcan S 650',
            'category' : 'Sport Cruiser',
            'mfg location' : 'Japan',
            'cc displacement' : 649,
            'price' : '$5700'
        },
        'honda' : {
            'name' : 'Goldwing DCT',
            'category' : 'Touring',
            'mfg location' : 'Japan',
            'cc displacement' : 1833,
            'price' : '$29,500'
        },
        'yamaha' : {
            'name' : 'Tenere 700',
            'category' : 'Adventure Touring',
            'mfg location' : 'Japan',
            'cc displacement' : 699,
            'price' : '$10,300'
        },
        'suzuki' : {
            'name' : 'Hayabusa',
            'category' : 'Sport',
            'mfg location' : 'Japan',
            'cc displacement' : 1340,
            'price' : '$18,599'
        },
        'canam' : {
            'name' : 'Ryker 900',
            'category' : 'Sport',
            'mfg location' : 'Canada',
            'cc displacement' : 899,
            'price' : '$9,000'
        },
        'notamotorcycle' : {
            'error' : 'You call that a motorcycle? LOL!'
        }
        
}

app.get('/', (request, response)=> {
    response.sendFile(__dirname + '/index.html')
})

app.get('/api/:motorcycleName', (request, response) => {
    const motorcyclesName = request.params.motorcycleName.toLowerCase()
    
    if(motorcycles[motorcyclesName]){
        response.json(motorcycles[motorcyclesName])
    }else{
        response.json(motorcycles['notamotorcycle'])
    }
    
})

app.listen(process.env.PORT || PORT, ()=>{
    console.log(`The server is running on port ${PORT}! You better go catch it!`)
})