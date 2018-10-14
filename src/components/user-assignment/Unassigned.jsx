import React, { Component } from 'react'
import { connect } from 'react-redux'
import ContentHeader from '../common/ContentHeader'
import AssignmentList from './AssignmentList'
import { getUnassignedUser, getDoctors } from '../../actions/assignmentActions'

class Unassigned extends Component {
    componentDidMount () {
        this.props.getUnassignedUser()
    }
    render() {
        const { unAssignedUser } = this.props.assignment
        return (
            <div className="content-wrapper">
                <ContentHeader heading="Unassigned Users" subHeading="Users" />
                <AssignmentList status="unassigned" users={unAssignedUser}/>      
            </div>
        )
    }
}
const mapStateToProps = state => ({
    assignment: state.assignment
})

export default connect(mapStateToProps, { getUnassignedUser, getDoctors })(Unassigned)
