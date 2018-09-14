import React, { Component } from 'react'
import { Link } from "react-router-dom"
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import { faPen } from '@fortawesome/free-solid-svg-icons'
library.add(faTrash)
library.add(faPen)


export default class BassList extends Component {
    render() {
        return (
            <React.Fragment>
                <section className="bassEntries">
                    {
                        this.props.basses.map(bass =>

                            <div key={bass.id} className="card">
                                <div className="card-header bg-success"></div>
                                <div className="card-body">
                                    <section className="card-title">
                                        Make: {bass.make}
                                    </section>
                                    <section className="card-title">
                                        Model: {bass.model}
                                    </section>
                                    <section className="card-title">
                                        Strings: {bass.strings}
                                    </section>
                                    <section className="card-title">
                                        Pickup: {bass.pickups}
                                    </section>
                                    <section className="card-title">
                                        Body: {bass.body}
                                    </section>
                                    <section className="card-title">
                                        Special Features: {bass.features}
                                    </section>
                                    <p></p>
                                    <h6>
                                    <FontAwesomeIcon icon="trash" color="red" onClick={() => this.props.deleteBassPost(bass.id, "basses")} />
                                        <p></p>
                                    <Link to={`/gear/edit/bass/${bass.id}`}><FontAwesomeIcon
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