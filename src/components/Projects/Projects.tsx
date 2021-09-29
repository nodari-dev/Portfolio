import React from 'react';
import './style.scss';

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

                filtersTags.forEach((tag: string) => {
                    list.includes(tag)
                        ? item.classList.remove(this.state.hidden)
                        : item.classList.add(this.state.hidden);
                })
            })
        }
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

    render() {
        return(
            <>
                <section className={"projects"}>
                    <div className={"container"}>
                        <h1>portfolio</h1>
                        <ul className={"portfolio-filter"}>
                            <li onClick={this.filterContent} className={"filter default active"} data-tag={"all"}>all</li>
                            <li onClick={this.filterContent} className={"filter custom"} data-tag={"javascript"}>javascript</li>
                            <li onClick={this.filterContent} className={"filter custom"} data-tag={"react"}>react</li>
                            <li onClick={this.filterContent} className={"filter custom"} data-tag={"wordpress"}>wordpress</li>
                            <li onClick={this.filterContent} className={"filter custom"} data-tag={"shopify"}>shopify</li>
                        </ul>
                    </div>
                </section>
                <section className={"projects-list"}>
                    <div className={"container"}>
                        <ul className={"row-2-no-margin"}>
                            <li className={"grid-el case"} data-tag={"javascript react"}>
                                <a href="#">
                                    <div className={"featured-image"}>
                                        <img src="https://images.unsplash.com/photo-1631714777290-d81bbb3ef248?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1100&q=80" alt=""/>
                                    </div>
                                    <div className={"text-container"}>
                                        <p><strong>javascript and react</strong></p>
                                        <p>javascript and react</p>
                                    </div>
                                </a>
                            </li>
                            <li className={"grid-el case"} data-tag={"typescript"}>
                                <a href="#">
                                    <div className={"featured-image"}>
                                        <img src="https://images.unsplash.com/photo-1632018844764-8a39386a6a82?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1100&q=80" alt=""/>
                                    </div>
                                    <div className={"text-container"}>
                                        <p><strong>typescript</strong></p>
                                        <p>typescript</p>
                                    </div>
                                </a>
                            </li>
                            <li className={"grid-el case"} data-tag={"react"}>
                                <a href="#">
                                    <div className={"featured-image"}>
                                        <img src="https://images.unsplash.com/photo-1630435492646-3864eb4fe197?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80" alt=""/>
                                    </div>
                                    <div className={"text-container"}>
                                        <p><strong>react</strong></p>
                                        <p>react</p>
                                    </div>
                                </a>
                            </li>
                            <li className={"grid-el case"} data-tag={"wordpress"}>
                                <a href="#">
                                    <div className={"featured-image"}>
                                        <img src="https://images.unsplash.com/photo-1631746165838-e92bb88249d2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80" alt=""/>
                                    </div>
                                    <div className={"text-container"}>
                                        <p><strong>wordpress</strong></p>
                                        <p>wordpress</p>
                                    </div>
                                </a>
                            </li>
                            <li className={"grid-el case"} data-tag={"shopify"}>
                                <a href="#">
                                    <div className={"featured-image"}>
                                        <img src="https://images.unsplash.com/photo-1631746165838-e92bb88249d2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80" alt=""/>
                                    </div>
                                    <div className={"text-container"}>
                                        <p><strong>shopify</strong></p>
                                        <p>shopify</p>
                                    </div>
                                </a>
                            </li>
                        </ul>
                    </div>
                </section>
            </>
        )
    }
}

export default Projects;