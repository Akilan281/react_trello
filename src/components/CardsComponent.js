import React, { useState, useEffect } from 'react'

function CardsComponent(props) {

    const [cards, setCards] = useState([])
    const [indexx, setIndexx] = useState("")


    function handleCardDel(item, index) {
        let listinfo =  JSON.parse(localStorage.getItem('todolist')) ?? []
        console.log("listinfo",listinfo)
        let cardInfo = props.cardDetails
        console.log("cardInfo",cardInfo)
        let indexofList = props.cardindex
        console.log("indexofList",indexofList)
        console.log("item",item)
        console.log("index",index)
        let detailsOfCard = listinfo[indexofList].cardlist
        console.log("detailsOfCard",detailsOfCard)
    //  detailsOfCard.splice(index,1)
        console.log("detailsOfCard",detailsOfCard)
        // localStorage.setItem('todolist', JSON.stringify(detailsOfCard))
    
    }
    {console.log("props.cardDetails.cardlist",props.cardDetails)}
    return (
        
        <div>
            {

                props.cardDetails.cardlist.map((yitem, yindex) => {
                    return (
                        <div>
                            < div className="card-composer1">
                                <div className="cards1">
                                    <div className="cards2"  type="button" data-toggle="modal" data-target="#exampleModalCenter">
                                        <span > {yitem.cardTitle} </span> <span><i onClick={() => { handleCardDel(yitem, yindex) }}  className="fa trshicon fa-trash"></i></span>
                                    </div>
                                </div>
                            </ div>

                            <div>

                         

                                </div>
                            {/* <div className="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">

                                <div className="modal-dialog modal-dialog-centered" role="document">



                                    <div className="modal-content">
                                        <div className="modal-header">
                                            <h5 className="modal-title" id="exampleModalLongTitle">{yitem.cardTitle}</h5>
                                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                                <span aria-hidden="true">&times;</span>
                                            </button>
                                        </div>
                                        <div className="modal-body">
                                           {cards.cardTitle}
                                </div>
                                        <div className="modal-footer">
                                            <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                                            <button type="button" className="btn btn-primary">Save changes</button>
                                        </div>
                                    </div>

                                </div>

                            </div> */}
                        </div>
                    )
                })
            }
               < div className="card-composer1">
                                <div className="cards1">
                                <div className="">
                                     {cards.cardTitle}
                                            </div>
                                   
                                </div>
                            </ div>
        </div>
    )
}

export default CardsComponent
