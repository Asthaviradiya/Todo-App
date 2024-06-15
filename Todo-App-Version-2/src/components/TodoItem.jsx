function TodoItem({name,date}){
    return( <div class="container">
    <div class="row a-row">
      <div class="col-6">{name}</div>
      <div class="col-4">{date}</div>
      <div class="col-2"><button type="button" class="btn btn-danger a-btn">delete</button>
      </div>
    </div>
    </div>
    );
}
export default TodoItem;