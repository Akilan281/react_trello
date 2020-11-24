import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { listData } from '../redux/action/Action'

function CardsComponent(props) {

    const [description, setDescription] = useState(props.cardDetails.description)
    const [comments, setComments] = useState(props.cardDetails.comments)

    useEffect(() => {
        let message = props.cardDetails
        console.log("message", message)
    }, [])

    function handleclose() {
        props.modalCB(false)
    }

    function handleinput(value, type) {
        if (type == "desc") {
            setDescription(value)
        } else {
            setComments(value)
        }
    }

    function deleteCard() {
        props.deleteCB(props.cardDetails.parentindex, props.cardDetails.cardindex)
        props.modalCB(false)
    }

    function addDescription() {
        let cardmessages = Object.assign({}, props.cardDetails)
        cardmessages.description = description
        props.updateCB(cardmessages)
        props.modalCB(false)
    }
    function addComments() {
        let cardmessages = Object.assign({}, props.cardDetails)
        cardmessages.comments = comments
        props.updateCB(cardmessages)
        props.modalCB(false)
    }
    return (
   <div className="cardback">
            <div className="list-wrapper1">
            <div className="list3">
                <div className="card-composer3">
                    <div className="cards3">
                        <div className="cardsitem3">
                            <div className="text2" >{props.cardDetails.cardTitle} </div >
                            <div><i className=" trshicon fa fa-trash" onClick={deleteCard} ></i></div>
                        </div>
                        <div className="cardsinput">
                            Add Description
                    <input className="form-control" placeholder="Enter Description" value={description} onChange={(e) => handleinput(e.target.value, "desc")}></input>
                            <button className="btn btn-success" onClick={addDescription}>Add description</button>
                        </div>
                        <div className="cardsinput">
                            Add comments
                    <textarea className="form-control" placeholder="Enter Comments" value={comments} onChange={(e) => handleinput(e.target.value)}></textarea>
                            <button className="btn btn-success" onClick={addComments} >Add comments</button>
                        </div>
                        <div className="cardsitem3"> <button className="btn btn-primary">Add Changes</button>
                            <button className="btn btn-danger" onClick={handleclose}>close</button>
                        </div>

                    </div>

                </div>

            </div>
        </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(CardsComponent)
