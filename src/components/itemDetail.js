import React, { Component } from 'react'
import "./itemDetail.css"
import Portal from "./portal"
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faTimes} from '@fortawesome/free-solid-svg-icons';

class itemDetail extends Component {
    render() {
        const {children, toggle, active} = this.props
    
        return(
            <Portal>
                {active && (
                    <div className="Portal">
                        <div className="Portal-content">
                            <button className="btn-close" onClick={toggle}>
                                <FontAwesomeIcon icon = {faTimes} />
                            </button>
                            <div>
                                {children}
                            </div>
                        </div>
                        <div className="Portal-background" onClick={toggle}>
                        </div>
                    </div>
                )

                }
            </Portal>
        )
    }
}

export default itemDetail; 