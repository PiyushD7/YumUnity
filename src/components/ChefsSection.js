import ChefCard from "./ChefCard"

export default function ChefsSection(){
    const chefs = [
        {
            name: "Juan Carlos",
            img: "/img/top-chefs/img_1 (1).jpg",
            recipesCount: "18",
            cuisine: "Mexican"
        },
        {
            name: "John Doe",
            img: "/img/top-chefs/img_2 (1).jpg",
            recipesCount: "05",
            cuisine: "Japanese"
        },
        {
            name: "Erica Maria",
            img: "/img/top-chefs/img_3 (1).jpg",
            recipesCount: "13",
            cuisine: "Italian"
        },
        {
            name: "Chris Brown",
            img: "/img/top-chefs/img_4 (1).jpg",
            recipesCount: "08",
            cuisine: "American"
        },
        {
            name: "Blake Lively",
            img: "/img/top-chefs/img_5 (1).jpg",
            recipesCount: "09",
            cuisine: "French"
        },
        {
            name: "Ben Affleck",
            img: "/img/top-chefs/img_6 (1).jpg",
            recipesCount: "04",
            cuisine: "Indian"
        }
    ]
    return(
        <div className="section chefs">
            <h1 className="title">Our Top Chefs</h1>
            <div className="top-chefs-container">
              {/* <ChefCard />
                <ChefCard />
                <ChefCard />
                <ChefCard />
                <ChefCard /> */}
               { chefs.map(chef => <ChefCard key={chef.name} chef={chef}/>) }
            </div>
        </div>
    )
}