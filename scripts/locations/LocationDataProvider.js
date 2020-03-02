const locationList = [
    {
        image: "https://thumbor.forbes.com/thumbor/711x474/https://specials-images.forbesimg.com/dam/imageserve/1145521142/960x0.jpg?fit=scale",
        name: "Cabo",
        language: "Spanish",
        population: "1 million",
        lodging: ["The Cabo Inn", "Cabo Cabins"],
        transportation: ["Walking", "taxis", "charter boats"]
    },

    {
        image: "https://st.focusedcollection.com/15111000/i/650/focused_174752266-stock-photo-scenic-view-big-sur-coastline.jpg",
        name: "California",
        language: "English",
        population: "6 million",
        lodging: ["Hotel California", "a tent on the beach"],
        transportation: ["Uber/Lyft", "Bird scooters"]
    },

    {
        image: "https://rccl-h.assetsadobe.com/is/image/content/dam/royal/content/destinations/croatia/dubrovnik-cityscape-walls-and-coastline.jpg?$750x667$",
        name: "Croatia",
        language: "Croatian",
        population: "3 million",
        lodging: ["Croatian Station", "AirBNB rentals"],
        transportation: ["Walking", "hitchhiking", "jet skis"]
    }
]



export const useLocation = () => {
    return locationList
}