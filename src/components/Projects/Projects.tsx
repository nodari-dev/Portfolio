import React, {createElement} from 'react';
import './style.scss';
import projects from "../../data/en/projects.json";

class Projects extends React.Component<any, any> {

    constructor(props: string ) {
        super(props);
        this.state = {
            active: "active",
            dataKey: "data-tag",
            caseKey: "case",
            filter: "filter",
            default: "default",
            custom: "custom",
            hidden: "hidden"
        };
    }

    filterContent = (e: any) => {
        /**
         * This function checks what type of filter we have
         * If type is default "all" script will run defaultFiltering()
         * If type is custom => customFiltering()
         * @param e:any
         */

        e.target.classList.contains(this.state.default)
            ? this.defaultFiltering(e.target)
            : this.customFiltering(e.target);
    }

    defaultFiltering(item: any){
        /**
         * Here we use filtering for "default"
         * We get all custom filters and remove active classes from their class list
         * @param item: any
         */

        let customFilters = document.querySelectorAll("." + this.state.filter);

        customFilters.forEach((filter: any) => {
            if(filter.classList.contains(this.state.custom)) this.activateItem(filter, false);
        })

        this.activateItem(item, true);
        this.handleFilter(item);
    }

    customFiltering(item: any){
        /**
         * Here we use filtering for "custom"
         * We get default filter and disable it
         * Then we activate current filter
         * @param item: any
         */

        let defaultFilter : any = document.querySelector("." + this.state.default);
        this.activateItem(defaultFilter, false);
        this.handleFilter(item);
    }

    handleFilter(item: any){
        /**
         * This function checks type of filter (default or custom)
         * If filter is active - disable it
         * If filter is default - activate it
         * BUT for default filter we always set active class on click
         * @param item: any
         */

        if(item.classList.contains(this.state.custom)){
            item.classList.contains(this.state.active)
                ? this.activateItem(item, false)
                : this.activateItem(item, true)
        } else{
            this.activateItem(item, true)
        }

        this.filterCases();
    }

    activateItem(item: any, show: boolean){
        /**
         *  This function adds "active" class
         *  If show is true - add class & show is false - remove
         *  @param item: any
         *  @param show: boolean
         */

        show
            ? item.classList.add(this.state.active)
            : item.classList.remove(this.state.active);
    }

    filterCases(){
        /**
         * This function generate array of data-tag from active filters
         * Then gets data-tag from case and create array of tags
         * Compare two arrays
         */

        let filters = this.getActiveFilters();
        let cases = this.getCases();
        let filtersTags: string[] = [];

        // Get active filter data-tag attr value

        filters.forEach((item: any) => {
            filtersTags.push(item.getAttribute(this.state.dataKey));
        })

        /**
         * In case when all custom filters are disabled - activate default filter
         * In case when some custom filters are activated and we click on default filter - show all cases
         * In case when array of tags contains only custom - compare two arrays and show only compatible cases
         */

        if (filtersTags.length === 0){
            this.defaultFiltering(document.querySelector("." + this.state.default));
        }

        else if (filtersTags.includes("all")){
            cases.forEach((item: any) => {
                item.classList.remove(this.state.hidden);
            })
        }

        else{
            cases.forEach((item: any) => {
                let list = item.getAttribute(this.state.dataKey).split(" ");
                let checker = (list: string | any[], filtersTags: any[]) => filtersTags.every(v => list.includes(v));

                checker(list, filtersTags)
                    ? item.classList.remove(this.state.hidden)
                    : item.classList.add(this.state.hidden);
            })
        }

        this.notFoundCases();

    }

    notFoundCases() {
        /**
         * This function checks all cases and if all of them are hidden => set not found
         */

        let cases = this.getCases();
        let count = 0;
        let notFoundBlock: any = document.querySelector(".not-found");


        cases.forEach((item: any) => {
            if (item.classList.contains("hidden")) count += 1;
        })

        count === cases.length
            ? notFoundBlock.classList.remove("hidden")
            : notFoundBlock.classList.add("hidden");
    }



    getCases(){
        /**
         * This function returns all cases from page
         */

        return document.querySelectorAll("." + this.state.caseKey);
    }

    getActiveFilters(){
        /**
         * This function returns all active filters from page
         */

        return document.querySelectorAll("." + this.state.active);
    }

    showFilters = () => {
        /**
         * Returns filters ul list
         */

        return(
            projects.filtersList.map((item: string, index:any) => (
                <li onClick={this.filterContent}
                    className={(index === 0 ? 'filter default active' : 'filter custom' )}
                    data-tag={item}>
                    {item}
                </li>
            ))
        )
    }

    showCases = () => {
        /**
         * Returns cases based on json file
         */

        return(
            projects.caseList.map((item: any) => (
                <li className={"grid-el case"}
                    data-tag={item.tags.join(",").replace(",", " ")}>
                    <a href={item.link}>
                        <div className={"featured-image"}>
                            <img src={item.image} alt={item.alt} />
                        </div>
                        <div className={"text-container"}>
                            <p><strong>{item.title}</strong></p>
                            <p>{item.description}</p>
                        </div>
                    </a>
                </li>
            ))
        )
    }

    render() {
        const filters = this.showFilters();
        const cases = this.showCases();

        return(
            <>
                <section className={"projects"}>
                    <div className={"container"}>
                        <h1>portfolio</h1>
                        <ul className={"portfolio-filter"}>
                            {filters}
                        </ul>
                    </div>
                </section>
                <section className={"projects-list"}>
                    <div className={"container case-container"}>

                        <ul className={"row-2 filters-list"}>
                            {cases}
                        </ul>
                        <div className={"not-found hidden"}>
                            <img src={projects.notFound.img} alt={projects.notFound.alt}/>
                            <h2>{projects.notFound.heading}</h2>
                        </div>

                    </div>
                </section>
            </>
        )
    }
}

export default Projects;