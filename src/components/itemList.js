import React, { Fragment } from "react"
import Item from './Items'
import '../styles/ItemList.css'


const itemList = ({data}) => {
    return (
        <Fragment>
            <div className="itemList">
                {data.map((data)=>{
                    return (
                        <Item
                        key = {data.id}
                        title ={data.title}
                        price = {data.price}
                        img = {data.image}
                        description = {data.description}
                        />
                    )
                })}
            </div>
        </Fragment>
    )
}

export default itemList;