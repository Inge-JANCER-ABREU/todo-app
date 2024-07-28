import { FiltersButton, FiltersButtonContainer, FiltersContainer, ItemsLeft } from "./TodoFilters.components"

const TodoFilters = () => {
    return(
        <FiltersContainer> 
            <ItemsLeft />
            <FiltersButtonContainer>
                <FiltersButton  action={()=> {}} active="All" filter='All'/>
                <FiltersButton  action={()=> {}} active="All" filter='Active'/>
                <FiltersButton  action={()=> {}} active="All" filter='Completed'/>
            </FiltersButtonContainer>

            <button className="text-gray-400 hover:text-white cursor-pointer transition-all duration-300 ease-in">
                Clear Completed
            </button>
        </FiltersContainer> 
    )

}

export { TodoFilters }