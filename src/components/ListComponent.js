import React, { useState, useEffect } from 'react'
import './styles/listcard.css'
import { randomId } from '../common/Utils';
import CardsComponent from './CardsComponent'
import { connect } from 'react-redux'
import {listData} from '../redux/action/Action'

function ListComponent(props) {

    const [listAdd, setListAdd] = useState(false)
    const [listTitle, setListTitle] = useState('')
    const [listName, setListName] = useState([])
    const [cardinput, setCardInput] = useState(false)
    const [currentIndex, setCurrentIndex] = useState('')
    const [cardname, setCardName] = useState('')
    useEffect(() => {

        let userdetails = JSON.parse(localStorage.getItem('todolist')) ?? []
        console.log('userdetails', userdetails)
        setListName(userdetails)
        console.log("newlistredux",props.newlist)
        props.contactdata(userdetails)
        console.log("newlistredux",props.newlist)
    }, [])

    function handleAddlist() {
        setListAdd(true)
    }
    function handleHideAdd() {
        setListAdd(false)
    }

    function handleListTitle(value) {
        setListTitle(value)
    }

    function addNewList() {
        let newlist = Object.assign([], listName)
        let listobj = {
            title: listTitle,
            cardlist: [],
            listid: randomId()
        }

        newlist.push(listobj)
        localStorage.setItem('todolist', JSON.stringify(newlist))
        setListName(newlist)
        props.contactdata(newlist)
        console.log("new", newlist)
        setListAdd(false)
    }

    function deleteList(item, index) {
        console.log("index", index)
        console.log('item', item)
        let deleteData = Object.assign([], listName)
        let findind = deleteData.findIndex((itemindex) => itemindex.listid == item.listid)
        console.log("findind", findind)
        deleteData.splice(findind, 1)
        setListName(deleteData)
        props.contactdata(deleteData)
        localStorage.setItem('todolist', JSON.stringify(deleteData))
    }

    function cardAdding(index) {
        setCardInput(true)
        setCurrentIndex(index)
    }

    function addCardName(value) {
        setCardName(value)
    }

    function addingNewCard(item) {
        let newcard = Object.assign([], listName)
        let indexoflist = newcard.findIndex((listitem) => listitem.listid == item.listid)
        console.log(indexoflist)

        let cardData = newcard[indexoflist].cardlist
        let cardObj = {
            cardTitle: cardname,
            cardid: randomId(),
            description: '',
            comments: ''
        }
        cardData.push(cardObj)
        newcard[indexoflist].cardlist = cardData
        console.log("carddata", newcard)
        setListName(newcard)
       localStorage.setItem('todolist', JSON.stringify(newcard))
       props.contactdata(newcard)
       setCardInput(false)
    }
    function handleCardDel(index, yindex) {
        let delCard =  JSON.parse(localStorage.getItem('todolist')) ?? []
        console.log("delCard",delCard)
        console.log("index",index)
        console.log("yindex",yindex)
        delCard[index].cardlist.splice(yindex, 1);
        setListName(delCard)
        localStorage.setItem('todolist', JSON.stringify(delCard))
        props.contactdata(delCard)    
    }

    {console.log("props.newlist",props.newlist)}

    return (


        <div className="listback container-fluid">
            <div className="list-wrapper2 ">
                {
                    listName.map((item, index) => {
                        return (

                            <div className="list2">
                                <div className="card-composer1">

                                    <div className="cardss">

                                        <div className="cardsitem1">
                                            <div className="text2" >{item.title} </div >

                                            <div><i className=" icon fa fa-trash" onClick={() => deleteList(item, index)} ></i></div>

                                        </div>

                                    </div>

                                </div>

                                {/* <CardsComponent cardDetails={item} cardindex={index} /> */}
                                {
                                    item.cardlist.map((yitem, yindex)=>{
                                        return(
                                            < div className="card-composer1">
                                <div className="cards1">
                                    <div className="cards2"  type="button" data-toggle="modal" data-target="#exampleModalCenter">
                                        <span > {yitem.cardTitle} </span> <span><i onClick={() => { handleCardDel(index, yindex) }}  className="fa trshicon fa-trash"></i></span>
                                    </div>
                                </div>
                            </ div>

                                        )
                                    })
                                }

                                {
                                    cardinput && currentIndex == index ?
                                        <div>
                                            < div className="card-composer1">
                                                <div className="cardss">
                                                    <input className="form-control" placeholder="Enter title for this card" onChange={(e) => addCardName(e.target.value)}></input>
                                                </div>
                                            </div>
                                            <div className="cardss"><button className="btn btn-success" onClick={() => addingNewCard(item)}>Add card</button></div>
                                        </div> : <div className="card-composer">
                                            <div className="cardss">

                                                <div className="text3" onClick={() => cardAdding(index)}> <span>+ Add a card </span> </div>
                                            </div>

                                        </div>
                                }

                            </div>

                        )
                    })
                }
                {
                    listAdd ?
                        <div>
                            <div className="list1">
                                <div className="card-composer2">
                                    <div className="card-comp2" >
                                        <input className="for form-control" placeholder="Enter list title" onChange={(e) => handleListTitle(e.target.value)}></input>

                                    </div>
                                    <div>
                                        <button className="btn btn-success btn-sm " onClick={addNewList} > Add card</button>
                                        <span
                                            className="btn" onClick={handleHideAdd}> X
                                                </span>

                                    </div>
                                </div>

                            </div>
                        </div> : <div className="list1">
                            <div className="card-composer2">
                                <div className="card-comp" >
                                    <div className="text1" onClick={handleAddlist}> <span>+ Add another list </span></div>
                                </div>
                            </div>
                        </div>
                }


            </div>



            {  console.log("listName", listName)}


        </div>


    )
}


const mapStateToProps = ({ HomeReducer }) => {
    return {
        newlist: HomeReducer.newlist,
        
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        contactdata: (data) => (dispatch(listData(data))),
        
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ListComponent)


