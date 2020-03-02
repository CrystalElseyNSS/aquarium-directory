const fishCollection = [
    {
        name: "Harold",
        image: "https://cdn.shopify.com/s/files/1/1692/8285/products/1_52b09400-6bd9-4d1a-bf27-a4bdaa9c1919_large.jpg?v=1571439470",
        species: "Beta Fish",
        location: "Cabo",
        length: "6 inches",
        food: ["human tears", "crumbs"]
    },

    {
        name: "Maude",
        image: "https://thumbs-prod.si-cdn.com/Sy04saLVLaQEBEUXPh6gRmtyyUk=/fit-in/1600x0/https://public-media.si-cdn.com/filer/bf/4e/bf4ec3eb-669f-4a1d-87ad-dd83f81c384d/4694899147_fcd4b69350_o.jpg",
        species: "Goldfish",
        location: "California",
        length: "2 inches",
        food: ["avocados", "sunflower seeds"]
        
    },

    {
        name: "Betty",
        image: "https://www.worldwidefishandpets.com/wp-content/uploads/2018/11/boesemansRainbow2-1-1-1.jpg",
        species: "Rainbow Fish",
        location: "Croation Coast",
        length: "8 inches",
        food: ["stardust", "dreams"]
    }
]



export const useFish = () => {
    return fishCollection
}