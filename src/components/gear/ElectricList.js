import React, { Component } from 'react'
import { Link } from "react-router-dom"
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import { faPen } from '@fortawesome/free-solid-svg-icons'
library.add(faTrash)
library.add(faPen)

export default class ElectricList extends Component {
    render() {
        return (
            <React.Fragment>
                <section className="alectricEntries">
                    {
                        this.props.electrics.map(electric =>

                            <div key={electric.id} className="card">
                                <div className="card-header bg-success"></div>
                                <div className="card-body">
                                    <section className="card-title">
                                        Make: {electric.make}
                                    </section>
                                    <section className="card-title">
                                        Model: {electric.model}
                                    </section>
                                    <section className="card-title">
                                        Strings: {electric.strings}
                                    </section>
                                    <section className="card-title">
                                        Pickup: {electric.pickups}
                                    </section>
                                    <section className="card-title">
                                        Body: {electric.body}
                                    </section>
                                    <section className="card-title">
                                        Special Features: {electric.features}
                                    </section>
                                    <p></p>
                                    <h6>
                                        <FontAwesomeIcon icon="trash" color="red" onClick={() => this.props.deleteElectricPost(electric.id, "electrics")} />
                                        <p></p>
                                        <Link to={`/gear/edit/electric/${electric.id}`}><FontAwesomeIcon
                                            icon="pen"
                                            color="blue" /></Link>
                                    </h6>
                                </div>
                            </div>
                        )
                    }
                </section>
                <p></p>
            </React.Fragment>
        )
    }
}