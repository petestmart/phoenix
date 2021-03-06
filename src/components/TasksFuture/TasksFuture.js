// ----- REACT ----- //
import React, { Component } from 'react';
import { connect } from 'react-redux';

// ----- COMPONENTS ----- //
import TasksLineItemsContent from '../TasksLineItemsContent/TasksLineItemsContent';
import TasksNotes from '../TasksNotes/TasksNotes';

// ----- MATERIAL UI CORE ----- //
import List from '@material-ui/core/List';
class TasksTomorrow extends Component {

    render() {

        let userTasks;

        // Dates
        let today = new Date();
        let dd = String(today.getDate()).padStart(2, '0');
        let mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
        let yyyy = today.getFullYear();
        let taskDay = mm + '/' + dd + '/' + yyyy;
        let tomorrow = new Date(today);
        tomorrow.setDate(tomorrow.getDate() + 1)
        let ee = String(tomorrow.getDate()).padStart(2, '0');
        let nn = String(tomorrow.getMonth() + 1).padStart(2, '0');
        let zzzz = tomorrow.getFullYear();
        let taskTomorrow = nn + '/' + ee + '/' + zzzz;

        userTasks = this.props.reduxState.tasks.map(({ id, task_name, due_date, complete, contact_id, job_id, disabled, note }) => {
            if (taskTomorrow < due_date) {
                return (
                    <div style={{marginLeft: 20, paddingBottom: 3}}>
                        <TasksLineItemsContent
                            id={id}
                            task_name={task_name}
                            due_date={due_date}
                            complete={complete}
                            contact_id={contact_id}
                            job_id={job_id}
                            disabled={disabled}
                        />
                        <TasksNotes
                            id={id}
                            task_name={task_name}
                            due_date={due_date}
                            complete={complete}
                            contact_id={contact_id}
                            job_id={job_id}
                            disabled={disabled}
                            note={note}
                        />
                    </div>
                ) // End Return
            }// End If Statement
        }) // End userTasks
        return (
            <List>
                {userTasks}

            </List>
        ) // End Return
    } // End Render
} // End Class

const mapStateToProps = (reduxState) => {
    return {
        tasks: reduxState.tasksReducer,
        reduxState
    }
}

export default connect(mapStateToProps)(TasksTomorrow);