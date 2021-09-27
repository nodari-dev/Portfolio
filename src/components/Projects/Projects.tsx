import React from 'react';
import './style.scss';

class Projects extends React.Component<any, any> {

    filterCases = (e: any) => {
        // Click on filter and select one or more
        // 1.add class to active filter
        // 2. check all filters classes and add them to array
        // 3. filter items according to array with tags

        e.target.classList.toggle("active-tag");
        let tagList = [];
        let caseList: any = document.querySelectorAll(".case");
        let filterList: any = document.querySelectorAll(".active-tag");

        for(let filter of filterList){
            tagList.push(filter.getAttribute("data-tag"));
        }

        tagList.includes("all")
            ? this.setDefaultFilters(tagList, caseList)
            : this.setCustomFilters(tagList, caseList);
    }

    setCustomFilters(tagList: string[], caseList: string[]) {
        // We have two arrays : active filters (tagList), all cases (caseList)
        // Every case has array of tags
        // We check if that array includes tag from filters
        // But if we select "All" filter, everything will be set to default settings

        tagList.forEach((tag: string) => {
            caseList.forEach((caseItem: any) => {
                let caseTags = caseItem.getAttribute("data-tag").split(" ");
                caseTags.includes(tag)
                    ? caseItem.classList.remove("hidden")
                    : caseItem.classList.add("hidden");
                })
            })
        }

    setDefaultFilters(tagList: string[], caseList: string[]){
        // In case when we want to disable all filters we will use "All"
        caseList.forEach((caseItem: any) => {
            caseItem.classList.remove("hidden");
        })
    }

    render() {
        return(
            <>
                <section className={"projects"}>
                    <div className={"container"}>
                        <h1>portfolio</h1>
                        <ul className={"portfolio-filter"}>
                            <li onClick={this.filterCases} className={"active-tag"} data-tag={"all"}>all</li>
                            <li onClick={this.filterCases} data-tag={"javascript"}>javascript</li>
                            <li onClick={this.filterCases} data-tag={"react"}>react</li>
                            <li onClick={this.filterCases} data-tag={"wordpress"}>wordpress</li>
                            <li onClick={this.filterCases} data-tag={"shopify"}>shopify</li>
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