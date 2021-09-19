import './taskDetail.css'

export default function TaskDetail(props) {
    if (props.task === null) { return null }
    return (
        <div className="detailBox">
            <div>
                <h2>Selected Task Detail</h2>
            </div>
            <div>
                <p>_id: {props.task._id}</p>
                <p>name: {props.task.name}</p>
                <p>Created_date: {props.task.Created_date}</p>
                <p>__v: {props.task.__v}</p>
            </div>
        </div>
    );
}