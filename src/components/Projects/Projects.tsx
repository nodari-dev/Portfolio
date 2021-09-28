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
        // This function check what type of filter we have
        // If type is default "all" script will run defaultFiltering()
        // If type is custom => customFiltering()
        // Params: e

        e.target.classList.contains(this.state.default)
            ? this.defaultFiltering(e.target)
            : this.customFiltering(e.target);
    }

    defaultFiltering(item: any){
        let customFilters = document.querySelectorAll("." + this.state.filter);

        customFilters.forEach((filter: any) => {
            if(filter.classList.contains(this.state.custom)) this.activateItem(filter, false);
        })

        this.handleFilter(item);
    }

    customFiltering(item: any){
        let defaultFilter : any = document.querySelector("." + this.state.default);
        this.activateItem(defaultFilter, false);
        this.handleFilter(item);
    }

    handleFilter(item: any){
        if(item.classList.contains(this.state.custom)){
            item.classList.contains(this.state.active)
                ? item.classList.remove(this.state.active)
                : item.classList.add(this.state.active);
        } else{
            item.classList.add(this.state.active);
        }

        this.filterCases();
    }

    activateItem(item: any, show: boolean){
        show
            ? item.classList.add(this.state.active)
            : item.classList.remove(this.state.active);
    }

    filterCases(){
        let filters = this.getActiveFilters();
        let cases = this.getCases();
        let filtersTags: string[] = [];

        filters.forEach((item: any) => {
            filtersTags.push(item.getAttribute(this.state.dataKey));
        })

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
        return document.querySelectorAll("." + this.state.caseKey);
    }

    getActiveFilters(){
        return document.querySelectorAll("." + this.state.active);
    }


    // filterCases = (e: any) => {
    //     // Click on filter and select one or more
    //     // 1.add class to active filter
    //     // 2. check all filters classes and add them to array
    //     // 3. filter items according to array with tags
    //
    //     e.target.classList.toggle(this.state.active);
    //     let tagList = [];
    //     let caseList: any = document.querySelectorAll("." + this.state.caseKey);
    //     let filterList: any = document.querySelectorAll("." + this.state.filter);
    //     let defaultFilter: any = document.querySelector("." + this.state.default);
    //
    //     e.target.getAttribute(this.state.dataKey) !== "all"
    //         ? this.handleActive(defaultFilter, false)
    //         : this.handleActive(defaultFilter, true);
    //
    //     for(let filter of filterList){
    //         if(filter.classList.contains(this.state.active)){
    //             tagList.push(filter.getAttribute(this.state.dataKey))
    //         }
    //     }
    //
    //     // if (tagList.length === 0){
    //     //     this.setDefault(tagList, caseList, filterList);
    //     //
    //     // } else{
    //     //     tagList.includes("all") || e.target.getAttribute(this.state.dataKey) === "all"
    //     //         ? this.setDefault(tagList, caseList, filterList)
    //     //         : this.setCustom(tagList, caseList);
    //     // }
    // }
    //
    // setCustom(tagList: string[], caseList: string[]) {
    //     // We have two arrays : active filters (tagList), all cases (caseList)
    //     // Every case has array of tags
    //     // We check if that array includes tag from filters
    //     // But if we select "All" filter, everything will be set to default settings
    //
    //     let defaultFilter : any = document.querySelector("." + this.state.default);
    //     this.handleActive(defaultFilter, true);
    //
    //     tagList.forEach((tag: string) => {
    //         caseList.forEach((caseItem: any) => {
    //             let caseTags = caseItem.getAttribute(this.state.dataKey).split(" ");
    //             caseTags.includes(tag)
    //                 ? this.handleActive(caseItem, true)
    //                 : this.handleActive(caseItem, false);
    //         })
    //     })
    // }
    //
    // setDefault(tagList: string[], caseList: string[], filterList: string[]){
    //     console.log("DEFAULT");
    //     console.log(filterList);
    //
    //     // In case when we want to disable all filters we will use "All"
    //     filterList.forEach((filter: any) =>{
    //         filter.classList.contains(this.state.active)
    //             ? this.handleActive(filter, false)
    //             : this.handleActive(filter, true);
    //     })
    //
    //     caseList.forEach((caseItem: any) => {
    //         this.handleActive(caseItem, true);
    //     })
    // }
    //


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