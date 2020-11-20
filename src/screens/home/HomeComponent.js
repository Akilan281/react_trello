import React, {useState, useEffect} from 'react'
import { connect } from 'react-redux'
import {listData} from '../../redux/action/Action'
import './styles/home.css'
import ListComponent from '../../components/ListComponent'

function HomeComponent(props) {

    useEffect(()=>{
console.log("props", props.newlist)
    },[])

    return (
        <div>
            <nav className="navs1">
               <img alt="Trello" className="trello1"
                            src="https://d2k1ftgv7pobq7.cloudfront.net/meta/c/p/res/images/trello-header-logos/76ceb1faa939ede03abacb6efacdde16/trello-logo-blue.svg">
                        </img>
                    <div>
                        <button  className="btn icons"><span className="icon"><i className="fa fa-trello" ></i></span>Boards</button>
                    </div>
                </nav>
                <ListComponent />
        </div>
    )
}

const mapStateToProps = ({ HomeReducer }) => {
    return {
        newlist: HomeReducer.newlist,
        
    }
}

// const mapDispatchToProps = (dispatch) => {
//     return {
//         listdata: (data) => (dispatch(listdata(data))),
//         
//     }
// }

export default connect(mapStateToProps, null)(HomeComponent)

