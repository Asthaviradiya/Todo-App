function TodoItem({name,date}){
    return( <div class="container">
    <div className="row a-row">
      <div className="col-6">{name}</div>
      <div className="col-4">{date}</div>
      <div className="col-2"><button type="button" class="btn btn-danger a-btn">delete</button>
      </div>
    </div>
    </div>
    );
}
export default TodoItem;